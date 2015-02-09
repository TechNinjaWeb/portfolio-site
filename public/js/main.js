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
    /////////////////////////////////
    //	  REPLACED NAVBAR AT TOP   //
    /////////////////////////////////
    // fixNavbarToTop();

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

    // HOMEPAGE CONTENT
    if (document.getElementById('home-page')) {
        var testimonial = $('.testimony-slide');
        var elipsis = 150;
        testimonial.each(function(pos, item) {
            item.innerHTML = item.innerHTML.substr(0, elipsis) + "...";
        })

        // PORTFOLIO SECTION
        var portfolioLeft = $(document.getElementById('portfolio-left'));
        var portfolioRight = $(document.getElementById('portfolio-right'));
        // EVEN HEIGHT FOR BOTH SECTIONS
        portfolioRight.css('height', portfolioLeft.css('height'));

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
            itemWidth: 600
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
                    text: "Hover Over The Bar Graph"
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
        
        $('#reports-chart').highcharts(barOptions);
        var gaugeOptions = {
            chart: {
                type: 'solidgauge'
            },
            title: null,
            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            tooltip: {
                enabled: false
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };
        
     //    // The speed gauge
     //    $('#growth-gauge').highcharts(Highcharts.merge(gaugeOptions, {
     //        yAxis: {
     //            min: 0,
     //            max: 200,
     //            title: {
     //                text: 'Speed'
     //            }
     //        },

     //        credits: {
     //            enabled: false
     //        },

     //        series: [{
     //            name: 'Speed',
     //            data: [80],
     //            dataLabels: {
     //                format: '<div style="text-align:center"><span style="font-size:25px;color:' + ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
     //                    '<span style="font-size:12px;color:silver">km/h</span></div>'
     //            },
     //            tooltip: {
     //                valueSuffix: ' km/h'
     //            }
     //        }],
     //        exporting: { enabled: false },
     //        credits: {
		   //  	enabled: false
		  	// }

     //    }));


     //    // Bring life to the dials
     //    setInterval(function() {
     //        // Speed
     //        var chart = $('#growth-gauge').highcharts(),
     //            point,
     //            newVal,
     //            inc;

     //        if (chart) {
     //            point = chart.series[0].points[0];
     //            inc = Math.round((Math.random() - 0.5) * 100);
     //            newVal = point.y + inc;

     //            if (newVal < 0 || newVal > 200) {
     //                newVal = point.y - inc;
     //            }

     //            point.update(newVal);
     //        }
     //    }, 2000);
    }

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