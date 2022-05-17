var chosenKeys = {"keyUp":38,"keyDown":40,"keyLeft":37,"keyRight":39};
var monstersNum = 2;
var time = 60;
var foodNum= 50;
var point5 = "#00ffb3";
var point15="#67e5fe";
var point25="#d8a8ff";


function setKey(keyname, settingView, code){
    var char = keyPressed(code);
    document.getElementById(keyname).value = char;
    document.getElementById(settingView).innerHTML = char;
    chosenKeys[keyname]= code;

}


function chooseKey(keyname){
    $(document).keydown(function(event){
        if (keyname == "keyUp"){
            document.getElementById("keyUp").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                setKey("keyUp","upVal",chosenKeys["keyUp"]);
                $(document).unbind();
                return;
            }
            setKey("keyUp","upVal",code);
            // var char = keyPressed(code);
            // document.getElementById("keyUp").value = char;
            // document.getElementById("upVal").innerHTML = char;
            // chosenKeys["keyUp"]= code;
        }
        else if (keyname == "keyDown"){
            document.getElementById("keyDown").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyUp"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                setKey("keyDown","downVal",chosenKeys["keyDown"]);
                $(document).unbind();
                return;
            }
            // var char = keyPressed(code);
            // document.getElementById("keyDown").value = char;
            // document.getElementById("downVal").innerHTML = char;
            // chosenKeys["keyDown"]= code;
            setKey("keyDown","downVal",code);

        }
        else if (keyname == "keyLeft"){
            document.getElementById("keyLeft").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyUp"]){
                alert("You already chose this key, please choose another one :)")
                setKey("keyLeft","leftVal",chosenKeys["keyLeft"]);
                $(document).unbind();
                return;
            }
            // var char = keyPressed(code);
            // document.getElementById("keyLeft").value = char;
            // document.getElementById("leftVal").innerHTML = char;
            // chosenKeys["keyLeft"]= code;
            setKey("keyLeft","leftVal",code);

        }
        else if (keyname == "keyRight"){
            document.getElementById("keyRight").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyUp"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                setKey("keyRight","rightVal",chosenKeys["keyRight"]);
                $(document).unbind();
                return;
            }
            // var char = keyPressed(code);
            // document.getElementById("keyRight").value = char;
            // document.getElementById("rightVal").innerHTML = char;
            // chosenKeys["keyRight"]= code;
            setKey("keyRight","rightVal",code);

        }
        $(document).unbind();
    })
}


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
    document.getElementById(settingView).innerHTML = val;

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
    setKey("keyUp", "upVal", 38);
    setKey("keyDown", "downVal", 40);
    setKey("keyLeft", "leftVal", 37);
    setKey("keyRight", "rightVal", 39);
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