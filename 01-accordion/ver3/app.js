$(document).ready(function () {
  $(".title").click(function () {
    $(".text").not($(this).next(".text").slideToggle(300)).slideUp();
  });
});
