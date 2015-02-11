app.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        function log(scope, element, attrs, message) {
            console.log(["======================"]);
            console.log(["======================"]);
            console.log(["Page Offset: " + this.pageYOffset]);
            console.log(["======================"]);
            console.log(["Message", message])
            console.log(["======================"]);
            console.log(["ELEMENT:" + attrs.id, element[0]]);
            console.log(["======================"]);
            console.log(["Attribute", attrs]);
            console.log(["======================"]);
            console.log(["======================"]);
        }

        angular.element($window).bind("scroll", function() {
            var pageYOffset = this.pageYOffset,
                elemName = attrs.id,
                elemHeight = element.height(),
                message;

            if (pageYOffset < elemHeight && elemName != "body-view") {
                scope.boolChangeClass = false;
                message = 'Scroll is less than '+ elemName +' Height: ' + elemHeight;
                // log(scope, element, attrs, message);

            } else if (pageYOffset > elemHeight && elemName != "body-view") {
                scope.boolChangeClass = false;
                message = 'Scroll is greater than '+ elemName +' Height: ' + elemHeight;
                // log(scope, element, attrs, message);

            } else {
                scope.boolChangeClass = false;
                message = 'Body Not Scrolling';
                // log(scope, element, attrs, message);
            }
            scope.$apply();
        });
    };
});