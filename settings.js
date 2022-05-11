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