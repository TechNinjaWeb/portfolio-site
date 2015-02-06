function showScroll() {
    setInterval(function() {
        console.log(window.scrollY);
        var cHeight = $('#currentHeight');
        cHeight.innerHTML = window.scrollY;
    }, 1000)
};

$(document).ready(function(e) {
    showScroll();
    
    var origheight = $("#trans1").height();
    var height = $(window).height();
    
    if (height > origheight) {
        $("#trans1").height(height);
    }

    $(window).scroll(function() {
        var x = $(this).scrollTop();
        $('#trans1').css('background-position', 'center -' + parseInt(x / 5) + 'px');
    });
});