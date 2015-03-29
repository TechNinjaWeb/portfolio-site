angular.module('tnApp.webrtc').service("UIShareFiles", ['$state', '$rootScope', '$window', '$q', function($state, $rootScope, $window, $q) {

    var UIShareFiles = {};

    // var rtcMultiConnection = new UIPeerConnection();
    // https://www.webrtc-experiment.com:12034/

    // file sharing
    UIShareFiles.progressHelper = {};

    UIShareFiles.updateLabel = function (progress, label) {
        if (progress.position == -1) return;
        var position = +progress.position.toFixed(2).split('.')[1] || 100;
        label.innerHTML = position + '%';
    }

    return UIShareFiles;

}]);