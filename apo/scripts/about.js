$(".menu").click(function() {
  $(".menu-items").slideToggle(400, function() {
    $(".menu-items").toggleClass("nav-expanded").css("display","");
  });
});

// This is a quickfix for the dropdown menu for mobile devices,
// in particular for Safari because of how the browser processes
// hover. Allows the rest of the screen to be clicked and thus hiding
// the dropdown content.
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('.container, footer').click(function(e){
    if($(".nav-expanded").css("display") == "block") {
      $(".menu-items").toggleClass("nav-expanded").css("display","");
    }
  });
}
