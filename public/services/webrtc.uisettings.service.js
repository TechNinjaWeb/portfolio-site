angular.module('tnApp.webrtc').service("UISettings", ['UIPeerConnection', 'UIMain', '$state', '$rootScope', '$window', '$q', function(UIPeerConnection, UIMain, $state, $rootScope, $window, $q) {

    var UISettings = {};
    /// https://www.webrtc-experiment.com:12034/

    UISettings.settingsPanel = UIMain.getElement('.settings-panel');
    UIMain.getElement('#settings').onclick = function() {
        UISettings.settingsPanel.style.display = 'block';
    };

    UIMain.getElement('#save-settings').onclick = function() {
        UISettings.settingsPanel.style.display = 'none';

        if (!!UIMain.getElement('#autoTranslateText').checked) {
            UIPeerConnection.rtcMultiConnection.autoTranslateText = true;
            UIPeerConnection.rtcMultiConnection.language = UIMain.getElement('#language').value;
        } else UIPeerConnection.rtcMultiConnection.autoTranslateText = false;

        UIPeerConnection.rtcMultiConnection.bandwidth.audio = UIMain.getElement('#audio-bandwidth').value;
        UIPeerConnection.rtcMultiConnection.bandwidth.video = UIMain.getElement('#video-bandwidth').value;

        UIPeerConnection.rtcMultiConnection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: !!UIMain.getElement('#OfferToReceiveAudio').checked,
            OfferToReceiveVideo: !!UIMain.getElement('#OfferToReceiveVideo').checked,
            IceRestart: !!UIMain.getElement('#IceRestart').checked
        };

        UISettings.videWidth = UIMain.getElement('#video-width').value;
        UISettings.videHeight = UIMain.getElement('#video-height').value;
        UIPeerConnection.rtcMultiConnection.mediaConstraints.mandatory = {
            minWidth: UISettings.videWidth,
            maxWidth: UISettings.videWidth,
            minHeight: UISettings.videHeight,
            maxHeight: UISettings.videHeight
        };

        UIPeerConnection.rtcMultiConnection.preferSCTP = !!UIMain.getElement('#prefer-sctp').checked;
        UIPeerConnection.rtcMultiConnection.chunkSize = +UIMain.getElement('#chunk-size').value;
        UIPeerConnection.rtcMultiConnection.chunkInterval = +UIMain.getElement('#chunk-interval').value;

        window.skipRTCMultiConnectionLogs = !!UIMain.getElement('#skip-RTCMultiConnection-Logs').checked;

        //UIPeerConnection.rtcMultiConnection.selectDevices(UIMain.getElement('#audio-devices').value, UIMain.getElement('#video-devices').value);
        UIPeerConnection.rtcMultiConnection.maxParticipantsAllowed = UIMain.getElement('#max-participants-allowed').value;
        UIPeerConnection.rtcMultiConnection.candidates = {
            relay: UIMain.getElement('#prefer-stun').checked,
            reflexive: UIMain.getElement('#prefer-turn').checked,
            host: UIMain.getElement('#prefer-host').checked
        };

        UIPeerConnection.rtcMultiConnection.dataChannelDict = eval('(' + UIMain.getElement('#dataChannelDict').value + ')');

        if (!!UIMain.getElement('#fake-pee-connection').checked) {
            // http://www.rtcmulticonnection.org/docs/fakeDataChannels/
            UIPeerConnection.rtcMultiConnection.fakeDataChannels = true;
            UIPeerConnection.rtcMultiConnection.session = {};
        };
    };

    UISettings.audioDeviecs = UIMain.getElement('#audio-devices');
    UISettings.videoDeviecs = UIMain.getElement('#video-devices');

    UIPeerConnection.rtcMultiConnection.getDevices(function(devices) {
        for (var device in devices) {
            device = devices[device];
            UISettings.appendDevice(device);
        }
    });

    UISettings.appendDevice = function (device) {
        var option = document.createElement('option');
        option.value = device.id;
        option.innerHTML = device.label || device.id;
        if (device.kind == 'audio') {
            UISettings.audioDeviecs.appendChild(option);
        } else UISettings.videoDeviecs.appendChild(option);
    }


    return UISettings;

}]);