$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavBar");
    var shouldToggle = $(this).scrollTop() > $nav.height();
    $nav.toggleClass('scrolled-navbar', shouldToggle);
  });
});
