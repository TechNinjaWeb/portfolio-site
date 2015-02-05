function showScroll() {
	setInterval(function(){
		console.log(window.scrollY);
	}, 1000)
};

$(document).ready(function(e){
	var cHeight = $('#currentHeight');
	$('#parallax-window').parallax({imageSrc: '/assets/parallax.jpeg'});
});