$(document).ready(function() {
  $('.card-hidden').each(function(i, el) {
    var heightWrap = $(el).css('min-height');
    var height = $(el).find('.desc').outerHeight();

    $(el).attr('data-height', 'calc(' + heightWrap + ' + ' + height + 'px)');
    $(el).hover(
      function(){
        $(this).find('.wrapper').css('min-height', $(this).attr('data-height'));
      },
      function(){
        $(this).find('.wrapper').css('min-height', '');
      })
  });

  var $asideSlider = $('.aside-slider-wrap');

  $asideSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true
  });

  $('.aside-slider-left').click(function() {
      $asideSlider.trigger('prev.owl.carousel');
  })

  $('.aside-slider-right').click(function() {
      $asideSlider.trigger('next.owl.carousel');
  })
  $asideSlider.on('changed.owl.carousel', function(e) { setTab(e.item.index) });

  var $tabs = $('.aside-slider .btns .btn');
  $tabs.on('click', function(e) {
    e.preventDefault();
    var text = $(this).attr('href');
    text = text.slice(1);
    var indexEl = 0;
     var $element = document.querySelector('.owl-stage .owl-item:not(.cloned) .item[data-tab="'+text+'"]')
     
     var owlItems = document.querySelectorAll('.owl-stage .owl-item:not(.cloned)');

      [].forEach.call(owlItems, function(el, i) {
        if( el === $element.parentNode ) {
          indexEl = i;
        }
      });

    $asideSlider.trigger('to.owl.carousel', [indexEl, 300]);
    $asideSlider.trigger('changed.owl.carousel');

    // setTab(indexEl);
  });



  function setTab(i) {
    var index = i + 1;

    var $element = $('.owl-stage').children('.owl-item:nth-child(' + index + ')');

    var text = $element.children('.item').attr('data-tab');
    text = '#' + text;
    console.log($tabs);
    $tabs.each(function(i, el) {
      $(el).addClass('-disabled');
      if( $(el).attr('href') === text ) {
        $(el).removeClass('-disabled');
      }
    });
  }

  var sliderPrice = $('.slider-price');

  sliderPrice.slider({
    range: true,
    min: 0,
    max: +$('.slider-max-val').val(),
    values: [0, +$('.slider-max-val').val()],
    slide: function(e, ui) {
      $('.slider-min-val').val( ui.values[0] );
      $('.slider-max-val').val( ui.values[1] );
      $('.slider-min-val, .slider-max-val').trigger('keyup');
    }
  });

  

  $('.slider-min-val, .slider-max-val')
    .numeric()
    .on('keyup', changeSlider)
    .on('keyup', checkMaxMin)
    .on('change', checkMaxMin)
    // .on('keyup', changeSizeInput)
    // .on('change', changeSizeInput)

    function checkMaxMin() {
      
      var val = $(this).val(),
          max = sliderPrice.slider( 'option', 'max' ),
          min = sliderPrice.slider( 'option', 'min' );
      val = val ? val : 0;
      if( val >= max ) $(this).val(max);
      if( val <= min ) $(this).val(min);

    }

  function changeSlider() {
    sliderPrice.slider('values', [
      $('.slider-min-val').val(),
      $('.slider-max-val').val()
    ]);
  }

  function changeSizeInput() {
    var val = $(this).val();

    $(this).attr('size', val.length);
  }

  $('.input .slider').on('click', function(e) {
    var sliderPriceWrap = $(this)[0],
        wrap = $(this).find('.slider-price-wrap');
    wrap.addClass('-visable');

    $(window).on('click', hideSlidePrice);

    function hideSlidePrice(e) {
      var target = e.target,
          disabled = true;
      while( target !== document ) {
        if( target === sliderPriceWrap ) {
          disabled = false;
        }
        target = target.parentNode;
      }

      if(disabled) {
        wrap.removeClass('-visable');
        $(window).off('click', hideSlidePrice);
      }
    } 

  });

  $('.js-home-filter').on('click', function(){
    var url = '';
    url += $('.js-home-cat').val() + '?';
    url += 'price_min=' + $('.slider-min-val').val() + '&';
    url += 'price_max=' + $('.slider-max-val').val() + '&';
    // url += 'stock=' + $('.js-home-check-stock').val() + '&';

    location = url;
  })

});