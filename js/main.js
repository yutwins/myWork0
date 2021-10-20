$(function() {
    $(".sec10-flow h5").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    });

    $(".flow-item-ttl").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    });
});