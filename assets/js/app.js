$(document).ready(function(){
    $(".step-one-action-btn").on("click", function(){
        $(".step-one").hide()
        $(".step-two").show()
    })
    $(".step-two-action-btn").on("click", function(){
        $(".step-two").hide()
        $(".step-three").show()
    })
});