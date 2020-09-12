$(document).ready(function () {
    $("img").mouseover(function () {
        $("img").fadeTo("fast", 0.5);
    });
    $("img").mouseleave(function () {
        $("img").fadeTo("fast", 1.0);
    });
});