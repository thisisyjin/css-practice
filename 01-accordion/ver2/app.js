$(document).ready(function () {
  $(".title").click(function () {
    if ($(this).hasClass("active")) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass("active").next().slideDown();
    }
    function slideUp() {
      $(".title").removeClass("active").next().slideUp();
    }
  });
});
