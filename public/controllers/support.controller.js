console.log("Support Loaded")
app.controller('SupportCtrl', ['$scope', 'Socket', function($scope, IO) {
    var plusPlus = 0

    $scope.getLocation = function() {
        var location = window.location.pathname;
        console.log("Sent Location of: ", location)
        return location;
    };

    $scope.alias = 'SupportCtrl';
    $scope.title = 'Support Controller';
    $scope.message = "Can You Believe I'm Using Angular!";
    $scope.test = "This is the support controller";

    // IMPLEMENT SUPPORT SECTION USER AUTHENTICATION
    // AT LATER TIME
    var userName = "Rahim's Macbook";
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

        var modalBtn = $("<a class='modal-btn' data-toggle='modal' data-target='#user-modal'></a>");

        IO.on('news', function(message) {
            console.warn("Got Message", message);
        });

        // IO.on('response', function(message) {
        //     $('#chat').append($('<div></div>').text(JSON.stringify(message)));
        //     console.log("Got Response", message);
        // });

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

                // SEND TO IO
                IO.emit("client", $('#message').val());
                $('#chat').append(bit);
                $('#message').val('');
                $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
                $('#message').focus();

            }
        });

        console.log(IO);
    }
    plusPlus++;
    console.log("Support Ctrl was loaded ->" + plusPlus + " times!");
}]);
console.log("Support End")