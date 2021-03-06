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

	$('.product_slider_four_columns').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$('.product_cart_img_big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		asNavFor: '.product_cart_img_prev'
	});
	$('.product_cart_img_prev').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product_cart_img_big',
		dots: false,
		infinite: false,
		focusOnSelect: true
	});

	var product_slide = $('.product_slider .product,.product_slider_four_columns .product');
	var product_slide_dots = $('.product_slider .slick-dots,.product_slider_four_columns .slick-dots');

	product_slide.hover(function() {
		product_slide_dots.css('z-index', '-1');
	}, function() {
		product_slide_dots.css('z-index', '0');
	});

	$('.view_history_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	});

	$('.product_cart_more_slider').slick({
		dots: false,
		infinite: true,
		vertical: true,
		speed: 300,
		slidesToShow: 3,
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



	$('.view_row').click(function(event) {
		
		$(this).addClass('active');
		$('.view_grid').removeClass('active');

		$('.catalog_list_wrapper').addClass('open');
		$('.catalog_grid_wrapper').removeClass('open');

	});

	$('.view_grid').click(function(event) {

		$(this).addClass('active');
		$('.view_row').removeClass('active');

		$('.catalog_grid_wrapper').addClass('open');
		$('.catalog_list_wrapper').removeClass('open');
		
	});

	$('.product_cart_color_label').click(function(event) {
		event.preventDefault();
		$(this).parent('.product_cart_color').find('.product_cart_color_label').removeClass('active');
		$(this).addClass('active');
	});

	// Tabs swicher
	$('.tabs').on('click', 'a', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		// console.log($(target));
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.tabs_wrapp > div').removeClass('active');
		$(''+target+'').addClass('active');
	});

    // Filter range
 //    $('.slider_range').slider({
	// 	range: true,
	// 	min: 100,
	// 	max: 5000,
	// 	values: [ 750, 3000 ],
	// 	stop: function( event, ui ) {
	// 		var wrap = $(this).parent('.cat_filter_item');
	// 		var min = wrap.find('.min_val');
	// 		var max = wrap.find('.max_val');
	// 		min.val($(this).slider("values",0));
	// 		max.val($(this).slider("values",1))
	// 	},
	// 	slide: function( event, ui ) {
	// 		var wrap = $(this).parent('.cat_filter_item');
	// 		var min = wrap.find('.min_val');
	// 		var max = wrap.find('.max_val');
	// 		min.val($(this).slider("values",0));
	// 		max.val($(this).slider("values",1))
	// 	}
	// });

	$('.cat_filter_item_name').on('click', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass('open');
	});

	// Cart count
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // Map box
    $('.drop_box').on('click', '.drop_box_link', function(event) {
    	event.preventDefault();
    	$(this).toggleClass('open');
    	$(this).parent().find('.drop_box_dropdown').toggleClass('open');
    });

    // Fancybox
    // $("a.fancy").fancybox();

    var menuHei = $('.catalog_menu_drop').height();
    $('.catalog_menu_submenu').css('minHeight', menuHei);


    // Cart calculate total price
    $('.cart_item_number').on('change', 'input', function() {
    	// Добавить input рядом с ценой <input type="hidden" class="cart_item_one_price" value="<цена товара без пробелов>">
    	var itemPrice = $(this).closest('.cart_item').find('.cart_item_one_price').val();
    		itemCount = $(this).val();
    		itemPriceField = $(this).closest('.cart_item').find('.cart_item_price');
    		itemTotalSumm = itemCount*itemPrice;
    	itemPriceField.html(itemTotalSumm.toLocaleString());
    });

    $('body .cart_item_price').bind("DOMSubtreeModified", function() {
    	var totalSumm = 0;
    		RegEx=/\s/g;
    		thisSumm = $(this).html().replace(RegEx, "");
        $('body .cart_item_price').each(function(){
			totalSumm += parseInt($(this).text().replace(/[^-0-9]/gim,''));
		});
		$('#total_ammount').html(totalSumm.toLocaleString())
    });

});