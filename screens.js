function switchScreens(id){

    $('.screen').hide();
    // $("#menu").show();
    $("#"+id).show();
    // $("#info").show();
    music_play.pause();
    if (interval != undefined && id != "game"){
        window.clearInterval(interval);
    }
    
};


window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);