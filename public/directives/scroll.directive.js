app.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        function log(scope, element, attrs, message) {
            console.log(["======================"]);
            console.log(["======================"]);
            console.log(["ELEMENT:" + attrs.id + "\n At Offset: " + this.pageYOffset + "px", element[0]]);
            console.log(["======================"]);
            console.log(["Message", message])
            console.log(["======================"]);
            console.log(["Attribute", attrs]);
            console.log(["======================"]);
            console.log(["======================"]);
        }
        // BEGIN SCROLL LISTENER
        angular.element($window).bind("scroll", function() {
            // GET THE PAGE OFFSET,
            // THE ELEMENTS DIMENSIONS,
            // SET THE VISIBLE PROPERTY
            // ADD ANIMATION
            var pageYOffset = this.pageYOffset,
                windowHeight = this.innerHeight,
                windowWidth = this.innerWidth,
                elemName = attrs.id,
                elemHeight = element.height(),
                elemWidth = element.width(),
                message, animations, elem;

            animations = attrs.scroll.split(' ');

            // console.log("Look for elem Top", element);

            elem = {
                name: elemName || attrs.$$element[0].className,
                height: elemHeight,
                width: elemWidth,
                top: element[0].offsetTop,
                animateIn: animations[0],
                animateOut: animations[1]
                
            }

            if ( /* BOTTOM OF WINDOW */ (pageYOffset + windowHeight) > elem.top /* IS GREATER THAN ELEM TOP */ 
                && pageYOffset < (elem.top + elem.height) ) {
                // element.toggle('animating');
                // console.log(elem.name + " Is In View");
                attrs.animating = true;
                message = elem.name +" is visible with offset = \n" + pageYOffset+"\n\n", "Attribs", attrs;
            } else {
                attrs.animating = false;
                message = elem.name + "\nIs Not View"
            }

            if (attrs.animating && attrs.scroll
                .indexOf(animations.map(function(val){ /* Visible and has no animation attributes */
                    return val;
            })) <= -1 ) {
                // console.log(attrs.id + " has no Animation ", "\n===========================");
                // element.removeClass(elem.animateOut);
                // console.log("With Class", attrs.class);
                element.addClass(elem.animateIn);

            } else if (attrs.animating && attrs.scroll
                .indexOf(animations.map(function(val){ /* Visible and found animation attributes */
                    // console.log("Found Animation Values", val);
                    return val;
            })) >= 0) {
                // console.log(attrs.id + " has Animation ", "\n===========================");
                // element.removeClass(elem.animateIn);
                // element.removeClass(elem.animateIn);
                element.removeClass(elem.animateOut);

            } else if (!attrs.animating && attrs.scroll
                .indexOf(animations.map(function(val){ /* Not Visible and found animation attributes */
                    // console.log("Found Animation Values", val);
                    return val;
            })) >= 0) { 
                    element.remove(elem.animateIn);
            } else { /* Catch All */
                // console.log(attrs.id, "did not return an index");
                // console.log(elem.name + " Has Animations", animations, "With Class", attrs.class)
            }
                
            console.log(element)


            // log(scope, element, attrs, ((attrs.id || attrs.$$element[0].className) +"'s "+"Animation object\n" + animations + "\n" + message));
            // log(scope, element, attrs, attrs.id + [" is visibile? : ", scope.visible])
            // log(scope, element, attrs, message);
            scope.$apply();
        });
    };
});