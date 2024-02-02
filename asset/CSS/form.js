// When the browser is ready...
$(function() {
    // validate
    $("#contact").validate({
        // Set the validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message",
        },
        // submit handler
        submitHandler: function(form) {
          //form.submit();
           $(".message").show();
           $(".message").fadeOut(4500);
        }
    });
  });

  $(function(){
    $("#js-hamburger-menu, .navigation__link").on("click",function(){
        $(".navigation").slideToggle(500);
        $(".hamburger-menu").toggleClass("hamburger-menu--open");
    });
});