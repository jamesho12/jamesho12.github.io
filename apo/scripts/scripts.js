$('.bg-photo').click(function(e){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if (e.target === this) {
      $(".dropdown-content").css("display", "none");
    } 
  }
});

$('.dropdown').click(function(e){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if($(this).find('.dropdown-content').css("display") == "block"){
      $(this).find('.dropdown-content').css("display", "none");  
    } else {
      $('.dropdown-content').css("display", "none");
      $(this).find('.dropdown-content').css("display", "block");  
    }
  }
});