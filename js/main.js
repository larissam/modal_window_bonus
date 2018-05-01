$('#showModal').on('click', function(){
	$('body').append('<div class="background-overlay"></div>');
	$('body').addClass('open');
});

$('#close').on('click', function(){
	$('body').removeClass('open');
	$('.background-overlay').remove();
})