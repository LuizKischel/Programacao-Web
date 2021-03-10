$(function(){
    $("#txt").val("Texto alterado com jquery")
    $(".email").val("Texto alterado com jquery pela classe")

    //$("p:not(.destaque), li").css("opacity", ".75");
    //$("p, li").css("color", "#999");
    //$(".container > ul > li").css("color", "black");
    $(".destaque ~ p").addClass("destaque");

});