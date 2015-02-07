$(document).ready(function() {
    // GLOBAL FUNCTIONS

    // DETECT USERS BROWSER
    var userAgent;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        userAgent = "safari";
    } else if (navigator.userAgent.indexOf('Firefox') != -1 && navigator.userAgent.indexOf('Safari') == -1) {
        userAgent = "firefox";
    } else if (navigator.userAgent.indexOf('Chrome') != -1 && navigator.userAgent.indexOf('Firefox') == -1) {
        userAgent = "chrome";
    } else {
        userAgent = "unknown";
    }
    // console.log("Your Browser Is:", userAgent);
    var page = document.getElementsByClassName('content page')[0];
    page.setAttribute('browser', userAgent);
    var browser = page.attributes.browser;

    // NAVBAR FIXED AFTER SCROLL
    function fixNavbarToTop() {
        setInterval(function() {
            var scrollPos = window.scrollY;
            // console.log(scrollPos);
            var navbar = $(document.getElementById('navbar'));

            if (scrollPos >= navbar[0].offsetTop) {
                // console.log("Greater Than Nav Offset", navbar[0].offsetTop);
                $(navbar).addClass('navbar-fixed-top');
            } else if (scrollPos < navbar[0].offsetTop) {
                // console.log("Less Than Nav Offset", navbar[0].offsetTop);
                $(navbar).offsetTop = 400;
                $(navbar).removeClass('navbar-fixed-top');
            } else {
                // console.log("nothin to be done", navbar[0].offsetTop)
                console.log(navbar[0].offsetTop - navbar[0].offsetHeight);
            }

        }, 100);
    }

    // RUN NAVBAR FIX
    if (document.getElementById('home-page'))
        fixNavbarToTop();

    // PARALLAX EFFECT ON TEASER WINDOW
    var teaserWindow = $("#teaser-window").height();
    var windowHeight = $(window).height();

    if (windowHeight > teaserWindow) {
        $("#teaser-window").height(windowHeight);
    }

    $(window).scroll(function() {
        var x = $(this).scrollTop();
        // console.log("Chaning to this pos:",parseInt(x / 5) + 'px');
        $('#teaser-window').css('background-position', 'center -' + parseInt(x / 2) + 'px');
    });

    // LOGIN
    var loginBtn = $('#signin');
    var createAccount = $('.not-a-member');
    loginBtn.on('click', function() {
    	alert('Login Comming Soon!')
    });
    createAccount.on('click', function(e){
    	alert("Creat Account Comming Soon!")
    })

    // PROFILE PAGE MODAL
    $('.modal-btn').on('click', function(e) {
        // console.log("Clicked", e);
        e.preventDefault();

        var modalTitle = $('.modal-title');
        var modalBody = $('.modal-body');
        var modalFooter = $('.modal-footer');

        var img = new Image();
        var imageTitle = e.target.attributes.alt.value;

        $(img).addClass('img-responsive');
        img.onload = function() { /*console.log("I'm Loaded");*/ };
        img.src = e.target.src;

        modalTitle.html(imageTitle);
        modalBody.html(img);
        modalFooter.html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");

        // console.log(modalBody)
    });

    // SUPPORT PAGE CHATBOX
    if (document.getElementById('support-page')) {
        var sendBtn = $('#send-btn');
        var message = $('#message');

        var chatWindow = document.getElementById('chat');
        var usersOnline = document.getElementById('users');

        if (browser.value == "safari") {
            chatWindow.style.height = "573px";
            usersOnline.style.height = "573px";
            chatWindow.style.maxHeight = "573px";
            // console.log("Safari Detected! Changing window height to:" + chatWindow.style.height)
        } else if (browser.value == "chrome") {
            chatWindow.style.height = "540px";
            usersOnline.style.height = "540px";
            chatWindow.style.maxHeight = "540px";
            // console.log("Chrome Detected! Changing window height to:" + chatWindow.style.height)
        } else if (browser.value == "firefox") {
            chatWindow.style.height = "530px";
            usersOnline.style.height = "530px";
            chatWindow.style.maxHeight = "530px";
            // console.log("Firefox Detected! Changing window height to:" + chatWindow.style.height)
        } else {
            chatWindow.style.height = "570px";
            usersOnline.style.height = "570px";
            chatWindow.style.maxHeight = "570px";
            // console.log("No Browser Detected! Changing window height to:" + chatWindow.style.height)
        }

        message.keyup(function(e) {
            if (e.keyCode == 13) {
                console.log("Enter Key Detected");
                sendBtn.click();
                // document.getElementById('message').scrollTop = document.getElementById('message').scrollHeight;
            }
        });

        sendBtn.on('click', function() {
            var message = $('#message').val();

            if (message === null || message === undefined || message === "") {
                console.warn("Please Enter a Message");
            } else {
	            $('#chat').append("Guest: " + message + "\n" + "<br />");
	            $('#message').val('');
	            $(chatWindow)[0].scrollTop = $(chatWindow)[0].scrollHeight;
	            $('#message').focus();
            }
        });
        // console.log("Chat Window Height", document.getElementById('chat').style)
    }
});