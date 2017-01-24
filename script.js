$( "#enterButton" ).click(function() {
  $( "#enterButton" ).fadeOut( "slow" );
});

$("#enterButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#profiles").offset().top},
        'slow');
});