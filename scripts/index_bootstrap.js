$("#myNav a").click(function() {
   $("#myNav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

var i=0;
$("section").each(function(i) {
  if(i%2 === 1) {
    console.log(this);
    $(this).addClass("bg-primary text-white");
    if($(this).attr("id") === "skills")
      $(this).addClass("alt-icon");
  }  
});

$(".navbar-brand, .navbar-nav a").click(function(event){ 
 event.preventDefault();
 var o =  $( $(this).attr("href") ).offset();   
 var sT = o.top - $("#myNav").outerHeight(true); // get the fixedbar height
 // compute the correct offset and scroll to it.
 if(window.screen.width < 992)
   $(".navbar-nav").slideUp(400).delay(800);
 
 if(this.className === "navbar-brand") {
   $('html,body').animate({
     scrollTop: sT
   });
   return;
 } 
 
 $('html,body').animate({
   scrollTop: sT + 1
 });
});  

$(".list-group li").addClass("list-group-item bg-primary");