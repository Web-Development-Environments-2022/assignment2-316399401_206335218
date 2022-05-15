function switchScreens(id){

    $('div').hide();
    $("#menu").show();
    $("#"+id).show();
    // $("#info").show();
    
};


window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);