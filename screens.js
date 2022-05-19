function switchScreens(id){

    $('.screen').hide();
    $("#"+id).show();
    music_play.pause();
    if (interval != undefined && id != "game"){
        window.clearInterval(interval);
    }
    if (ghostInterval != undefined && id != "game"){
        window.clearInterval(ghostInterval);
    }
    if (dollInterval != undefined && id != "game"){
        window.clearInterval(dollInterval);
    }
    
};


window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);