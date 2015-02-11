app.controller('CopyrightCtrl', function($scope, Socket) {

    $scope.alias = 'CopyrightCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";


    Socket.on('connect', function(data) {console.log(data);Socket.emit('messages are good')});
    Socket.on('event', function(data) {});

    Socket.send("Hey Yo");

    $scope.getLocation = function() {
        var location = window.location.pathname;
        return location;
    };

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

        message.keyup(function(e) {
            if (e.keyCode == 13) {
                console.log("Enter Key Detected");
                sendBtn.click();
                // window.document.getElementById('message').scrollTop = window.document.getElementById('message').scrollHeight;
            }
        });

        Socket.on('connect', function() {
            Socket.send("Hello!");
            $('#chat').append($('<div>Connected</div>'));
        });

        sendBtn.on('click', function() {
            var message = $('#message').val();
            var bit, supportUserName;
            console.log("Message", message)
            if (message === null || message === 'undefined' || message === "") {
                console.log("Please enter a valid message");
            } else {
                supportUserName = userName; // FAKE USER NAME
                supportUserName = supportUserName.toLowerCase().capitalize();
                bit = "<div class='" + supportUserName + "bit'>" + supportUserName + ": " + message + "</div>";

                // SEND TO SOCKET
                // Socket.send($('#message').val());
                $('#chat').append(bit);
                $('#message').val('');
                $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
                $('#message').focus();
            }
        });

        Socket.on('message', function(message) {
            $('#chat').append($('<div></div>').text(JSON.stringify(message)));
        });

        Socket.on('disconnect', function() {
            $('#chat').append($('<div></div>').text(JSON.stringify(message)));
        });
        // console.log("Chat Window Height", window.document.getElementById('chat').style)//
    }
});