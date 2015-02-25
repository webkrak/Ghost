$(document).ready(function() {
    $('.google-maps img').fadeTo(3000, 0);
    $('.google-maps iframe').fadeTo(1000, 1);

    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if (!emailReg.test($email) || isEmpty($email)) {
          return false;
      } else {
          return true;
      }
    }

    function isEmpty(str) {
      return (!str || 0 === str.length);
    }

    $(document).on("click", "#subscribe-newsletter", function() {
      var email = $('.newsletter-form input').val();

      if (validateEmail(email)) {
        $.ajax({
          type: "POST",
          data: "signup[email]=" + email,
          url: "https://madmimi.com/signups/subscribe/52024",
          contentType: "application/x-www-form-urlencoded"
        });

        $('.newsletter-form').html('');
        $('.newsletter-form').append('<span class="light success">Email <b>' + email + '</b> został dodany. Dziękujemy!</span>');
        $('.newsletter-form .success').fadeTo(300, 1);
      } else {
        $('.newsletter-form .error').remove();
        $('.newsletter-form .success').remove();
        $('.newsletter-form').append('<span class="error">Niepoprawny adres email</span>');
        $('.newsletter-form .error').fadeTo(300, 1);
      }
    });

});
