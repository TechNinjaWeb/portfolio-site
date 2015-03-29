angular.module('tnApp.webrtc').service("UIPeerConnection", ['$state', 'Socket', '$window', '$q', function($state, Socket, $window, $q) {

    var UIPeerConnection = {};
    // https://www.webrtc-experiment.com:12034/

    UIPeerConnection.rtcMultiConnection = new RTCMultiConnection();

    console.log("Opening New RTCMultiConnection with new contstructor", UIPeerConnection.rtcMultiConnection);

    UIPeerConnection.rtcMultiConnection.session = {
        data: true
    };

    UIPeerConnection.rtcMultiConnection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
    };

    UIPeerConnection.rtcMultiConnection.customStreams = {};

    /*
    // http://www.rtcmulticonnection.org/docs/fakeDataChannels/
    UIPeerConnection.rtcMultiConnection.fakeDataChannels = true;
    if(UIPeerConnection.rtcMultiConnection.UA.Firefox) {
    UIPeerConnection.rtcMultiConnection.session.data = true;
    }
    */

    UIPeerConnection.rtcMultiConnection.autoTranslateText = false;

    UIPeerConnection.rtcMultiConnection.onopen = function(e) {
        console.log("UIPEERCONNECTION - ONOPEN FUNC - ATTEMPTING TO OPEN RTCMULTICONNECTION", e)
        UIMain.getElement('#allow-webcam').disabled = false;
        UIMain.getElement('#allow-mic').disabled = false;
        UIMain.getElement('#share-files').disabled = false;
        UIMain.getElement('#allow-screen').disabled = false;

        addNewMessage({
            header: e.extra.username,
            message: 'Data connection is opened between you and ' + e.extra.username + '.',
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[UIPeerConnection.rtcMultiConnection.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/info.png'),
            color: e.extra.color
        });

        numbersOfUsers.innerHTML = parseInt(numbersOfUsers.innerHTML) + 1;
    };

    var whoIsTyping = document.querySelector('#who-is-typing');
    UIPeerConnection.rtcMultiConnection.onmessage = function(e) {
        if (e.data.typing) {
            whoIsTyping.innerHTML = e.extra.username + ' is typing ...';
            return;
        }

        if (e.data.stoppedTyping) {
            whoIsTyping.innerHTML = '';
            return;
        }

        whoIsTyping.innerHTML = '';

        addNewMessage({
            header: e.extra.username,
            message: 'Text message from ' + e.extra.username + ':<br /><br />' + (UIPeerConnection.rtcMultiConnection.autoTranslateText ? linkify(e.data) + ' ( ' + linkify(e.original) + ' )' : linkify(e.data)),
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[e.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/chat-message.png'),
            color: e.extra.color
        });
        document.title = e.data;
    };

    UIPeerConnection.sessions = {};
    UIPeerConnection.rtcMultiConnection.onNewSession = function(session) {
        if (UIPeerConnection.sessions[session.sessionid]) return;
        UIPeerConnection.sessions[session.sessionid] = session;

        session.join();

        addNewMessage({
            header: session.extra.username,
            message: 'Making handshake with room owner....!',
            userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">',
            color: session.extra.color
        });
    };

    UIPeerConnection.rtcMultiConnection.onRequest = function(request) {
        UIPeerConnection.rtcMultiConnection.accept(request);
        addNewMessage({
            header: 'New Participant',
            message: 'A participant found. Accepting request of ' + request.extra.username + ' ( ' + request.userid + ' )...',
            userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">',
            color: request.extra.color
        });
    };

    UIPeerConnection.rtcMultiConnection.onCustomMessage = function(message) {
        if (message.hasCamera || message.hasScreen) {
            var msg = message.extra.username + ' enabled webcam. <button id="preview">Preview</button> ---- <button id="share-your-cam">Share Your Webcam</button>';

            if (message.hasScreen) {
                msg = message.extra.username + ' is ready to share screen. <button id="preview">View His Screen</button> ---- <button id="share-your-cam">Share Your Screen</button>';
            }

            addNewMessage({
                header: message.extra.username,
                message: msg,
                userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">',
                color: message.extra.color,
                callback: function(div) {
                    div.querySelector('#preview').onclick = function() {
                        UIPeerConnection.disabled = true;

                        message.session.oneway = true;
                        UIPeerConnection.rtcMultiConnection.sendMessage({
                            renegotiate: true,
                            streamid: message.streamid,
                            session: message.session
                        });
                    };

                    div.querySelector('#share-your-cam').onclick = function() {
                        UIPeerConnection.disabled = true;

                        if (!message.hasScreen) {
                            var session = {
                                audio: true,
                                video: true
                            };

                            UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
                                UIPeerConnection.rtcMultiConnection.peers[message.userid].peer.connection.addStream(stream);
                                div.querySelector('#preview').onclick();
                            }, session);
                        }

                        if (message.hasScreen) {
                            var session = {
                                screen: true
                            };

                            UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
                                UIPeerConnection.rtcMultiConnection.peers[message.userid].peer.connection.addStream(stream);
                                div.querySelector('#preview').onclick();
                            }, session);
                        }
                    };
                }
            });
        }

        if (message.hasMic) {
            addNewMessage({
                header: message.extra.username,
                message: message.extra.username + ' enabled microphone. <button id="listen">Listen</button> ---- <button id="share-your-mic">Share Your Mic</button>',
                userinfo: '<img src="//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/action-needed.png">',
                color: message.extra.color,
                callback: function(div) {
                    div.querySelector('#listen').onclick = function() {
                        UIPeerConnection.disabled = true;
                        message.session.oneway = true;
                        UIPeerConnection.rtcMultiConnection.sendMessage({
                            renegotiate: true,
                            streamid: message.streamid,
                            session: message.session
                        });
                    };

                    div.querySelector('#share-your-mic').onclick = function() {
                        UIPeerConnection.disabled = true;

                        var session = {
                            audio: true
                        };

                        UIPeerConnection.rtcMultiConnection.captureUserMedia(function(stream) {
                            UIPeerConnection.rtcMultiConnection.peers[message.userid].peer.connection.addStream(stream);
                            div.querySelector('#listen').onclick();
                        }, session);
                    };
                }
            });
        }

        if (message.renegotiate) {
            var customStream = UIPeerConnection.rtcMultiConnection.customStreams[message.streamid];
            if (customStream) {
                UIPeerConnection.rtcMultiConnection.peers[message.userid].renegotiate(customStream, message.session);
            }
        }
    };


    UIPeerConnection.rtcMultiConnection.blobURLs = {};
    UIPeerConnection.rtcMultiConnection.onstream = function(e) {
        if (e.stream.getVideoTracks().length) {
            UIPeerConnection.rtcMultiConnection.blobURLs[e.userid] = e.blobURL;
            /*
            if( document.getElementById(e.userid) ) {
            document.getElementById(e.userid).muted = true;
            }
            */
            addNewMessage({
                header: e.extra.username,
                message: e.extra.username + ' enabled swebcam.',
                userinfo: '<video id="' + e.userid + '" src="' + URL.createObjectURL(e.stream) + '" autoplay muted=true volume=0></vide>',
                color: e.extra.color
            });
        } else {
            addNewMessage({
                header: e.extra.username,
                message: e.extra.username + ' enabled microphone.',
                userinfo: '<audio src="' + URL.createObjectURL(e.stream) + '" controls muted=true volume=0></vide>',
                color: e.extra.color
            });
        }
        usersContainer.appendChild(e.mediaElement);
    };

    UIPeerConnection.rtcMultiConnection.sendMessage = function(message) {
        message.userid = UIPeerConnection.rtcMultiConnection.userid;
        message.extra = UIPeerConnection.rtcMultiConnection.extra;
        UIPeerConnection.rtcMultiConnection.sendCustomMessage(message);
    };

    UIPeerConnection.rtcMultiConnection.onclose = UIPeerConnection.rtcMultiConnection.onleave = function(event) {
        addNewMessage({
            header: event.extra.username,
            message: event.extra.username + ' left the room.',
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[event.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/info.png'),
            color: e.extra.color
        });
    };

    UIPeerConnection.rtcMultiConnection.onFileStart = function(file) {
        addNewMessage({
            header: UIPeerConnection.rtcMultiConnection.extra.username,
            message: 'onFileStart: ' + file.name + ' ( ' + bytesToSize(file.size) + ' )',
            userinfo: UIMain.getUserinfo(UIPeerConnection.rtcMultiConnection.blobURLs[UIPeerConnection.rtcMultiConnection.userid], '//www.webrtc-experiment.com/RTCMultiConnection/MultiRTC/images/share-files.png'),
            callback: function(div) {
                var innerDiv = document.createElement('div');
                innerDiv.title = file.name;
                innerDiv.innerHTML = '<label>0%</label><progress></progress>';
                div.querySelector('.message').appendChild(innerDiv);
                UIShareFiles.progressHelper[file.uuid] = {
                    div: innerDiv,
                    progress: innerDiv.querySelector('progress'),
                    label: innerDiv.querySelector('label')
                };
                UIShareFiles.progressHelper[file.uuid].progress.max = file.maxChunks;
            }
        });
    };
    UIPeerConnection.rtcMultiConnection.onFileProgress = function(chunk) {
        var helper = UIShareFiles.progressHelper[chunk.uuid];
        if (!helper) return;
        helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max;
        updateLabel(helper.progress, helper.label);
    };

    // www.RTCMultiConnection.org/docs/onFileEnd/
    UIPeerConnection.rtcMultiConnection.onFileEnd = function(file) {
        if (!UIShareFiles.progressHelper[file.uuid]) {
            console.error('No such progress-helper element exists.', file);
            return;
        }
        var div = UIShareFiles.progressHelper[file.uuid].div;
        if (file.type.indexOf('image') != -1) {
            div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download ' + file.name + ' </a><br /><img src="' + file.url + '" title="' + file.name + '">';
        } else {
            div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download ' + file.name + ' </a><br /><iframe src="' + file.url + '" title="' + file.name + '" style="width: 69%;border: 0;border-left: 1px solid black;height: inherit;"></iframe>';
        }

        setTimeout(function() {
            div = div.parentNode.parentNode.parentNode;
            div.querySelector('.user-info').style.height = div.querySelector('.user-activity').clientHeight + 'px';
        }, 10);
    };

    console.log("FROM PEER CONNECTION SERVICE", UIPeerConnection)
    return UIPeerConnection;

}]);