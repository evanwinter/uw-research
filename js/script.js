$(document).ready(function() {
	$('.post').click(function() {

		var thisScrollTop = $(this).offset().top

		$("html, body").animate({ scrollTop: thisScrollTop-5 }, "slow");

		// $(this).children('.post-info').children('.click-to-expand-group').toggle();
		$(this).children('.post-body').slideToggle('fast');

	});

});