$(document).ready(function(){
    $(".step-one-action-btn").on("click", function(){
        $(".step-one").hide()
        $(".step-two").show()
    })
    $(".step-two-action-btn").on("click", function(){
        $(".step-two").hide()
        $(".step-three").show()
    })
    $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
        $(".navbar-child-wrapper .navbar-nav").toggleClass("open-mobile-menu");
	});
});