//$(document).ready(function() {
  $(".menu").click(function() {
    $(".menu-items").slideToggle(400, function() {
      $(".menu-items").toggleClass("nav-expanded").css("display","");
    });
  });  
  
  $(".nav-header, .menu-items a").click(function(event){ 
    event.preventDefault();
    var o =  $( $(this).attr("href") ).offset();   
    var sT = o.top - $(".nav-container").outerHeight(true); // get the fixedbar height
    // compute the correct offset and scroll to it.
    if(window.screen.width < 992)
      $(".menu-items").slideUp(400).delay(800);
    
    if(this.className === "nav-header") {
      $('html,body').animate({
        scrollTop: sT
      });
      return;
    } 
    
    $('html,body').animate({
      scrollTop: sT + 1
    });
  });  
  
  var i=0;
  $('section').each(function(i) {
    if(i%2 === 1) {
      console.log(this);
      $(this).addClass("odd-container");
      if($(this).attr("id") === "skills")
        $(this).addClass("alt-icon");
    }      
  });
  
  $(".skills-list li").each(function() {
    console.log(this);
    $(this).prepend('<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 1792 1792" width="35"><path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>');
  });
  
  function ValidateEmail()   
  {  
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById("email").value))
    {  
      return true;  
    }  
      alert("You have entered an invalid email address!")  
      return false;
  }  
  
  $("#submit-form a").click(function(event){ 
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
        
    if(name && email && message) {
      if(ValidateEmail()) {
        var body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0A%0D%0AMessage: " + message;
        window.location.href = "mailto:jamesho.AHS@gmail.com?subject=Message James!&body=" + body;
      }
    } else {
      alert("Please Fill All Required Field");            
    }    
  });
//});