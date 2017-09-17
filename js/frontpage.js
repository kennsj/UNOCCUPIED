var close = document.querySelector('.close-article')
var links = document.querySelectorAll('article')

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
		$(links[i]).not($(this)).delay(1200).fadeOut(300, function(){
			$(links[i]).not($(this)).remove()
		})
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
	// $('article').setAttribute('style', 'cursor: default')
	document.querySelector('html').setAttribute('style', 'width: 100vw; overflow-x: hidden', 'cursor: default')
}

// Load article HTML

$(document).ready(function () {
	$('h1').click(function () {
		$('.article-html').load('index.html')
		$('.empty, .article-html').velocity({
			translateY: '-100vh'
		}, {
			duration: 700,
			easing: 'ease'
		})
	})
})


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
