$(document).ready(function() {
	$('.post').click(function() {
		$(this).children('.post-body').slideToggle('fast');
	});
});