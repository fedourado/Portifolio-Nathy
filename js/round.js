const roundText = new roundText
(document.getElementById("text-round")).radius(80);
$(window).scroll(function(){
    var offset = $(window).scrollTop();
    offset = offset = 0.4

    $(".round-round").css({
        "-moz-transform" : "rotate(" + offset + "deg)",
        "-webkit-transform" : "rotate(" + offset + "deg)",
        "-o-transform" : "rotate(" + offset + "deg)",
        "-ms-transform" : "rotate(" + offset + "deg)",
        "transform" : "rotate(" + offset + "deg)",
    });
});



