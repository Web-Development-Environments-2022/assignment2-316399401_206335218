var current_username;

// check if password belong to user
$(document).ready(function(){
    localStorage.setItem('k', 'k');

    $.validator.addMethod('validateUser', function (psw, element) {
        let u = document.getElementById("username_login").value;
        let p = localStorage.getItem(u)
        if(p == psw){
            return true;
        }
        return false;
    });
});


$(function() {
    $("#loginform").validate({
        rules: {
        username : {
            required: true
        },
        psw: {
            required: true,
            validateUser: true
        }
        },
        messages : {
            username: {
                required: "Please enter your username"
            },
            psw: {
                required: "Please enter a password",
                validateUser: "Password or Username are incorrect"
            }
        },
        submitHandler: function(){
            login();
            switchScreens('settings');
            resetSetting();
            document.getElementById("loginform").reset();
        }
    });
});

// save the current user
function login(){
    let u = document.getElementById("username_login").value;
    current_username = u;
}
