angular.module('tnApp.webrtc').service("RTCConfig", ['Socket', '$state', '$rootScope', '$window', '$q', 'UIPeerConnection', 'UIMain', 'UISettings', 'UIShareFiles', 'UIUsersList', function(socket, $state, $rootScope, $window, $q, UIPeerConnection, UIMain, UISettings, UIShareFiles, UIUsersList) {

    var RTCConfig = {};

    console.warn("uiPeerConnection", UIPeerConnection)

    config = {
        openSocket: function(config) {
            console.log("Top of openSocket Function", config);
            var SIGNALING_SERVER = '/',
                defaultChannel = 'NinjaLounge';

            console.log("Default Chan Name", defaultChannel);

            var channel = config.channel || defaultChannel;
            var sender = Parse.User.current().get('username') || Math.round(Math.random() * 999999999) + 999999999;
            config.channel = channel;

            console.warn("Override, default with config.channel", config.channel)
            console.log("SENDER", sender, "CHANNEL", channel);


            io.connect(SIGNALING_SERVER).emit('new-channel', {
                channel: channel,
                sender: sender
            });
            console.warn("SOCKET FROM WEBRTC.CONFIG.SERVICE", socket);
            // var socket = io.connect(SIGNALING_SERVER + channel);
            socket.channel = channel;
            socket.on('connect', function() {
                console.log("Connected IN WEBRTC.CONFIG.SERVICE");
                if (config.callback) config.callback(socket);
            });

            socket.send = function(message) {
                console.warn("WEBRTC.CONFIG.SERVICE", "SENDING MESSAGE TO SERVER", message)
                socket.emit('message', {
                    sender: sender,
                    data: message
                });
            };

            socket.on('message', config.onmessage);
        },
        onRemoteStream: function(media) {
            var mediaElement = getMediaElement(media.video, {
                width: (videosContainer.clientWidth / 2) - 50,
                buttons: ['mute-audio', 'mute-video', 'full-screen', 'volume-slider']
            });
            mediaElement.id = media.streamid;
            videosContainer.insertBefore(mediaElement, videosContainer.firstChild);
        },
        onRemoteStreamEnded: function(stream, video) {
            if (video.parentNode && video.parentNode.parentNode && video.parentNode.parentNode.parentNode) {
                video.parentNode.parentNode.parentNode.removeChild(video.parentNode.parentNode);
            }
        },
        onRoomFound: function(room) {
            var alreadyExist = document.querySelector('button[data-broadcaster="' + room.broadcaster + '"]');
            if (alreadyExist) return;

            if (typeof roomsList === 'undefined') roomsList = document.body;

            var tr = document.createElement('tr');
            tr.innerHTML = '<td><strong>' + room.roomName + '</strong> shared a conferencing room with you!</td>' +
                '<td><button class="join">Join</button></td>';
            roomsList.insertBefore(tr, roomsList.firstChild);

            var joinRoomButton = tr.querySelector('.join');
            joinRoomButton.setAttribute('data-broadcaster', room.broadcaster);
            joinRoomButton.setAttribute('data-roomToken', room.roomToken);

            console.log("ONROOMFOUND - join room func PROPERTIES", room.roomName)
            joinRoomButton.onclick = function() {
                this.disabled = true;

                var broadcaster = this.getAttribute('data-broadcaster');
                var roomToken = this.getAttribute('data-roomToken');
                RTCConfig.captureUserMedia(function() {
                    conferenceUI.joinRoom({
                        roomToken: roomToken,
                        joinUser: broadcaster
                    });
                }, function() {
                    joinRoomButton.disabled = false;
                });
            };
        },
        onRoomClosed: function(room) {
            var joinButton = document.querySelector('button[data-roomToken="' + room.roomToken + '"]');
            if (joinButton) {
                // joinButton.parentNode === <li>
                // joinButton.parentNode.parentNode === <td>
                // joinButton.parentNode.parentNode.parentNode === <tr>
                // joinButton.parentNode.parentNode.parentNode.parentNode === <table>
                joinButton.parentNode.parentNode.parentNode.parentNode.removeChild(joinButton.parentNode.parentNode.parentNode);
            }
        }
    };

    RTCConfig.setupNewRoomButtonClickHandler = function () {
        RTCConfig.btnSetupNewRoom.disabled = true;
        document.getElementById('new-room-name').disabled = true;
        RTCConfig.captureUserMedia(function() {
            conferenceUI.createRoom({
                roomName: (socket.id || 'NinjaLounge' ||
                        document.getElementById('new-room-name') || {}).value ||
                    'Anonymous'
            });
        }, function() {
            RTCConfig.btnSetupNewRoom.disabled = document.getElementById('new-room-name').disabled = false;
        });
    }

    RTCConfig.captureUserMedia = function (callback, failure_callback, forceSkipCustomGetUserMediaBar) {
        if (!forceSkipCustomGetUserMediaBar) {
            var mediaConstraints = {
                audio: true,
                video: true
            };

            navigator.customGetUserMediaBar(mediaConstraints, function() {

                // now you can invoke "getUserMedia" to seamlessly capture user's media
                RTCConfig.captureUserMedia(callback, failure_callback, true);

            }, function() {

                // user clicked "Deny" or "x" button
                // throw new Error('PermissionDeniedError');
                alert('PermissionDeniedError: User denied permission.');

                if (failure_callback) failure_callback();

            });
            return;
        }

        var video = document.createElement('video');

        getUserMedia({
            minWidth: 500,
            maxWidth: 500,
            video: video,
            onsuccess: function(stream) {
                console.log("SUCCESS GET USER MEDIA -- stream", stream)
                config.attachStream = stream;
                callback && callback();

                video.setAttribute('muted', true);

                var mediaElement = getMediaElement(video, {
                    width: (videosContainer.clientWidth / 2) - 50,
                    buttons: ['mute-audio', 'mute-video', 'full-screen', 'volume-slider']
                });
                mediaElement.toggle('mute-audio');
                videosContainer.insertBefore(mediaElement, videosContainer.firstChild);
            },
            onerror: function(err) {
                console.log("FAILED GET USER MEDIA -- stream", err)
                alert('unable to get access to your webcam');
                callback && callback();
            }
        });
    }

    // RTCConfig.conferenceUI = conference(config);

    // console.warn("CONFERENCEUI", RTCConfig.conferenceUI);

    /* UI specific */
    RTCConfig.videosContainer = document.getElementById('videos-container') || document.body;
    RTCConfig.btnSetupNewRoom = document.getElementById('setup-new-room');
    RTCConfig.roomsList = document.getElementById('rooms-list');

    if (RTCConfig.btnSetupNewRoom) RTCConfig.btnSetupNewRoom.onclick = RTCConfig.setupNewRoomButtonClickHandler;

    function rotateVideo(video) {
        console.log(this)
        video.style[navigator.mozGetUserMedia ? 'transform' : '-webkit-transform'] = 'rotate(0deg)';
        setTimeout(function() {
            video.style[navigator.mozGetUserMedia ? 'transform' : '-webkit-transform'] = 'rotate(360deg)';
        }, 1000);
    }

    (function() {
        var uniqueToken = document.getElementById('unique-token');
        if (uniqueToken)
            if (location.hash.length > 2) uniqueToken.parentNode.parentNode.parentNode.innerHTML = '<h2 style="text-align:center;"><a href="' + location.href + '" target="_blank">Share this link</a></h2>';
            else uniqueToken.innerHTML = uniqueToken.parentNode.parentNode.href = '#' + (Math.random() * new Date().getTime()).toString(36).toUpperCase().replace(/\./g, '-');
    })();

    function scaleVideos() {
        var videos = document.querySelectorAll('video'),
            length = videos.length,
            video;

        var minus = 130;
        var windowHeight = 700;
        var windowWidth = 600;
        var windowAspectRatio = windowWidth / windowHeight;
        var videoAspectRatio = 4 / 3;
        var blockAspectRatio;
        var tempVideoWidth = 0;
        var maxVideoWidth = 0;

        for (var i = length; i > 0; i--) {
            blockAspectRatio = i * videoAspectRatio / Math.ceil(length / i);
            if (blockAspectRatio <= windowAspectRatio) {
                tempVideoWidth = videoAspectRatio * windowHeight / Math.ceil(length / i);
            } else {
                tempVideoWidth = windowWidth / i;
            }
            if (tempVideoWidth > maxVideoWidth)
                maxVideoWidth = tempVideoWidth;
        }
        for (var i = 0; i < length; i++) {
            video = videos[i];
            if (video)
                video.width = maxVideoWidth - minus;
        }
    }

    window.onresize = scaleVideos;

    console.log("ALL UI SETTTINGS")
    console.log(UIMain, "< ------- uiMain")
    console.log(UIPeerConnection, "< ------- uiPeerConnection")
    console.log(UIShareFiles, "< ------- uiShareFiles")
    console.log(UIUsersList, "< ------- uiUsersList")
    console.log(UISettings, "< ------- uiSettings")
    console.log(RTCConfig, "< ------- RTCConfig")

    return RTCConfig;

}]);