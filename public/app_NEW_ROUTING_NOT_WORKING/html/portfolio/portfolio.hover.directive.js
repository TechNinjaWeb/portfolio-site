app.directive('portfoliohover', function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
            // console.log("ELEMENT PRESENT", attrs, elem);
            elem.mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                // call the hover effect
                onMixEnd: hoverEffect()
            });

            function hoverEffect() {
                // Simple parallax effect
                elem.hover(
                    function() {
                        $(elem).css('display', 'block');
                        $(elem).find('.label').stop().animate({
                            bottom: 0
                        }, 200, 'easeOutQuad');
                        $(elem).css('display', 'block');
                        $(elem).find('img').stop().animate({
                            top: -30
                        }, 500, 'easeOutQuad');
                    },
                    function() {
                        $(elem).css('display', 'block');
                        $(elem).find('.label').stop().animate({
                            bottom: -40
                        }, 200, 'easeInQuad');
                        $(elem).css('display', 'block');
                        $(elem).find('img').stop().animate({
                            top: 0
                        }, 300, 'easeOutQuad');
                    }
                );
            }
        }
    };
});