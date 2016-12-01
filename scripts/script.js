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
});