$( "#enterButton" ).click(function() {
	document.getElementById('content').style.display = "block";
  $( "#enterButton" ).fadeOut( "slow" );
  $('html,body').animate({
        scrollTop: $("#profiles").offset().top},
        'slow');
});