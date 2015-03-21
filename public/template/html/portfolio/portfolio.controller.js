// -- See AppCtrl Comment for usage description -- //
angular.module('tnApp.controllers').controller('PortfolioCtrl', ['$scope', 'portfolioList', function($scope, PortfolioList) {
    $scope.alias = 'PortfolioCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.categories = ['Soft', 'Elements'];

    $scope.portfolioList = PortfolioList;

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

}]);