$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.character').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.character').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
    $('.character').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show(); 
    $('.hadouken').finish().show()
	  .animate(
	    {'left': '900px'},
	    500,
	    function() {
	      $(this).stop();	
	      $(this).hide();
	      $(this).css('left', '512px');
	    }
	  );
  })
  .mouseup(function() {
  	$('.character').hide();
  	$('.ryu-ready').show();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

 $(document).keydown(function() {
 	if (keyCode = 88) {
 		$('.character').hide();
 		$('.ryu-cool').show();
 	}
 })
 	.keyup(function() {
 	 if (keyup = 88) {
 		$('.character').hide();
 		$('.ryu-still').show();
 		}
 });

 

