angular.module('tnApp.controllers').controller('AboutCtrl', function($scope, $location, $anchorScroll, $timeout, portfolioList) {
    $scope.alias = 'AboutCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.portfolioList = portfolioList;

    // $scope.scrollTo = function(id) {
    //     $location.path('/services');
    //     $location.hash(id);
    //     $timeout(function() {
    //         $anchorScroll();
    //     }, 500)
    // };

    // Ninja Law Tooltip
    $('a[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
    });

    $scope.modalPopup = function(item) {
        var modalTitle = $('.modal-title');
        var modalBody = $('.modal-body');
        var modalFooter = $('.modal-footer');

        console.log("ITEM", item);
        
        modalTitle.html(item.title);
        modalBody.html("<img src='"+ item.imgSrc +"' alt='"+ item.alt +"' class='img-responsive'>'"+item.body+"'</img>")
        modalFooter.html("<a class='text-center' href='"+item.url+"'><div><span id='visit-site'>Visit Website - </span>"+item.title+"</div></a>")
    }

    // PROFILE PAGE MODAL
    $('.modal-btn').on('click', function(e) {
        console.log("Clicked", e);
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