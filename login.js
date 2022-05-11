var current_username;
var users = {"k": "k"};

// check if password belong to user
$(document).ready(function(){
    $.validator.addMethod('validateUser', function (psw, element) {
        u = document.getElementById("username").value;
        p = users[u]
        if(p != psw){
            return false;
        }
        return true;
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
            document.getElementById("loginform").reset();
        }
    });
});

// save the current user
function login(){
    let u = document.getElementById("username").value;
    current_username = u;
}
