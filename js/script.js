$(document).ready(function() {
	$('.post').click(function() {

		// $(this).children('.post-info').children('.click-to-expand-group').toggle();
		$(this).children('.post-body').slideToggle('fast');

	});

});