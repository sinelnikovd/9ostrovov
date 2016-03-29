$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var mainCarousel = $('.main-banner').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		dotsContainer: '.main-banner-dots',
		dots: true,
	})
	/*$('.carousel-customer__prev').click(function() {
		mainCarousel.trigger('prev.owl.carousel');
	})
	$('.carousel-customer__next').click(function() {
		mainCarousel.trigger('next.owl.carousel');
	})*/

	var hamburgerMenu = function () {

		if(!$('.side_hamburger').is(':visible')){
			$('.sidebar').removeClass('active');
			$('.wrapper').removeClass('active');
			$('.footer').removeClass('active');
		}
	}

	hamburgerMenu();

	$('.hamburger').click(function () {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('active');
		$('.wrapper').toggleClass('active');
		$('.footer').toggleClass('active');
	});

	$('.footer-hamburger').click(function () {
		$('.footer-blocks').slideToggle();
		$(this).toggleClass('active');
	});

	$('.footer-block__title .footer-block__link').click(function () {
		$(this).toggleClass('active').closest('.footer-block__title').next('.footer-block__list').slideToggle();
		return false;
	});

	$('.sidebar-menu__item_submenu .sidebar-menu__link').click(function () {
		$(this).closest('.sidebar-menu__item_submenu').toggleClass('active');
		return false;
	});

	$(window).resize(function() {
		hamburgerMenu();
	});


	$('.select-nice').niceSelect();

});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}