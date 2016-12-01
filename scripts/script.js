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
    loop: true
  });

  $('.aside-slider-left').click(function() {
      $asideSlider.trigger('prev.owl.carousel');
  })

  $('.aside-slider-right').click(function() {
      $asideSlider.trigger('next.owl.carousel');
  })
});