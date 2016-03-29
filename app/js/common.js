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

	if($('.slider .slider__item').length > 1)
		$('.slider').owlCarousel({
			loop: true,
			nav: false,
			items: 1,
			autoplay: true,
			autoplayTimeout: 5000,
			dotsContainer: '.slider-dot',
			dots: true,
		});

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

	$.datetimepicker.setLocale('ru');

	$('.input_date').datetimepicker({
		i18n:{
			ru:{
				months:[
				'Январь','Февраль','Март','Апрель',
				'Май','Июнь','Июль','Август',
				'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
				"Пн.", "Вт.", "Ср.", "Чт.", 
				"Пт.", "Сб.", "Вс.",
				]
			}
		},
		timepicker:false,
		value: new Date(),
		format:'d.m.Y',
		lang:'ru'
	});

	$('.input_time').datetimepicker({
		i18n:{
			ru:{
				months:[
				'Январь','Февраль','Март','Апрель',
				'Май','Июнь','Июль','Август',
				'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
				"Пн.", "Вт.", "Ср.", "Чт.", 
				"Пт.", "Сб.", "Вс.",
				]
			}
		},
		datepicker:false,
		value: new Date(),
		format:'H:i',
		lang:'ru'
	});

	$('.order-delyvery__tab-nav').click(function() {
		if(!$(this).hasClass('active')){
			$('.order-delyvery__tab-nav.active').removeClass('active');
			$('.order-delyvery__tab.active').removeClass('active');
			$('.order-delyvery__tab').eq($(this).index()).addClass('active');
			$(this).addClass('active');
		}
	});


	$('.order__form').change(function() {

		$('.order-form-type.active').removeClass('active');
		$("#"+$(this).data('type-id')).addClass('active')
	});

	$('.order-form-type__close').click(function() {
		$('.order-form-type.active').removeClass('active');
		$('.order__form:checked').removeAttr("checked");
	});

	$.fn.cycle.defaults.autoSelector = '.slideshow';

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