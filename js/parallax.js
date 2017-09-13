$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
        y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
    });

};

// Hover animations

$(document).mousemove(function (e) {
    $('.planet').parallax(20, e)
    $('.grid-parallax').parallax(-50, e)
    $('.parallax-pos-50').parallax(50, e)
    $('.parallax-pos-150').parallax(150, e)
    $('.parallax-neg-150').parallax(-150, e)
    $('.flex-40').parallax(-150, e)
    $('.flex-60').parallax(150, e)
    $('footer').parallax(0, e)
})
