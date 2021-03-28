$(document).ready(function() {
    $('#create-button').on('click', function() {
      if(createUsernameValid == true && createPasswordValid == true && createEmailValid == true) {
        $('form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "fast");
   }
    }); 
  
    $('.message a').on('click', function() {
      $('form').animate({
      height: "toggle",
          opacity: "toggle"
  }, "fast");
    });
  });