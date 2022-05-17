var chosenKeys = {"keyUp":38,"keyDown":40,"keyLeft":37,"keyRight":39}
var monstersNum = 2;
var time = 60;
var foodNum= 50;
var point5 = "#00ffb3";
var point15="#67e5fe";
var point25="#d8a8ff";


// function chooseKey(keyname){
//     document.addEventListener("keydown", function(event){
//         document.getElementById(keyname).value = "";
//         var code = event.keyCode;
//         var char = keyPressed(code);
//         document.getElementById(keyname).value = char;
//         chosenKeys[keyname]= code;
        
//     })
    
//     return;
    
// }


function keyPressed(keycode){
    if (keycode==38){
        return "⇧";
    }
    else if (keycode==40){
        return "⇩";
    }
    else if (keycode==37){
        return "⇦";
    }
    else if (keycode==39){
        return "➪";
    }
    else{ return event.key;}
}

function changedValue(range, label, theVar,settingView){
    var val = document.getElementById(range).value
    document.getElementById(label).innerHTML = val;
    window[theVar] = val;
    document.getElementById(settingView).value = val;

}

function changedColor(colorIn, theVar,settingView){
    var val = document.getElementById(colorIn).value
    window[theVar] = val;
    document.getElementById(settingView).style.backgroundColor = val;

}

document.getElementById("realstart").onclick = function(){
    switchScreens("game");
    Start();
}

function change(){
    soundOn = document.getElementById("soundOn-img");
    soundOff = document.getElementById("soundOff-img");
    if(soundOff.style.display == "block"){
        soundOff.style.display = "none";
        soundOn.style.display = "block";
        gameSound.muted = true;
    }
    else{
        soundOff.style.display = "block";
        soundOn.style.display = "none";
        gameSound.muted = false;
    }
}

function randomVal(){
    chosenKeys['keyUp'] = 38;
    // keyPressed(chosenKeys['keyUp']);
    chosenKeys['keyDown'] = 40;
    // keyPressed(chosenKeys['keyDown']);
    chosenKeys['keyLeft'] = 37;
    // keyPressed(chosenKeys['keyLeft']);
    chosenKeys['keyRight'] = 39;
    // keyPressed(chosenKeys['keyRight']);
    monstersNum = RandomInt(1,4);
    document.getElementById("monsnum").value = monstersNum;
    document.getElementById("chosenmonsnum").innerHTML = monstersNum;
    foodNum = RandomInt(50,90);
    document.getElementById("foodnum").value = foodNum;
    document.getElementById("chosenfoodnum").innerHTML = foodNum;
    point5 = RandomColor();
    document.getElementById("5pointscolor").value = point5;
    point15 = RandomColor();
    document.getElementById("15pointscolor").value = point15;
    point25 = RandomColor();
    document.getElementById("25pointscolor").value = point25;
    time = RandomInt(60,900);
    document.getElementById("time").value = time;
    document.getElementById("chosentime").innerHTML = time;
}

function RandomColor() {
    var color = '#';
    color += Math.floor(Math.random()*16777215).toString(16)
    return color;
}

function RandomInt(x,y) {
    minVal = Math.ceil(x);
    maxVal = Math.floor(y);
    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}