// Toggle hamburger icon
document.querySelector('.hamburger').addEventListener('click', function(){
    $('.open-navigation').toggleClass('toggle-nav')
});


// Print out current section which is viewed
var totalSections = $('.section')
    for (var i = 0; i < totalSections.length; i++) {
}


// Scroll down on click
$('.scroll-down').click(function(){
    $.fn.fullpage.moveSectionDown();
}),


// Fullpage scroll
$(document).ready(function() {
	$('#fullpage').fullpage({

		navigation: true,
        scrollOverflow: false,
        slidesNavigation: true,
		slidesNavPosition: 'bottom',

		afterRender: function() {
			$('#fullpage .section:not(:first)').fadeOut(700);

            /* else if (!$('.open-navigation').hasClass('nav-active')) {
                $.fn.fullpage.setMouseWheelScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
            } */

		},

		onLeave: function(index, nextIndex, direction, sectionSelector, lockAnchors) {
			if(direction=='down') {

                sound_beep.play()

				$('h1, h2, h5, p').velocity({
                    translateY: '30px',
                    opacity: 0,
				}, {
					duration: 900,
                    easing: [0.16, 0.68, 0.43, 0.99]
				})

				$('h1, h2, h5, p').velocity('reverse')

				$('#fullpage .section').eq(index-1).delay(350).fadeOut(350);
				$('#fullpage .section').eq(nextIndex-1).delay(700).fadeIn(700);
			}

			if (direction=='up'){

                sound_beep.play()

				$('#fullpage .section').eq(index-1).delay(350).fadeOut(350);
				$('#fullpage .section').eq(nextIndex-1).delay(700).fadeIn(700);
			}
		},

        afterSlideLoad: function(index, section) {
            var totalSections = document.querySelectorAll('section')
        },

        /*

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);
            var totalItems = loadedSlide.siblings().length;
            var numContainer = loadedSlide.closest('.fp-section').find('.num');
            numContainer.html("0" + slideIndex + ' / ' + totalItems);
        },

        */

        /*
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);
            var slideIndex = slideIndex + 1;
            var totalItems = loadedSlide.siblings().length + 1;
            var numContainer = loadedSlide.closest(document).find(".num");
            numContainer.html("0" + slideIndex + " / " + "0" + totalItems);
        },

        afterLoad: function(index, nextIndex, direction) {
            var loadedSlide = $(this);
            var slideIndex = find(".fp-slide .active") + 1;
            var totalItems = loadedSlide.closest(".fp-section").find(".fp-slide").length;
            var numContainer = loadedSlide.closest(document).find(".num");
        numContainer.html("0" + slideIndex + " / " + "0" + totalItems);
        },

        onLeave: function(index, nextIndex, direction) {
            var section = $(this),
            sectionSlides = section.find(".slide"),
            totalItems = sectionSlides.length,
            currentIndex = sectionSlides.filter(".fp-slide .active").length + 1,
            numContainer = section.closest(document).find(".num");
            numContainer.html("0" + currentIndex + ' / ' + "0" + totalItems);
        },
        */

        loopBottom: true,
		loopTop: true,
	});
});

// Hover sound script

var sound_beep = $("#beep-sound")[0];

$('.social-border, .hamburger').on('mouseenter', function(){
	sound_beep.play()
})

$('.social-border, .hamburger').on('mouseleave', function(){
	sound_beep.currentTime = 1
})

$('.scroll-down').on('mouseenter', function(){
	sound_beep.play()
})

$('.scroll-down').on('mouseleave', function(){
	sound_beep.currentTime = 1
})

$(document).on('mouseenter', '#fp-nav li a', function(e) {
     sound_beep.play()
});

$(document).on('mouseleave', '#fp-nav li a', function(e) {
	 sound_beep.currentTime = 1
});

$(document).on('mouseover', '#fp-nav li a', function(e) {
     $(this).find('li a').css('background-color', 'blue')
});

document.querySelector('.ambient-bg').volume = .2
