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
                windowBottom = this.pageYOffset + this.innerHeight - 50,
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
                bottom: element[0].offsetHeight,
                animateIn: animations[0],
                animateOut: animations[1]

            };
            
            // console.log("Elem in question", elem.name, "Elem Top :" + elem.top, "PageYOffset :"+ pageYOffset);
            // if (WINDOWBOTTOM GREATER THAN ELEMENTTOP && WINDOWTOP LESSTHAN ELEMENTBOTTOM )
            // console.log("Elem in question", elem.name, "Elem Top :" + elem.top, "PageYOffset :"+ pageYOffset);
            if (windowBottom > elem.top && pageYOffset < elem.top + elem.height) {
                // console.log("Elem In View", elem.name);    
                attrs.inView = true;
            } else if (pageYOffset < elem.top && pageYOffset > elem.top + elem.height) {
                // console.log("Elem Out of View", elem.name);
                attrs.inView = false;
            } else {
                // console.log("Invisible");
            }

            // if ( /* BOTTOM OF WINDOW */ (pageYOffset + windowHeight) > elem.top /* IS GREATER THAN ELEM TOP */ && pageYOffset < (elem.top + elem.height)) {
            //     // element.toggle('inView');
            //     console.log(elem.name + " Is In View\n", "PageYOffset: "+pageYOffset+ "\n"+"Bottom Of Window: "+ (pageYOffset + windowHeight)+ "\n"+elem.top);
            //     attrs.inView = true;
            //     message = elem.name + " is visible with offset = \n" + pageYOffset + "\n\n", "Attribs", attrs;
            // }
            // else {
            //     attrs.inView = false;
            //     message = elem.name + "\nIs Not View"
            // }

            if (attrs.inView && attrs.scroll
                .indexOf(animations.map(function(val){ /* Visible and has no animation attributes */
                    return val;
            })) <= -1 ) {
                // console.log(attrs.id + " has no Animation ", "\n===========================");
                // element.removeClass(elem.animateOut);
                // console.log("With Class", attrs.class);
                element.addClass(elem.animateIn);

            } else if (attrs.inView && attrs.scroll
                .indexOf(animations.map(function(val){ /* Visible and found animation attributes */
                    // console.log("Found Animation Values", val);
                    return val;
            })) >= 0) {
                // console.log(attrs.id + " has Animation ", "\n===========================");
                // element.removeClass(elem.animateIn);
                // element.removeClass(elem.animateIn);
                // element.removeClass(elem.animateOut);

            } else if (!attrs.inView && attrs.scroll
                .indexOf(animations.map(function(val){ /* Not Visible and found animation attributes */
                    // console.log("Found Animation Values", val);
                    return val;
            })) >= 0) { 
                    element.removeClass(elem.animateIn) && element.removeClass(elem.animateOut) && element.removeClass(elem.animateOut);
                    console.log("attempted to remove element class")
            } else { /* Catch All */
                // console.log(attrs.id, "did not return an index");
                // console.log(elem.name + " Has Animations", animations, "With Class", attrs.class)
            }

            // if (attrs.inView) {
                
            // }
            // else if (attrs.inView) {
            //     console.log("Exit View", attrs.id, "Top Offset: " + element[0].offsetTop + " At Page Offset: " + pageYOffset);
            // }
            // else {
            //     // console.log(attrs.id + " is Invisible", "Top Offset: " + element[0].offsetTop + " At Page Offset: " + pageYOffset);
            // }


            // console.log(element)


            // log(scope, element, attrs, ((attrs.id || attrs.$$element[0].className) +"'s "+"Animation object\n" + animations + "\n" + message));
            // log(scope, element, attrs, attrs.id + [" is visibile? : ", scope.visible])
            // log(scope, element, attrs, message);
            scope.$apply();
        });
    };
});