const cloes = document.querySelector('.close-article')
const links = document.querySelectorAll('article')

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', (e) => e.preventDefault());
	$('article').on('mouseenter', mouseenterFunc);
}

function mouseenterFunc() {
	for (let i = 0; i < links.length; i++) {
		links[i].setAttribute('style', 'width: 33vw; opacity: .3')
	}
	this.setAttribute('style', 'width: 50vw; opacity: 1')
}

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', mouseclickFunc);
}

function mouseclickFunc() {
	for (let i = 0; i < links.length; i++) {
			links[i].setAttribute('style', 'width: 0; opacity: 0')
			$('article').unbind('mouseenter mouseleave hover')
		}
	//$(this).find('.text-field').css('text-align', 'left')
	$(this).find('.text-field').velocity({

	}, {
		duration: 700,
		delay: 500
	}, {

	})
	this.setAttribute('style', 'width: 100vw')
	$('article').setAttribute('style', 'cursor: default')
	document.querySelector('html').setAttribute('style', 'width: 100vw; overflow-x: hidden', 'cursor: default')
}

/*
const cloes = document.querySelector('.close-article')
const text_field = document.querySelectorAll('text-field')
const links = document.querySelectorAll('article')

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', (e) => e.preventDefault());
	links[i].addEventListener('mouseenter', mouseenterFunc);
}

function mouseenterFunc() {
	for (let i = 0; i < links.length; i++) {
		links[i].setAttribute('style', 'width: 33vw; opacity: .3')
	}
	this.setAttribute('style', 'width: 50vw; opacity: 1')

	for (let i = 0; i < text_field.length; i++) {
		this.setAttribute('style', 'bottom: 150px')
	}
}

for (let i = 0; i < links.length; i++) {
	// links[i].addEventListener('mouseenter', (e) => e.preventDefault());
	links[i].addEventListener('click', mouseclickFunc);
}

function mouseclickFunc() {
	for (let i = 0; i < links.length; i++) {
			links[i].setAttribute('style', 'width: 0; opacity: 0')
			$('article').unbind('mouseenter mouseleave hover')
		}

	this.setAttribute('style', 'width: 100vw')
	document.querySelector('html').setAttribute('style', 'width: 100vw; overflow-x: hidden')
	return
}
*/

/*$("article").hover(onOver, onOut);

function onOver() {
	$(this).addClass('.full-width')
	$(this)
		.velocity({
			duration: 700
		});
}

function onOut() {
	$(this).velocity("reverse");
}
*/

// linear-gradient(to bottom, rgba(125,185,232,0) 0%,rgba(26,26,26,0.5) 100%)

/*
// Function for bind / rebind

$('a#toggle').toggle(
    function(){
        $(this).text('rebind');
        $('a#button').on('click.disabled', false);
    },
    function(){
        $(this).text('unbind');
        $('a#button').off('click.disabled');
    }
);

*/

// Animation


// Parallax function
/*
$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
        y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
    });
}
*/
