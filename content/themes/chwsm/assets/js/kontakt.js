$(document).ready(function() {
    $('.googleMap img').fadeTo(3000, 0);
    $('.googleMap iframe').fadeTo(1000, 1);

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


    $(document).on("click", ".newsletter a", function() {

        var email = $('.newsletter input').val();

        if (validateEmail(email)) {
            $.ajax({
                type: "POST",
                data: "signup[email]=" + email,
                url: "https://madmimi.com/signups/subscribe/52024",
                contentType: "application/x-www-form-urlencoded"
            });
            $('.newsletter').html('');
            $('.newsletter').append('<span class="light success">email <b>' + email + '</b> został dodany. Dziękujemy!</span>');
            $('.newsletter .success').fadeTo(300, 1);
        } else {

            $('.newsletter .error').remove();
            $('.newsletter .success').remove();
            $('.newsletter').append('<span class="light error">niepoprawny adres email</span>');
            $('.newsletter .error').fadeTo(300, 1);
        }




    });

});