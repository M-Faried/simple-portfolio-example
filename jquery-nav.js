// The short cur for jQuery is $
$(document).ready(function () {
  $('.burger-menu').on('click', function () {
    // $('.mobile-nav').toggle('slow');
    // $('.mobile-nav').toggle(500);
    $('.mobile-nav').fadeToggle(500);
  });
});
