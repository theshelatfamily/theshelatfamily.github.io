$( "#enterButton" ).click(function() {
	document.getElementById('content').style.display = "block";
  $( "#enterButton" ).fadeOut( "slow" );
  $('html,body').animate({
        scrollTop: $("#profiles").offset().top},
        'slow');
});

$( "#kPic" ).click(function() {
	$( "#kPic" ).fadeTo( "slow", 1 );

	$( "#mPic" ).fadeTo( "slow", 0.6 );
	$( "#nPic" ).fadeTo( "slow", 0.6 );
	$( "#starPic" ).fadeTo( "slow", 0.6 );
	$( "#sPic" ).fadeTo( "slow", 0.6 );

	$( "#mDescription" ).fadeOut( "slow" );
	$( "#nDescription" ).fadeOut( "slow" );
	$( "#starDescription" ).fadeOut( "slow" );
	$( "#sDescription" ).fadeOut( "slow" );

	$( "#kDescription" ).delay(800).fadeTo( "slow", 1 );
});

$( "#mPic" ).click(function() {
	$( "#mPic" ).fadeTo( "slow", 1 );

	$( "#kPic" ).fadeTo( "slow", 0.6 );
	$( "#nPic" ).fadeTo( "slow", 0.6 );
	$( "#starPic" ).fadeTo( "slow", 0.6 );
	$( "#sPic" ).fadeTo( "slow", 0.6 );

	$( "#kDescription" ).fadeOut( "slow" );
	$( "#nDescription" ).fadeOut( "slow" );
	$( "#starDescription" ).fadeOut( "slow" );
	$( "#sDescription" ).fadeOut( "slow" );

	$( "#mDescription" ).delay(800).fadeTo( "slow", 1 );
});