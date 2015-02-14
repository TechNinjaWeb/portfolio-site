// -- See AppCtrl Comment for usage description -- //
app.controller('PortfolioCtrl', function($scope) {
    $scope.alias = 'PortfolioCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.categories = ['Soft', 'Elements'];


    var portfolioList = [{
        'title': 'Bird Document',
        'data-cat': 'web',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'app',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'card',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'icon',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'icon #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'web #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'web #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'app',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'app',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'logo',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'app',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }, {
        'title': 'Bird Document',
        'data-cat': 'card',
        'imgSrc': '../vendor/portfolio/img/portfolios/logo/5.jpg',
        'alt': 'logo #5'
    }];

    $scope.portfolioList = portfolioList;




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
    var filterList = {

        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            // $('#portfoliolist').mixItUp({
            //     targetSelector: '.portfolio',
            //     filterSelector: '.filter',
            //     effects: ['fade'],
            //     easing: 'snap',
            //     // call the hover effect
            //     onMixEnd: filterList.hoverEffect(),
            //     animation: true,
            //     effects: 'fade scale',
            //     duration: 600,
            //     easing: 'ease',
            //     perspectiveDistance: '3000px',
            //     perspectiveOrigin: '50% 50%',
            //     queue: true,
            //     queueLimit: 1,
            //     animateChangeLayout: false,
            //     animateResizeContainer: true,
            //     animateResizeTargets: false,
            //     staggerSequence: null,
            //     reverseOut: false,
            //     callbacks: function(){console.log("no callback to note")},
            //     onMixLoad: null,
            //     onMixStart: null,
            //     onMixEnd: null,
            //     onMixFail: null,
            //     onMixBusy: null,
            //     controls: true,
            //     live: false,
            //     toggleFilterButtons: false,
            //     toggleLogic: 'or',
            //     activeClass: 'active',
            //     layout: 'inline-block',
            //     containerClass: '',
            //     containerClassFail: 'fail',
            //     load: 'all',
            //     sort: 'default:asc',
            //     selectors: '.mix',
            //     filter: '.filter',
            //     sort: '.sort'
            // });


        },

        hoverEffect: function() {

            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(this).find('img').stop().animate({
                        top: -30
                    }, 500, 'easeOutQuad');
                },
                function() {
                    $(this).find('.label').stop().animate({
                        bottom: -40
                    }, 200, 'easeInQuad');
                    $(this).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );

        }

    };

    // Run the show!
    filterList.init();

});