$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Catalog menu
	$('.catalog_menu').mouseenter(function() {
		$(this).addClass('menu_open').find('.catalog_menu_toggle').addClass('open');
		$('.menu_overlay').fadeIn();
	});

	$('.catalog_menu').mouseleave(function() {
		$(this).removeClass('menu_open').find('.catalog_menu_toggle').removeClass('open');
		$('.menu_overlay').fadeOut();
	});

	// Authorization form
	$('.header_bottom_right_link.lk').hover(function() {
		$('.menu_overlay').fadeIn();
	}, function() {
		$('.menu_overlay').fadeOut();
	});

	// Sidebar slider
	$('.main_slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$('.product_slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true
	});
	$('.product_slider_item .product').hover(function() {
		$('.product_slider .slick-dots').css('z-index', '-1');
	}, function() {
		$('.product_slider .slick-dots').css('z-index', '0');
	});

	$('.view_history_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

});