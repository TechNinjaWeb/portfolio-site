app.directive('portfoliohover', function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
            elem.hover(
                function() {
                    $(elem).find('.label').stop().animate({
                        bottom: 0
                    }, 200, 'easeOutQuad');
                    $(elem).find('img').stop().animate({
                        top: -30
                    }, 500, 'easeOutQuad');
                },
                function() {
                    $(elem).find('.label').stop().animate({
                        bottom: -40
                    }, 200, 'easeInQuad');
                    $(elem).find('img').stop().animate({
                        top: 0
                    }, 300, 'easeOutQuad');
                }
            );   
        }
    };
});