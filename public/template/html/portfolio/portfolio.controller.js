// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers').controller('PortfolioCtrl', function($scope) {
    $scope.alias = 'PortfolioCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.categories = ['Soft', 'Elements'];

    // $scope.filterBtns = 


    var portfolioList = [{
        'title': 'Annies Repurpose Inc.',
        'data-cat': 'web',
        'imgSrc': 'assets/banners/portfolio/annies-repurpose.png',
        'alt': 'Annies Repurpose Inc.'
    }, {
        'title': 'BlueBook Business',
        'data-cat': 'web logo',
        'imgSrc': 'assets/banners/portfolio/bluebook.png',
        'alt': 'BlueBook Business'
    }, {
        'title': 'EvolutionX Diesel Performance',
        'data-cat': 'web',
        'imgSrc': 'assets/banners/portfolio/evox.png',
        'alt': 'EvolutionX Diesel Performance'
    }, {
        'title': 'Trenderz Hub Inc.',
        'data-cat': 'web logo',
        'imgSrc': 'assets/banners/portfolio/trenderzhub.png',
        'alt': 'logo #5'
    }, {
        'title': 'Nitrotech Energy Services',
        'data-cat': 'web',
        'imgSrc': 'assets/banners/portfolio/nitrotech.png',
        'alt': 'Nitrotech Energy Services'
    }, {
        'title': 'RoomXI.com',
        'data-cat': 'web',
        'imgSrc': 'assets/banners/portfolio/roomxi.png',
        'alt': 'RoomXI.com'
    }, {
        'title': 'Smoke Em Diesel',
        'data-cat': 'code app',
        'imgSrc': 'assets/banners/portfolio/smoke-em.png',
        'alt': 'Smoke Em Diesel'
    }, {
        'title': 'DFC Diesel',
        'data-cat': 'code',
        'imgSrc': 'assets/banners/portfolio/dfc-diesel.png',
        'alt': 'logo #5'
    }, {
        'title': 'Uncle Bear Spices',
        'data-cat': 'code',
        'imgSrc': 'assets/banners/portfolio/uncle-bear-spices.png',
        'alt': 'Uncle Bear Spices'
    }, {
        'title': 'Spacantik',
        'data-cat': 'web code',
        'imgSrc': 'assets/banners/portfolio/spacantik.png',
        'alt': 'Spacantik'
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

});