angular.module('tnApp.webrtc', ['tnApp.services']).service("UIMain", ['Socket', 'UIPeerConnection', '$rootScope', '$window', '$q', function(Socket, UIPeerConnection, $rootScope, $window, $q) {

    var UIMain = {};
    // https://www.webrtc-experiment.com:12034/

    UIMain.getElement = function(selector) {
        return document.querySelector(selector);
    }

    UIMain.main = UIMain.getElement('.main');

    UIMain.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    UIMain.addNewMessage = function (args) {
        console.log("ADDNEW MESSAGE - ARGS", args)
        var newMessageDIV = document.createElement('div');
        newMessageDIV.className = 'new-message';

        var userinfoDIV = document.createElement('div');
        userinfoDIV.className = 'user-info';
        userinfoDIV.innerHTML = args.userinfo || '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/user.png">';

        userinfoDIV.style.background = args.color || UIPeerConnection.rtcMultiConnection.extra.color || UIMain.getRandomColor();

        newMessageDIV.appendChild(userinfoDIV);

        var userActivityDIV = document.createElement('div');
        userActivityDIV.className = 'user-activity';

        userActivityDIV.innerHTML = '<h2 class="header">' + args.header + '</h2>';

        var p = document.createElement('p');
        p.className = 'message';
        userActivityDIV.appendChild(p);
        p.innerHTML = args.message;

        newMessageDIV.appendChild(userActivityDIV);

        UIMain.main.insertBefore(newMessageDIV, UIMain.main.firstChild);

        userinfoDIV.style.height = newMessageDIV.clientHeight + 'px';

        if (args.callback) {
            args.callback(newMessageDIV);
        }

        document.querySelector('#message-sound').play();
    }

    UIMain.main.querySelector('button').onclick = function() {
        var username = Parse.User.current().get('username') || 'Anonymous';

        UIPeerConnection.rtcMultiConnection.extra = {
            username: username,
            color: UIMain.getRandomColor()
        };

        UIMain.addNewMessage({
            header: username,
            message: 'Searching for existing rooms...',
            userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">'
        });

        UIMain.nsp = '/';
        var socket = Socket;

        socket.on('presence', function(isChannelPresent) {
            console.warn("ISCHANNELPRESENT? -- SHould be -- ", isChannelPresent)
            if (!isChannelPresent) {
                UIMain.addNewMessage({
                    header: username,
                    message: 'No room found. Creating new room...<br /><br />You can share following link with your friends:<br /><a href="' + location.href + '">' + location.href + '</a>',
                    userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">'
                });
                socket.open(socket.id);
            } else {
                UIMain.addNewMessage({
                    header: username,
                    message: 'Room found. Joining the room...',
                    userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">'
                });
                socket.connect();
            }
        });
        socket.emit('presence', socket.id);

        console.log("EMIT PRESENCE", socket.id)
        console.log("SOCKET ID", socket.id)

        UIPeerConnection.rtcMultiConnection.openSignalingChannel = function(config) {
            var channel = config.channel || UIMain.channel;

            io.connect(UIMain.nsp).emit('new-channel', {
                channel: channel,
                sender: 'NinjaLounge' // Replace with Handshake ID
            });

            var socket = io.connect(UIMain.nsp + channel);
            socket.channel = channel;

            socket.on('connect', function() {
                console.log("ON CONNECT HANDLER")
                if (config.callback) config.callback(socket);
            });

            socket.send = function(message) {
                console.log("EMITTING MESSAGE", message, "also sending this -->", {
                    sender: UIPeerConnection.rtcMultiConnection.userid,
                    data: message
                })

                socket.emit('message', {
                    sender: UIPeerConnection.rtcMultiConnection.userid,
                    data: message
                });
            };

            socket.on('message', config.onmessage);
        };
    };

    UIMain.getUserinfo = function (blobURL, imageURL) {
        return blobURL ? '<video src="' + blobURL + '" autoplay></vide>' : '<img src="' + imageURL + '">';
    }

    UIMain.isShiftKeyPressed = false;

    UIMain.getElement('.main-input-box textarea').onkeydown = function(e) {
        if (e.keyCode == 16) {
            UIMain.isShiftKeyPressed = true;
        }
    };

    UIMain.numberOfKeys = 0;
    UIMain.getElement('.main-input-box textarea').onkeyup = function(e) {
        UIMain.numberOfKeys++;
        if (UIMain.numberOfKeys > 3) UIMain.numberOfKeys = 0;

        if (!UIMain.numberOfKeys) {
            if (e.keyCode == 8) {
                return UIPeerConnection.rtcMultiConnection.send({
                    stoppedTyping: true
                });
            }

            UIPeerConnection.rtcMultiConnection.send({
                typing: true
            });
        }

        if (UIMain.isShiftKeyPressed) {
            if (e.keyCode == 16) {
                UIMain.isShiftKeyPressed = false;
            }
            return;
        }


        if (e.keyCode != 13) return;

        UIMain.addNewMessage({
            header: UIPeerConnection.rtcMultiConnection.extra.username,
            message: 'Your Message:<br /><br />' + linkify(UIMain.value),
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[UIPeerConnection.rtcMultiConnection.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/chat-message.png'),
            color: UIPeerConnection.rtcMultiConnection.extra.color
        });

        UIPeerConnection.rtcMultiConnection.send(UIMain.value);

        UIMain.value = '';
    };

    UIMain.getElement('#allow-webcam').onclick = function() {
        UIMain.disabled = true;

        var session = {
            audio: true,
            video: true
        };

        UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
            var streamid = UIPeerConnection.rtcMultiConnection.token();
            UIPeerConnection.rtcMultiConnection.customStreams[streamid] = stream;

            UIPeerConnection.rtcMultiConnection.sendMessage({
                hasCamera: true,
                streamid: streamid,
                session: session
            });
        }, session);
    };

    UIMain.getElement('#allow-mic').onclick = function() {
        UIMain.disabled = true;
        var session = {
            audio: true
        };

        UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
            var streamid = UIPeerConnection.rtcMultiConnection.token();
            UIPeerConnection.rtcMultiConnection.customStreams[streamid] = stream;

            UIPeerConnection.rtcMultiConnection.sendMessage({
                hasMic: true,
                streamid: streamid,
                session: session
            });
        }, session);
    };

    UIMain.getElement('#allow-screen').onclick = function() {
        UIMain.disabled = true;
        var session = {
            screen: true
        };

        UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
            var streamid = UIPeerConnection.rtcMultiConnection.token();
            UIPeerConnection.rtcMultiConnection.customStreams[streamid] = stream;

            UIPeerConnection.rtcMultiConnection.sendMessage({
                hasScreen: true,
                streamid: streamid,
                session: session
            });
        }, session);
    };

    UIMain.getElement('#share-files').onclick = function() {
        var file = document.createElement('input');
        file.type = 'file';

        file.onchange = function() {
            UIPeerConnection.rtcMultiConnection.send(UIMain.files[0]);
        };
        fireClickEvent(file);
    };

    UIMain.fireClickEvent = function (element) {
        var evt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });

        element.dispatchEvent(evt);
    }

    UIMain.getElement('#self-url').innerHTML = UIMain.getElement('#self-url').href = location.href;

    UIMain.bytesToSize = function (bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Bytes';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    return UIMain;

}]);