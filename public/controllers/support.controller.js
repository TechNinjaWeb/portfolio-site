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

        var modalBtn = $("<a class='modal-btn' data-toggle='modal' data-target='#user-modal'></a>");

        // Now Being Handled By The Controller
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

        // $(modalBtn).append(usersOnline);
        // $(usersOnlineContainer).append(modalBtn)

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
                IO.emit("chatMessage", {
                    'message': $('#message').val(),
                    'sender': userName
                });
                $('#chat').append(bit);
                $('#message').val('');
                $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
                $('#message').focus();

            }
        });
        
        IO.on('response', function(message) {
            $('#chat').append($('<div id="'+message.userName+'">'+message.userName+": " +JSON.stringify(message.message)+' </div>'));
            console.log("Got Response", message);
        });

        // Socket Events
        IO.on('connect', function(message) {
            setTimeout(function() {
                console.log("Emit Add User", userName);
                IO.emit('getAll', function(data){console.log("No Data:",data)});
                console.log("getAll");
            }, 1500)

            IO.emit('adduser', userName);
        })

        IO.on('listAll', function(all) {
            console.log(all, "All Data from server");
            for (user in all.usersOnline) {
                var usersOnline = "<div class='user'>" + user + "</div>"
                
                console.log("Outputting user: ", user)
                $(usersOnlineContainer).html();

                $(modalBtn).append(usersOnline);
                $(usersOnlineContainer).append(modalBtn);
            };
        });

        IO.on('listRooms', function(rooms) {
            console.log(rooms, "Rooms List from server");
        });

        IO.on('listUsers', function(users) {
            console.log(users, "Users List from server");
        });

        IO.on('news', function(message) {
            console.warn("Got Message", message);
        });

        console.log(IO);
    }
    plusPlus++;
    console.log("Support Ctrl was loaded ->" + plusPlus + " times!");
}]);
console.log("Support End")