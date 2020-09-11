$(document).ready(function () {
    $("img").mouseover(function () {
        $("img").fadeTo("slow", 0.5);
    });
    $("img").mouseleave(function () {
        $("img").fadeTo("slow", 1.0);
    });
});