$(document).ready(function(){
  // Add smooth scrolling to all links
 	$( ".l1" ).click(function() {
		 $(this).addClass("active");
		 $(".l2, .l3, .l4, .l5").removeClass("active");
		 $("#cp, #drawing, #html, #unity").hide();
 		 $( "#3dw" ).fadeIn( "slow" );
	});
	$( ".l2" ).click(function() {
		 $(this).addClass("active");
		 $(".l1, .l3, .l4, .l5").removeClass("active");
		 $("#cp, #drawing, #html, #3dw").hide();
 		 $( "#unity" ).fadeIn( "slow" );
	});
	$( ".l3" ).click(function() {
		 $(this).addClass("active");
		 $(".l2, .l1, .l4, .l5").removeClass("active");
		 $("#cp, #drawing, #unity, #3dw").hide();
 		 $( "#html" ).fadeIn( "slow" );
	});
	$( ".l4" ).click(function() {
		 $(this).addClass("active");
		 $(".l2, .l3, .l1, .l5").removeClass("active");
		 $("#unity, #drawing, #html, #3dw").hide();
 		 $( "#cp" ).fadeIn( "slow" );
	});
	$( ".l5" ).click(function() {
		 $(this).addClass("active");
		 $(".l2, .l3, .l4, .l1").removeClass("active");
		 $("#cp, #unity, #html, #3dw").hide();
 		 $( "#drawing" ).fadeIn( "slow" );
	});
});
