$(document).ready(function() {
    // GLOBAL FUNCTIONS

    // NAVBAR FIXED AFTER SCROLL
    function fixNavbarToTop() {
        setInterval(function() {
            var scrollPos = window.scrollY;
            // console.log(scrollPos);
            var navbar = $(document.getElementById('navbar'));

            if (scrollPos >= navbar[0].offsetTop) {
                // console.log("Greater Than");
                $(navbar).addClass('navbar-fixed-top')
            } else if (scrollPos <= 400) {
                // console.log("Less Than");
                $(navbar).offsetTop = 400;
                $(navbar).removeClass('navbar-fixed-top')
                    // console.log($(navbar));
            } else {
                console.log("nothin to be done")
                console.log(navbar[0].offsetTop - navbar[0].offsetHeight);
            }

        }, 100)
    };

    // RUN NAVBAR FIX
	if (document.getElementById('home-page'))
		fixNavbarToTop();

    // PARALLAX EFFECT ON TEASER WINDOW
    var teaserWindow = $("#teaser-window").height();
    var windowHeight = $(window).height();

    if (windowHeight > teaserWindow) {
        $("#teaser-window").height(windowHeight);
    }

    if (window.scrollY > 500 /*navbar[0].offsetTop*/ ) {
        console.log("Window Height", windowHeight);
        console.log(navbar);
    }

    $(window).scroll(function() {
        var x = $(this).scrollTop();
        // console.log("Chaning to this pos:",parseInt(x / 5) + 'px');
        $('#teaser-window').css('background-position', 'center -' + parseInt(x / 2) + 'px');
    });

    $('.modal-btn').on('click', function(e){
    	// console.log("Clicked", e);
    	e.preventDefault();

    	var modal = $('.modal-dialog');
    	var modalTitle = $('.modal-title');
    	var modalBody = $('.modal-body');
    	var modalFooter = $('.modal-footer');

    	var img = new Image();
    	var imageTitle = e.target.attributes.alt.value;

    	$(img).addClass('img-responsive');
    	img.onload = function(e){/*console.log("I'm Loaded");*/}
    	img.src = e.target.src;
    	
    	modalTitle.html(imageTitle);
    	modalBody.html(img);
    	modalFooter.html("<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
    	

    	// console.log(modalBody)
    });
});