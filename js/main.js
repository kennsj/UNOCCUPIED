// Toggle hamburger icon
var count = 0

document.querySelector('.hamburger').addEventListener('click', function(){
    // $('.open-navigation').toggleClass('toggle-nav')

    if ( ++count % 2 === 1 ) {

        $('.menu-right').velocity({
            width: '100vw',
        }, {
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

        $('.scroll-down').velocity({
            opacity: 0
        }, {
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

        $('.open-navigation').velocity({
            opacity: 1,
            display: 'flex'
        }, {
            delay: 0,
            duration: 1800,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

        $('.nav-footer').velocity({
            opacity: 1,
        }, {
            delay: 450,
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })


        $('.article-one').velocity({
            opacity: 1,
            perspective3: 0
        }, {
            delay: 900,
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

        $('.article-two').velocity({
            opacity: 1,
            perspective3: 0
        }, {
            delay: 1350,
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

        $('.article-three').velocity({
            opacity: 1,
            perspective3: 0
        }, {
            delay: 1800,
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })

    } else {
        $('.menu-right').velocity({
            width: '5vw',
        }, {
            delay: 400,
            duration: 900,
            easing: [0.16, 0.68, 0.43, 0.99],
        })
        $('.scroll-down')
            .velocity('stop')
            .velocity('reverse')
        $('.open-navigation')
            .velocity('stop')
            .velocity('reverse')
        $('.nav-footer')
            .velocity('stop')
            .velocity('reverse')
        $('.article-one')
            .velocity('stop')
            .velocity('reverse')
        $('.article-two')
            .velocity('stop')
            .velocity('reverse')
        $('.article-three')
            .velocity('stop')
            .velocity('reverse')
    }
});


/* if ($('.imgOne, .imgTwo, .imgThree, .imgFour, .imgFive')).hasClass('active'){
    console.log('hi')
} */

if ( $('.imgOne, .imgTwo, imgThree, imgFour, .imgFive').hasClass( "active" ) ) {

    console.log('hi')

}

/*
var counter = 0;
function makeTransparent($target) {
  $target.eq(counter).animate({opacity: 0}, function(){
    counter++;
    if (counter < $target.length) {
      makeTransparent($target);
    }
  });
} */

// $('.fn.fullpage').setAllowScrolling(false);

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
        slideSelector: '.slide',

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

document.querySelector('.ambient-bg').volume = .1
