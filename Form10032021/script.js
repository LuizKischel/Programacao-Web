$(function(){
    $(":input").css("backgroundColor", "yellow");
    $(":text").css("backgroundColor", "white");
    $(":password").css("backgroundColor", "gray");
    $(":radio").parent().css("backgroundColor", "#bbb");
    $(":checkbox").parent().css("backgroundColor", "#bbb");
    $(":submit").css("backgroundColor", "#bbb");
    $(":reset").css("backgroundColor", "#bbb");
    $(":disabled").css("opacity", "0.5");
    $(":checkbox:checked").parent().css("backgroundColor", "red");

    $(".input option:selected").each(function() {
        $(":text").val( $(this).text());
     });
});