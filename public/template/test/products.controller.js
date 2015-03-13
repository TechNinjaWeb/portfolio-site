app.controller('ProductsCtrl', ['GetProducts', '$scope', 'ngTableParams', function(Products, $scope, Table) {
    $scope.message = "Products Controller";

    console.log('Getting products ...');
    // PAGINATION PLUGIN TEST
    $scope.tableParams = new Table({
        page: 1, // show first page
        count: 10 // count per page
    }, {
        getData: function($defer, params) {
            var query = Products;
            query.grab(
                function(res) {
                    $scope.data = res.results.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    window.console.log($scope.data, "Data Object");
                })
        }
    });
}])