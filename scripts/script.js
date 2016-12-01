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
});