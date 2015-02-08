var userName = "Jeff Coleman";
var user, icons;
icons = "<i class='icon-ios'></i>",
    user = "<div id='support-admin'>Rahim: Admin" + icons + "</div>";

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
    createAccount.on('click', function(e) {
        alert("Creat Account Comming Soon!")
    })

    if (document.getElementById('portfolio-page')) {
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
    }

    // HOMEPAGE CONTENT
    if (document.getElementById('home-page')) {
        var testimonial = $('.testimony-slide');
        var elipsis = 35;
        testimonial.each(function(pos, item){
        	item.innerHTML = item.innerHTML.substr(0, elipsis) + "...";
        })

        // PORTFOLIO SLIDER
        $('#portfolio-slideshow').flexslider({
            animation: "slide",
            itemWidth: 200,
            itemMargin: 1,
            minItems: 3,
            maxItems: 9,
            move: 0,
        });
        $('#testimony-slideshow').flexslider({
            animation: "slide",
            itemWidth: 200,
            itemMargin: 1,
            minItems: 3,
            maxItems: 9,
            move: 2,
        });
    }

    // SUPPORT PAGE CHATBOX
    if (document.getElementById('support-page')) {
        var sendBtn = $('#send-btn');
        var message = $('#message');

        var chatWindow = document.getElementById('chat');
        var usersOnlineContainer = document.getElementById('users');
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

        if (browser.value == "safari") {
            chatWindow.style.height = "573px";
            usersOnlineContainer.style.height = "573px";
            chatWindow.style.maxHeight = "573px";
            // console.log("Safari Detected! Changing window height to:" + chatWindow.style.height)
        } else if (browser.value == "chrome") {
            chatWindow.style.height = "540px";
            usersOnlineContainer.style.height = "540px";
            chatWindow.style.maxHeight = "540px";
            // console.log("Chrome Detected! Changing window height to:" + chatWindow.style.height)
        } else if (browser.value == "firefox") {
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
                // document.getElementById('message').scrollTop = document.getElementById('message').scrollHeight;
            }
        });

        sendBtn.on('click', function() {
            var message = $('#message').val();
            var bit, supportUserName;

            if (message === null || message === undefined || message === "") {
                console.warn("Please Enter a Message");
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
        // console.log("Chat Window Height", document.getElementById('chat').style)
    }

    if (document.getElementById('contact-page')) {

    }
});