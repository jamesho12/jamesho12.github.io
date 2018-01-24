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
    if(window.screen.width < 768)
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
      if(($(this).attr("id") === "skills")) {
        $(this).addClass("alt-icon");                    
      } else if($(this).attr("id") === "portfolio") {      
        $(this).addClass("alt-icon"); 
        $("#resume-icon").prepend('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="150px" id="Layer_1" style="enable-background:new 0 0 48 48;" version="1.1" viewBox="0 0 48 48" width="150px" xml:space="preserve"><g><path d="M37.054,9.945c0.55,0,1,0.45,1,1v28.67c0,0.55-0.45,1-1,1h-25.3   c-0.55,0-1-0.45-1-1V6.995c0-0.55,0.45-1,1-1h21.21c0.55,0,1,0.45,1,1v1.95c0,0.55,0.45,1,1,1H37.054z" style="fill:none;stroke:#fff;stroke-miterlimit:10;"/></g><rect height="6" style="fill:none;stroke:#fff;stroke-miterlimit:10;" width="6" x="14.154" y="9.615"/><rect height="0.84" style="fill:#fff;" width="9.958" x="22.123" y="9.102"/><rect height="0.84" style="fill:#fff;" width="11.875" x="22.133" y="11.362"/><rect height="0.84" style="fill:#fff;" width="11.875" x="22.133" y="13.331"/><rect height="0.938" style="fill:#fff;" width="11.916" x="22.217" y="15.116"/><rect height="0.938" style="fill:#fff;" width="21.75" x="13.633" y="20.949"/><rect height="0.938" style="fill:#fff;" width="21.75" x="13.717" y="23.199"/><rect height="0.938" style="fill:#fff;" width="21.75" x="13.717" y="25.448"/><rect height="0.938" style="fill:#fff;" width="21.75" x="13.801" y="36.281"/><path d="M38.123,9.894c0.33,0.32,0.444,0.738,0.256,0.933l0,0c-0.188,0.194-0.609,0.092-0.939-0.228  l-3.925-3.807c-0.329-0.32-0.444-0.738-0.256-0.932l0,0c0.188-0.195,0.61-0.093,0.939,0.227L38.123,9.894z" style="fill:#fff;"/></svg>');
      }
    } else if (i%2 === 0) {
      if($(this).attr("id") === "portfolio") {      
        $("#resume-icon").prepend('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="150px" id="Layer_1" style="enable-background:new 0 0 48 48;" version="1.1" viewBox="0 0 48 48" width="150px" xml:space="preserve"><g><path d="M37.054,9.945c0.55,0,1,0.45,1,1v28.67c0,0.55-0.45,1-1,1h-25.3   c-0.55,0-1-0.45-1-1V6.995c0-0.55,0.45-1,1-1h21.21c0.55,0,1,0.45,1,1v1.95c0,0.55,0.45,1,1,1H37.054z" style="fill:none;stroke:#231F20;stroke-miterlimit:10;"/></g><rect height="6" style="fill:none;stroke:#231F20;stroke-miterlimit:10;" width="6" x="14.154" y="9.615"/><rect height="0.84" style="fill:#231F20;" width="9.958" x="22.123" y="9.102"/><rect height="0.84" style="fill:#231F20;" width="11.875" x="22.133" y="11.362"/><rect height="0.84" style="fill:#231F20;" width="11.875" x="22.133" y="13.331"/><rect height="0.938" style="fill:#231F20;" width="11.916" x="22.217" y="15.116"/><rect height="0.938" style="fill:#231F20;" width="21.75" x="13.633" y="20.949"/><rect height="0.938" style="fill:#231F20;" width="21.75" x="13.717" y="23.199"/><rect height="0.938" style="fill:#231F20;" width="21.75" x="13.717" y="25.448"/><rect height="0.938" style="fill:#231F20;" width="21.75" x="13.801" y="36.281"/><path d="M38.123,9.894c0.33,0.32,0.444,0.738,0.256,0.933l0,0c-0.188,0.194-0.609,0.092-0.939-0.228  l-3.925-3.807c-0.329-0.32-0.444-0.738-0.256-0.932l0,0c0.188-0.195,0.61-0.093,0.939,0.227L38.123,9.894z" style="fill:#231F20;"/></svg>');
      } else if($(this).attr("id") === "contact") {        
        $("input, textarea, #submit").css("border", "2px inset gray");
      }
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