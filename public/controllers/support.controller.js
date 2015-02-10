app.controller('SupportCtrl', function($scope, $rootScope) {

    $scope.alias = 'SupportCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    // IMPLEMENT SUPPORT SECTION USER AUTHENTICATION
    // AT LATER TIME
    var userName = "Jeff Coleman";
    var user, icons;
    icons = "<i class='icon-ios'></i>",
        user = "<div id='support-admin'>Rahim: Admin" + icons + "</div>";

    // SUPPORT PAGE CHATBOX
    if (window.document.getElementById('support-page')) {
        var sendBtn = $('#send-btn');
        var message = $('#message');

        var chatWindow = window.document.getElementById('chat');
        var usersOnlineContainer = window.document.getElementById('users');
        var usersOnline = "<div class='user'>" + user + "</div>"

        var modalBtn = $("<a class='modal-btn' href='#' data-toggle='modal' data-target='#user-modal'></a>");

        modalBtn.on('click', function(e) {
            var userName = e.target.innerText;

            var modalTitle = $('.modal-title');
            var modalBody = $('.modal-body');
            var modalFooter = $('.modal-footer');

            modalTitle.html(userName);
            modalBody.html("<div>USER FEATURES COMMING SOON!</div>")

            // console.warn("Title", modalTitle, "\nBody", modalBody, "\nFooter", modalFooter);
        })

        $(modalBtn).append(usersOnline);
        $(usersOnlineContainer).append(modalBtn)

        if ($rootScope.browser == "safari") {
            chatWindow.style.height = "573px";
            usersOnlineContainer.style.height = "573px";
            chatWindow.style.maxHeight = "573px";
            // console.log("Safari Detected! Changing window height to:" + chatWindow.style.height)
        } else if ($rootScope.browser == "chrome") {
            chatWindow.style.height = "540px";
            usersOnlineContainer.style.height = "540px";
            chatWindow.style.maxHeight = "540px";
            // console.log("Chrome Detected! Changing window height to:" + chatWindow.style.height)
        } else if ($rootScope.browser == "firefox") {
            chatWindow.style.height = "530px";
            usersOnlineContainer.style.height = "530px";
            chatWindow.style.maxHeight = "530px";
            // console.log("Firefox Detected! Changing window height to:" + chatWindow.style.height)
        } else {
            chatWindow.style.height = "570px";
            usersOnlineContainer.style.height = "570px";
            chatWindow.style.maxHeight = "570px";
            // console.log("No Browser Detected! Changing window height to:" + chatWindow.style.height)
        }

        message.keyup(function(e) {
            if (e.keyCode == 13) {
                console.log("Enter Key Detected");
                sendBtn.click();
                // window.document.getElementById('message').scrollTop = window.document.getElementById('message').scrollHeight;
            }
        });

        sendBtn.on('click', function() {
            var message = $('#message').val();
            var bit, supportUserName;

            if (message === null || message === undefined || message === "") {
                console.warn("Please Enter a Message");
                return;
            } else {
                supportUserName = userName; // FAKE USER NAME
                supportUserName = supportUserName.toLowerCase().capitalize();
                bit = "<div class='" + supportUserName + "bit'>" + supportUserName + ": " + message + "</div>";

                $('#chat').append(bit);
                $('#message').val('');
                $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
                $('#message').focus();
            }
        });
        // console.log("Chat Window Height", window.document.getElementById('chat').style)
    }
});