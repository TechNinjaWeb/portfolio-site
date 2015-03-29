angular.module('tnApp.webrtc').service("UIUsersList", ['UIMain', '$state', '$rootScope', '$window', '$q', function(UIMain, $state, $rootScope, $window, $q) {

    var UIUsersList = {};

    // https://www.webrtc-experiment.com:12034/

    UIUsersList.usersList = UIMain.getElement('.users-list');
    UIUsersList.numbersOfUsers = UIMain.getElement('.numbers-of-users');

    UIUsersList.numbersOfUsers.innerHTML = 1;

    UIUsersList.usersContainer = UIMain.getElement('.users-container');

    UIUsersList.usersList.onclick = function() {
        if (UIUsersList.usersList.className.indexOf('selected') != -1) {
            UIUsersList.usersList.className = UIUsersList.usersList.className.replace(/ selected/g, '');
            UIUsersList.usersContainer.style.display = 'none';
        } else {
            UIUsersList.usersList.className += ' selected';
            UIUsersList.usersContainer.style.display = 'block';
        }
    };

    return UIUsersList;

}]);