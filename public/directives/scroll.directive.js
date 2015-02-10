app.directive('scrollableContainer', function($window, $document) {
    return {
        link: function(scope, element, attrs) {
            angular.element($document).on('scroll', function() {
                var children = element.children();
                var $leftChild;
                for (var i = 0; i < children.length; i++) {
                    var $child = $(children[i]);
                    var childTop = $child.offset().top;
                    var docScrollTop = $document.scrollTop();
                    var scope = $child.scope();
                    if (childTop - docScrollTop < 0) {
                        if (!scope._left) {
                            scope._left = true;
                            $leftChild = $child;
                        }
                    } else {
                        delete scope._left;
                    }
                }
                if ($leftChild) {
                    $leftChild.scope().$eval( $leftChild.attr('scrollable-item') );
                }
            });
        }
    };
});