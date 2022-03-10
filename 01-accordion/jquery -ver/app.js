$(document).ready(function () {
  $(".title").click(function () {
    function slideDown(target) {
      slideUp();
      $(target).addClass("active").next().slideDown();
    }
    function slideUp() {
      $(".title").removeClass("active").next().slideUp();
    }
    $(this).hasClass("active") ? slideUp() : slideDown($(this));
  });
});
