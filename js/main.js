// Animations

$('section')
    .velocity("scroll", { duration: 1500, easing: "ease-in-out" })


$('.intro-text h1').velocity({
    opacity: '1',
    translateY: '-15px'
}, {
    duration: '1200',
    delay: '700'
})


$('.intro-text h2').velocity({
    opacity: '1',
    translateY: '-15px'
}, {
    duration: '1200',
    delay: '1100'
})

$('.intro-text h3').velocity({
    opacity: '1',
    translateY: '-15px'
}, {
    duration: '1200',
    delay: '1100'
})


$('.intro-text .divider').velocity({
    opacity: '1',
    translateY: '-15px'
}, {
    duration: '1200',
    delay: '1500'
})


$('.img01').velocity({
    opacity: '1',
    translateY: '-25px'
}, {
    duration: '1200',
    delay: '1800'
})

// $('.intro-text h1,.intro-text h2,.intro-text .divider, .img01').velocity('reverse')

/*

$('.test').velocity({
    translateX: '50vw'
}, {
    delay: 500,
    duration: 1500
})

*/


// Hover sound script

var sound_beep = $("#beep-sound")[0];

$('.hover-sound-beep')

.hover(function(){
    sound_beep.play();
})

document.querySelector('.ambient-bg').volume = 0.1
