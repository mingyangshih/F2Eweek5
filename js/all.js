

$(document).ready(function() {
	$(".rm .p4-r").addClass('fas fa-star');
	$(".rm .p4-r-e").addClass('far fa-star');
	$(".ch-select .ch-t2-2").addClass('fas fa-caret-right');
	$(".sun").addClass('fas fa-sun');
	$(".moon").addClass('far fa-moon');
	$(".last-page").addClass('fas fa-chevron-left');
	$(".next-page").addClass('fas fa-chevron-right');
	//$(".gray1").addClass('fas fa-angle-double-left');

	$(".footer-content .ch1").hover(function() {
		$(this).addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this ).removeClass('active');
	});
	$(".footer-content .ch2").hover(function() {
		$(this).addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('active');
	});


});

$(document).ready(function() {
	$("#switch").click(function(event) {
		/* Act on the event */
		$(".black").toggleClass('switch');
		$(".white").toggleClass('switch');
		$(".ch-select .ch-t2-1").toggleClass('switch');
		$(".wrap").toggleClass('switch');
		$("#chapter").toggleClass('switch');
		$(".ch-select .sun").toggleClass('switch');
		$(".ch-select .moon").toggleClass('switch');
		$("header").toggleClass('switch');
		$(".last-page.fas.fa-chevron-left").toggleClass('switch');
		$(".next-page.fas.fa-chevron-right").toggleClass('switch');
		$(".bottom-choose .pg1>a p").toggleClass('switch');
	});
	
});