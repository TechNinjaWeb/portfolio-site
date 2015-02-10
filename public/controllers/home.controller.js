app.controller('HomeCtrl', function($scope) {
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

    $('#reports-point-heading').on('click', function(e){
        console.log("Clicked");
    })






    $scope.articles = [{
        title: 'article1',
        body: 'body of article1'
    }, {
        title: 'article2',
        body: 'body of article2'
    }, {
        title: 'article3',
        body: 'body of article3'
    }];

    $scope.atNewArticle = function(article) {
        //i only execute when transitioning back and forth between articles
        console.log(article);
    };


    // HOMEPAGE CONTENT

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
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    }

    $scope.barOptions = barOptions;


    $('#reports-chart').highcharts(barOptions);


});