// check if user name already exist
$(document).ready(function(){
    localStorage.setItem('k', 'k');

    $.validator.addMethod('validateUsername', function (user, element) {
        val = localStorage.getItem(user)
        pass = localStorage[val]
        if (pass == null){ // there's no username with this name
            return true;
        }
        return false;
    });
});

$(function() {
    $("#form").validate({
        rules: {
        fullname : {
            required: true,
            pattern: /^[a-zA-Z ]+$/
        },
        psw: {
            required: true,
            pattern: /[a-z].*[0-9]|[0-9].*[a-z]\d*/,
            minlength: 6
        },
        email: {
            required: true,
            email: true
        },
        birthday: {
            required: true,
            date: true
        },
        username: {
            required: true,
            validateUsername: true
        }
        },
        messages : {
        fullname: {
            required: "Please enter your full name",
            pattern: "Name should not include numbers"
        },
        psw: {
            required: "Please enter a password",
            pattern: "Your password should contain at least one letter and one number",
            minlength: "Your password should contain at least 6 characters"
        },
        email: {
            required: "Please enter your email",
            email: "The email should be in the format: abc@domain.tld"
        },
        birthday: {
            required: "Please enter your birthday"
        },
        username: {
            required: "Please enter a user name",
            validateUsername: "Username is already exist"
        }
        },
        submitHandler: function(){
            register()
            switchScreens('login');
            document.getElementById("form").reset();
        }
    });
});

function register(){
    let user = document.getElementById("username_register").value;
    let pass = document.getElementById("psw_register").value;
    localStorage.setItem(user,pass);
}