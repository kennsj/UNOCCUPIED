// Animations
/*
$('.exoplanet-one').velocity({
    translateY: 0,
}, {
    delay: 500,
    duration: 1500
})

$('h1').velocity({
    translateX: 0
}, {
    delay: 500,
    duration: 1500
})

$('h3').velocity({
    translateX: 0
}, {
    delay: 500,
    duration: 1500
})

$('p').velocity({
    translateX: 0
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
