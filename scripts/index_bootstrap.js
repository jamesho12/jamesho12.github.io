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

$(".list-group li").addClass("list-group-item bg-primary");