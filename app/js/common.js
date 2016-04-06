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


	$('.filter__button').click(function() {
		$('.filter-still__list').toggleClass('active');
	});

	$('.frame').sly({
		speed: 300,
		scrollBy: 100,
		dragHandle: 1,
		dynamicHandle: 1,
	});

	$(window).load(function() {

		function autoHeightCakeItem (argument) {
			var cakeItemMaxHeight = 0;
			$('.main-cakes-item').each(function () {
				var cakeItemHeight = $(this).height();
				$(this).height('auto');
				cakeItemMaxHeight = Math.max(cakeItemMaxHeight, $(this).outerHeight());
				$(this).height(cakeItemHeight);
			});
			//console.log(topItemMaxHeight);
			$('.main-cakes-item').height(cakeItemMaxHeight);
		}

		autoHeightCakeItem();

		if($(window).height() > 767){
			$('.top-menu').addClass('fixed');
			$('.sidebar-wrapper').addClass('fixed');
		}

		if($('.hamburger__text').is(':visible')){
			$('.sidebar-wrapper').addClass('fixed');
			$('.frame').height(($(window).height()-$('.side_hamburger').height()));
			$('.frame').sly('reload');
		}

		var funTopMenuItem = function () {
			$('.top-menu__item').each(function() {
				var ouW = $(this).outerWidth(true),
					w = $(this).width(),
					m = (ouW - w) / 2;
				if($(this).index() != 0){
					$(this).find('.top-menu__dot').css('left',((ouW-m-2)/w)*100+"%");
				}else{
					$(this).find('.top-menu__dot').css('left',((ouW-2)/w)*100+"%");
				}
			});
		}

		var funFormType = function() {
			if($(window).width() <= 480){
				$('#nostandart-form').closest('.order__control_form').after($('#standart-form-type'));
				$('#nostandart-form').closest('.order__control_form').after($('#nostandart-form-type'));
			}else{
				$('.order-form-types').append($('#standart-form-type'));
				$('.order-form-types').append($('#nostandart-form-type'));
			}
		}

		funFormType();

		var vfilterItemWidth = [],
			hfilterItemWidth = [];

		$('.filter__item').each(function() {
			vfilterItemWidth.push($(this).innerWidth());
		});


		var funFilterItem = function() {
			var sumVfilterItemWidth = 0;
			for(var i=0; i < vfilterItemWidth.length; i++)
				sumVfilterItemWidth += vfilterItemWidth[i];

			while(sumVfilterItemWidth > $('.filter__list').width()){
				$('.filter-still__list').append($('.filter__list .filter__item').last());
				hfilterItemWidth.push(vfilterItemWidth.pop())
				sumVfilterItemWidth = 0;
				for(var i=0; i < vfilterItemWidth.length; i++)
					sumVfilterItemWidth += vfilterItemWidth[i];
			}

			sumVfilterItemWidth = 0;
			for(var i=0; i < vfilterItemWidth.length; i++)
				sumVfilterItemWidth += vfilterItemWidth[i];

			if(hfilterItemWidth.length > 0){
				sumVfilterItemWidth += hfilterItemWidth[hfilterItemWidth.length-1];

				while(sumVfilterItemWidth < $('.filter__list').width() && hfilterItemWidth.length > 0){
					$('.filter__list').append($('.filter-still__list .filter__item').last());
					vfilterItemWidth.push(hfilterItemWidth.pop())
					sumVfilterItemWidth = 0;
					for(var i=0; i < vfilterItemWidth.length; i++)
						sumVfilterItemWidth += vfilterItemWidth[i];
				}
			}
		}

		funFilterItem();

		funTopMenuItem();

		var topLineHeight = $('.top-line').innerHeight(),
			topMenuHeight = $('.top-menu').innerHeight(),
			sideHamburgerTop = $('.side_hamburger').offset().top,
			sideHamburgerHeight = $('.side_hamburger').innerHeight();

		$(window).resize(function() {
			funFilterItem();

			funTopMenuItem();

			funFormType();

			autoHeightCakeItem();

			if($(window).height() < 768){
				$('.top-menu').removeClass('fixed');
				$('.sidebar-wrapper').removeClass('fixed');
				$('.top-line').css('margin-bottom', 0);
			}else{
				$('.top-menu').addClass('fixed');
				$('.sidebar-wrapper').addClass('fixed');
			}

			sideHamburgerTop = $('.side_hamburger').offset().top;
			sideHamburgerHeight = $('.side_hamburger').innerHeight();


			if($('.hamburger__text').is(':visible')){
				$('.sidebar-wrapper').addClass('fixed');
				$('.frame').height(($(window).height()-$('.side_hamburger').height()));
				$('.frame').sly('reload');
			}else{
				$('.frame').height('auto');
				$('.frame').sly('reload');
			}

		});





		$(window).scroll(function() {
			var windowScroll = $(window).scrollTop();
			if($('.top-menu').hasClass('fixed')){
				if(topLineHeight < windowScroll){
					$('.top-menu.fixed').addClass('fix');
					$('.sidebar-wrapper.fixed').addClass('fix');
					$('.top-line').css('margin-bottom', topMenuHeight);
				}else{
					$('.top-menu.fixed').removeClass('fix');
					$('.sidebar-wrapper.fixed').removeClass('fix');
					$('.top-line').css('margin-bottom', 0);
				}
			}

			if($('.hamburger__text').is(':visible')){
				if(windowScroll > sideHamburgerTop){
					$('.sidebar-wrapper.fixed').addClass('fix_h');
					$('.side_hamburger').addClass('fix');
					$('.top-line').css('margin-bottom', sideHamburgerHeight);

				}else{
					$('.sidebar-wrapper.fixed').removeClass('fix_h');
					$('.side_hamburger').removeClass('fix');
					$('.top-line').css('margin-bottom', 0);
				}
			}

			var windowHeight = $(window).height();
			if(!$('.hamburger__text').is(':visible')){
				if($('.footer').offset().top <= (windowScroll + windowHeight)){
					var bottom = (windowScroll + windowHeight) - $('.footer').offset().top + $('.sidebar-wrapper.fixed.fix .sidebar').height();
					$('.sidebar-wrapper.fixed.fix').css({'top': 'auto', 'bottom': bottom+20 });
				}else{
					$('.sidebar-wrapper.fixed.fix').css({'top': 41, 'bottom': 'auto' });
				}
			}
		});

	});





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