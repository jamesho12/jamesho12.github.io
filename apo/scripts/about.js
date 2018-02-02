$(".menu").click(function() {
  $(".menu-items").slideToggle(400, function() {
    $(".menu-items").toggleClass("nav-expanded").css("display","");
  });
});
