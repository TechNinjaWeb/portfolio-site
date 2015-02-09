// IMPLEMENT SUPPORT SECTION USER AUTHENTICATION
// AT LATER TIME
var userName = "Jeff Coleman";
var user, icons;
	icons = "<i class='icon-ios'></i>",
    user = "<div id='support-admin'>Rahim: Admin" + icons + "</div>";

$(document).ready(function() {
	// INITIALIZE PARSE
	Parse.initialize("XFukCIc6giByefQZjvKjvRQdyaID0OqseAdLYGE4", "TfVbMHnjFPVGfUIFCVCeVr3SWgrgEr5uoxrBSSvz");
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

    var page = document.getElementsByClassName('content page')[0];
    page.setAttribute('browser', userAgent);
    var browser = page.attributes.browser;

    // LOGIN
    var loginBtn = $('#signin');
    var createAccount = $('.not-a-member');

    loginBtn.on('click', function() {
        alert('Login Comming Soon!')
    });
    createAccount.on('click', function(e) {
        alert("Creat Account Comming Soon!")
    })

    // HOMEPAGE CONTENT
    if (document.getElementById('home-page')) {
        // TRUNCATE TESTIMONY QUOTES
        var testimonial = $('.testimony-slide');
        var elipsis = 150;
        testimonial.each(function(pos, item) {
            item.innerHTML = item.innerHTML.substr(0, elipsis) + "...";
        })

        // PORTFOLIO SECTION
        var portfolioLeft = $(document.getElementById('portfolio-left'));
        var portfolioRight = $(document.getElementById('portfolio-right'));
        // EVEN HEIGHT FOR BOTH SECTIONS
        portfolioLeft.css('height', portfolioRight.css('height'));

        $('#portfolio-slideshow').flexslider({
            animation: "fade",
            animationSpeed: 1000,
            slideshowSpeed: 4000,
            touch: true,
            itemWidth: 200,
            itemMargin: 1,
            minItems: 3,
            maxItems: 9,
            move: 0,
            useCSS: true
        });
        $('#testimony-slideshow').flexslider({
            animation: "slide",
            animationSpeed: 1000,
            slideshowSpeed: 5000,
            touch: true,
            itemWidth: 600,
            useCSS: true,
            controlNav: true,
            maxItems: 1
        });

        // REPORT SECTION CHARTS
        var barOptions = {
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    viewDistance: 25,
                    depth: 40
                },
                marginTop: 80,
                marginRight: 40
            },

            title: {
                text: "Reports For Days Son!"
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: "Hover Over The Graph!"
                }
            },

            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    depth: 40
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }],
            exporting: { enabled: false },
            credits: {
		      enabled: false
		  }
        }

        // LAZY LOAD BARCHART
        var $window = $(window),
        didScroll = false,
        skillsTop = $('#toolbelt').offset().top - 40; //the point at which we will create the chart

	    $window.on('scroll', function () {
	        //detected a scroll event, you want to minimize the code here because this event can be thrown A LOT!
	        didScroll = true;
	    });

	    //check every 250ms if user has scrolled to the skills section
	    setInterval(function () {
	        if (didScroll) {
	            didScroll = false;
	            if ($window.scrollTop() >= skillsTop) {
	                createChart();
	            }
	        }
	    }, 250);

	    function createChart() {
	        $window.off('scroll'); //remove listener that will create chart, this ensures the chart will be created only once

	        $('#reports-chart').highcharts(barOptions);
	    };
    }

    // FOOTER CONTACT FORM
    var footerContactFormBtn = $('#footer-contact-us-submit');
    footerContactFormBtn.on('click', function(e){

    	var footerContactForm = $('#footer-contact-us-form');
	    var footerContactName = $('#footer-contact-us-name');
	    var footerContactEmail = $('#footer-contact-us-email');
	    var footerContactMessage = $('#footer-contact-us-message');

    	var DB = Parse.Object.extend('SiteContactForm');
    	var saveForm = new DB();
    	
    	// SUBMIT FORM UPON VALIDATION
    	if ( !footerContactName.val() || !footerContactEmail.val() || !footerContactMessage.val() ) {
    		console.warn("You've Missed Some info");
    		// e.preventDefault();
    		return;
    	} else {
    		e.preventDefault();
	    	saveForm.save({
	    		leadName: footerContactName.val(),
	    		leadEmail: footerContactEmail.val(),
	    		message: footerContactMessage.val()
	    	}).then(function(res){
	    		console.log("Success!", res);
	    	})
	    }
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
        // console.log("Chat Window Height", document.getElementById('chat').style)
    }

    if (document.getElementById('contact-page')) {
    	var submitBtn = $('#submit');
    	submitBtn.on('click', function(e){
    		console.log("Clicked");

    		var formData = {
    			companyName: $('#company-name').val(),
    			currentWebsite: $('#curren-website').val(),
    			designation: $('#designation').val(),
    			firstName: $('#first-name').val(),
    			lastName: $('#last-name').val(),
    			phoneNumber: $('#phone').val(),
    			mobileNumber: $('#mobile').val(),
    			email: $('#email').val(),
    			city: $('#city').val(),
    			country: $('#country').val(),
    			purpose: $('#purpose').val(),
    			businessDescription: $('#business-description').val(),
    			competitors: $('#competitors').val(),
    			usp: $('#usp').val(),
    			demographics: $('#target-demographics').val(),
    			sitesEnjoyed: $('#sites-enjoyed').val(),
    			sitesNotEnjoyed: $('#sites-not-enjoyed').val(),
    			functionality: $('#functionality').val(),
    			webManagement: $('#web-management').val(),
    			keywordResearch: $('#keyword-research').val(),
    			contentResearch: $('#content-research').val(),
    			timeInvestment: $('#time-investment').val(),
    			feedback: $('#feedback') .val()
    		}

	    	var DB = Parse.Object.extend('SiteContactForm');
	    	var saveForm = new DB();
	    	
	    	// SUBMIT FORM UPON VALIDATION
	    	if ( !formData.firstName || !formData.lastName || !formData.phoneNumber
	    		|| !formData.email || !formData.city
	    		|| !formData.purpose ) {
	    		console.warn("You've Missed Some info");
	    		return;
	    	} else {
	    		e.preventDefault();
		    	saveForm.save(formData).then(function(res){
		    		console.log("Success!", res);
		    	})
		    }
    	})
    }
});