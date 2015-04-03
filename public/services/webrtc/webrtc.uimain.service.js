app.webrtc.service("UIMain", ['Socket', 'UIPeerConnection', '$rootScope', '$window', '$q', function(Socket, UIPeerConnection, $rootScope, $window, $q) {

    var UIMain = {};
    // https://www.webrtc-experiment.com:12034/

    UIMain.getElement = function (selector) {
        return document.querySelector(selector);
    }

    var main = UIMain.getElement('.main');

    UIMain.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

    UIMain.addNewMessage = function (args) {
        var newMessageDIV = document.createElement('div');
        newMessageDIV.className = 'new-message';

        var userinfoDIV = document.createElement('div');
        userinfoDIV.className = 'user-info';
        userinfoDIV.innerHTML = args.userinfo || '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/user.png">';

        userinfoDIV.style.background = args.color || UIPeerConnection.rtcMultiConnection.extra.color || getRandomColor();

        newMessageDIV.appendChild(userinfoDIV);

        var userActivityDIV = document.createElement('div');
        userActivityDIV.className = 'user-activity';

        userActivityDIV.innerHTML = '<h2 class="header">' + args.header + '</h2>';

        var p = document.createElement('p');
        p.className = 'message';
        userActivityDIV.appendChild(p);
        p.innerHTML = args.message;

        newMessageDIV.appendChild(userActivityDIV);

        main.insertBefore(newMessageDIV, main.firstChild);

        userinfoDIV.style.height = newMessageDIV.clientHeight + 'px';

        if (args.callback) {
            args.callback(newMessageDIV);
        }

        document.querySelector('#message-sound').play();
    }


    main.querySelector('button').onclick = function() {
        // var input = this.parentNode.querySelector('input');
        // input.disabled = this.disabled = true;

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

        var socket = Socket;
        var SIGNALING_SERVER = socket.io.uri;
        var channel = UIPeerConnection.rtcMultiConnection.channel = socket.id;
        UIPeerConnection.rtcMultiConnection.userid = Parse.User.current().id;

        console.log("Signaling Server",SIGNALING_SERVER, "Socket ID", channel);
        // var socket = io.connect(SIGNALING_SERVER);
        

        socket.on('presence', function(isChannelPresent) {
            if (!isChannelPresent) {
                UIMain.addNewMessage({
                    header: username,
                    message: 'No room found. Creating new room...<br /><br />You can share following link with your friends:<br /><a href="' + location.href + '">' + location.href + '</a>',
                    userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">'
                });
                UIPeerConnection.rtcMultiConnection.open(channel);
            } else {
                UIMain.addNewMessage({
                    header: username,
                    message: 'Room found. Joining the room...',
                    userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">'
                });
                UIPeerConnection.rtcMultiConnection.connect();
            }
        });
        console.warn("Emit Connect to ", channel)
        socket.emit('presence', UIPeerConnection.rtcMultiConnection.channel);
        console.warn("Emit Presence with chan", UIPeerConnection.rtcMultiConnection.channel)

        UIPeerConnection.rtcMultiConnection.openSignalingChannel = function(config) {
            var channel = config.channel || this.channel;

            io.connect(SIGNALING_SERVER).emit('new-channel', {
                channel: channel,
                sender: UIPeerConnection.rtcMultiConnection.userid
            });

            var socket = io.connect(SIGNALING_SERVER + channel);
            socket.channel = channel;

            socket.on('connect', function() {
                if (config.callback) config.callback(socket);
            });

            socket.send = function(message) {
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

    var isShiftKeyPressed = false;

    UIMain.getElement('.main-input-box textarea').onkeydown = function(e) {
        if (e.keyCode == 16) {
            isShiftKeyPressed = true;
        }
    };

    var numberOfKeys = 0;
    UIMain.getElement('.main-input-box textarea').onkeyup = function(e) {
        numberOfKeys++;
        if (numberOfKeys > 3) numberOfKeys = 0;

        if (!numberOfKeys) {
            if (e.keyCode == 8) {
                return UIPeerConnection.rtcMultiConnection.send({
                    stoppedTyping: true
                });
            }

            UIPeerConnection.rtcMultiConnection.send({
                typing: true
            });
        }

        if (isShiftKeyPressed) {
            if (e.keyCode == 16) {
                isShiftKeyPressed = false;
            }
            return;
        }


        if (e.keyCode != 13) return;

        UIMain.addNewMessage({
            header: UIPeerConnection.rtcMultiConnection.extra.username,
            message: 'Your Message:<br /><br />' + linkify(this.value),
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[UIPeerConnection.rtcMultiConnection.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/chat-message.png'),
            color: UIPeerConnection.rtcMultiConnection.extra.color
        });

        UIPeerConnection.rtcMultiConnection.send(this.value);

        this.value = '';
    };

    UIMain.getElement('#allow-webcam').onclick = function() {
        // this.disabled = true;

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
        // this.disabled = true;
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
        this.disabled = true;
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
            UIPeerConnection.rtcMultiConnection.send(this.files[0]);
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

    console.warn("UIMAIN", UIMain)

    return UIMain;

}]);