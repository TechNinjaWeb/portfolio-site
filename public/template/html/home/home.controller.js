angular.module('tnApp.controllers').controller('HomeCtrl', function($scope) {
    $scope.alias = 'HomeCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    /*
        Basic workflow example
    */

    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })

    wow.init();

    // HOMEPAGE CONTENT

    // TRUNCATE TESTIMONY QUOTES
    var testimonial = $('.testimony-slide'),
        elipsis = 150;
    testimonial.each(function(pos, item) {
        item.innerHTML = item.innerHTML.substr(0, elipsis) + "...";
    })

    // PORTFOLIO SECTION
    // var portfolioLeft = $(document.getElementById('portfolio-left'));
    // var portfolioRight = $(document.getElementById('portfolio-right'));
    // // EVEN HEIGHT FOR BOTH SECTIONS
    // portfolioLeft.css('height', portfolioRight.css('height'));

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
            text: "Reports For Days!"
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
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    }

    $scope.barOptions = barOptions;


    // LAZY LOAD BARCHART
    var $window = $(window),
        didScroll = false,
        fired = 0,
        skillsTop = $('#toolbelt').offset().top - 50; //the point at which we will create the chart

    $window.on('scroll', function() {
        //detected a scroll event, you want to minimize the code here because this event can be thrown A LOT!
        didScroll = true;
    });

    //check every 250ms if user has scrolled to the skills section
    var watch = setInterval(function() {
        if (fired <= 0 && didScroll && $('#reports-point-right').is(":visible") == true) {
            didScroll = false;
            if ($window.scrollTop() >= skillsTop) {
                createChart();
                fired++;
                clearInterval(watch);
            }
        }
    }, 250);

    function createChart() {
        // $window.off('scroll'); //remove listener that will create chart, this ensures the chart will be created only once
        console.log("Fired!")
            // alert("Fired");
        setTimeout(function() {
            $('#reports-chart').highcharts(barOptions);
        }, 500)

    };


});