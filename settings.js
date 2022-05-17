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

function chooseKey(keyname){
    $(document).keydown(function(event){
        if (keyname == "keyUp"){
            document.getElementById("keyUp").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                $(document).unbind();
                return;
            }
            var char = keyPressed(code);
            document.getElementById("keyUp").value = char;
            document.getElementById("upVal").innerHTML = char;
            chosenKeys["keyUp"]= code;
        }
        else if (keyname == "keyDown"){
            document.getElementById("keyDown").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyUp"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                $(document).unbind();
                return;
            }
            var char = keyPressed(code);
            document.getElementById("keyDown").value = char;
            document.getElementById("downVal").innerHTML = char;
            chosenKeys["keyDown"]= code;

        }
        else if (keyname == "keyLeft"){
            document.getElementById("keyLeft").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyRight"] || code==chosenKeys["keyUp"]){
                alert("You already chose this key, please choose another one :)")
                $(document).unbind();
                return;
            }
            var char = keyPressed(code);
            document.getElementById("keyLeft").value = char;
            document.getElementById("leftVal").innerHTML = char;
            chosenKeys["keyLeft"]= code;

        }
        else if (keyname == "keyRight"){
            document.getElementById("keyRight").value = "";
            var code = event.keyCode;
            if (code==chosenKeys["keyDown"] || code==chosenKeys["keyUp"] || code==chosenKeys["keyLeft"]){
                alert("You already chose this key, please choose another one :)")
                $(document).unbind();
                return;
            }
            var char = keyPressed(code);
            document.getElementById("keyRight").value = char;
            document.getElementById("rightVal").innerHTML = char;
            chosenKeys["keyRight"]= code;

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