// app.directive('portfoliofilter', function() {
//     return {
//         restrict: 'A',
//         link: function(scope, elem, attrs) {
//             // console.log("ELEMENT PRESENT", attrs, elem);

//             elem.click(function(e) {
//                 var portfolioList = $('.portfolio');
//                 // console.log(portfolioList, "PORTFOLIO LIST", typeof portfolioList);  
//                 var filter = attrs.filter.split(' ');

//                 portfolioList.each(function(pos, val) {
//                     var filterAttribute = val['attributes']['data-cat']['value'];


//                     if (filter.indexOf(filterAttribute) !== -1) {
//                         // $(val).css('display', 'block');
//                         $(val).addClass('animated')
//                         $(val).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                             $(this).removeClass('fade')
//                             $(this).removeClass('animated');
//                             console.log("fired Event")
//                         })
//                         $(val).addClass('fade')
//                         $(val).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                             $(this).removeClass('fade')
//                             $(this).removeClass('animated');
//                             console.log("fired Event")
//                         })

//                         console.log("Is Filtered filterAttribute", attrs.filter)


//                     } else {
//                         // // $(val).css('display', 'none');
//                         // // $(val).addClass('hidden');
//                         $(val).removeClass('animated');
//                         $(val).removeClass('fade');
//                         console.log("Is Not Filtered filterAttribute", attrs.filter)
//                     }

//                 })
//             });








//             // get array of portfolio items matching my name
//             // turn their css class to display block
//             //     with visibility visible
//             // and turn all other bock classes to display none
//             //     with visibility hidden


//         }
//     };
// });