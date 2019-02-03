$(function() {
    $(window).scroll(function(e) {
        if ($(this).scrollTop() > 200)
        {
            $("#sidebar").fadeIn("slow");
			
        }
        else
        {
            $("#sidebar").fadeOut("slow"); 
        }
    });
});