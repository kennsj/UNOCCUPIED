// Animations

/*$('.test').velocity({
    transition.slideDownOut,
    options: { duration: 1500 }
});*/

var width = $(window).width()

/*

$('.test').velocity({
    width: 0
}, {
    delay: 500,
    duration: 1500
})

*/

/*

$('.test').velocity({
    translateX: 100,
    width: 0
}, {
    delay: 500,
    duration: 1500
})

*/

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
