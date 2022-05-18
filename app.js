var context;
var pacmanPos = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var curdiv;
var p5color;
var p15color;
var p25color;
var p5num;
var p15num;
var p25num;
var sumCount;
var monsCount;
var pacmanDirection="RIGHT";
var lives ;
var foodCollected;
var music_play = document.getElementById("gameSound");


$(document).ready(function() {
	context = canvas.getContext("2d");
	// Start();
});

function foodDev(){
	p5num = foodNum*0.6;
	p15num = foodNum*0.3;
	p25num = foodNum*0.1;
	p5num = roundNum(p5num,p15num,p25num);
	p15num = roundNum(p15num,p5num,p25num);
	p25num = roundNum(p25num,p5num,p15num);

}

function roundNum(num,num2,num3){
	if (!Number.isInteger(num)){
		let newnum = Math.round(num);
		let newsum = newnum+num2+num3;
		if(newsum<=foodNum){
			num=newnum;
		}
		else{
			num=Math.floor(num);
		}
	}
	return num;
}


function Start() {
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 16*16;
	var food_remain = foodNum;
	sumCount=0;
	foodCollected=0;
	lives=5;
	monsCount=0;
	foodDev();
	var pacman_remain = 1;
	start_time = new Date();
	music_play.loop = true;
	music_play.currentTime = 0;
	music_play.play();
	for (var i = 0; i < 17; i++) {
		board[i] = new Array();
		for (var j = 0; j < 17; j++) {
			if (
				(j == 0) ||
				(j == 16) ||
				(i == 0) ||
				(i == 16) ||
				(j == 0 && i == 8)||
				(j == 1 && i == 8)||
				(j == 2 && i == 8)||
				(j == 3 && i == 8)||
				(j == 2 && i == 2)||
				(j == 14 && i == 14)||
				(j == 2 && i == 4)||
				(j == 2 && i == 5)||
				(j == 2 && i == 6)||
				(j == 3 && i == 6)||
				(j == 2 && i == 10)||
				(j == 2 && i == 11)||
				(j == 2 && i == 12)||
				(j == 2 && i == 14)||
				(j == 3 && i == 10)||
				(j == 4 && i == 2)||
				(j == 4 && i == 4)||
				(j == 4 && i == 12)||
				(j == 4 && i == 14)||
				(j == 5 && i == 2)||
				(j == 5 && i == 4)||
				(j == 5 && i == 5)||
				(j == 5 && i == 6)||
				(j == 5 && i == 7)||
				(j == 5 && i == 9)||
				(j == 5 && i == 10)||
				(j == 5 && i == 11)||
				(j == 5 && i == 12)||
				(j == 5 && i == 14)||
				(j == 6 && i == 2)||
				(j == 6 && i == 4)||
				(j == 6 && i == 12)||
				(j == 6 && i == 14)||
				(j == 7 && i == 2)||
				(j == 7 && i == 6)||
				(j == 7 && i == 7)||
				(j == 7 && i == 9)||
				(j == 7 && i == 10)||
				(j == 7 && i == 14)||
				(j == 8 && i == 4)||
				(j == 8 && i == 6)||
				(j == 8 && i == 10)||
				(j == 8 && i == 12)||
				(j == 9 && i == 2)||
				(j == 9 && i == 4)||
				(j == 9 && i == 6)||
				(j == 9 && i == 7)||
				(j == 9 && i == 8)||
				(j == 9 && i == 9)||
				(j == 9 && i == 10)||
				(j == 9 && i == 12)||
				(j == 9 && i == 14)||
				(j == 10 && i == 2)||
				(j == 10 && i == 14)||
				(j == 11 && i == 2)||
				(j == 11 && i == 4)||
				(j == 11 && i == 6)||
				(j == 11 && i == 7)||
				(j == 11 && i == 8)||
				(j == 11 && i == 9)||
				(j == 11 && i == 10)||
				(j == 11 && i == 12)||
				(j == 11 && i == 14)||
				(j == 12 && i == 4)||
				(j == 12 && i == 7)||
				(j == 12 && i == 8)||
				(j == 12 && i == 9)||
				(j == 12 && i == 12)||
				(j == 13 && i == 2)||
				(j == 13 && i == 4)||
				(j == 13 && i == 5)||
				(j == 13 && i == 11)||
				(j == 13 && i == 12)||
				(j == 13 && i == 14)||
				(j == 14 && i == 2)||
				(j == 14 && i == 7)||
				(j == 14 && i == 8)||
				(j == 14 && i == 9)||
				(j == 14 && i == 14)||
				(j == 15 && i == 4)||
				(j == 15 && i == 5)||
				(j == 15 && i == 11)||
				(j == 15 && i == 12)

			) {
				board[i][j] = 4;
			}else if(j==1 && i==1 && monsCount<monstersNum){
				board[i][j]=6 //green
				monsCount++;
			} 	else if (j==15 && i==15 && monsCount<monstersNum){
					board[i][j]=7 //blue
					monsCount++;
				}
				else if (j==15 && i==1 && monsCount<monstersNum){
					board[i][j]=8 //"orange"
					monsCount++;
				}
				else if (j==1 && i==15 && monsCount<monstersNum){
					board[i][j]=9 //"red"
					monsCount++;
				}
			else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					sumCount++;
					food_remain--;
					if (sumCount<=p5num){
						board[i][j] = 5;
					}
					else if (sumCount>p5num && sumCount<=p15num+p5num){
						board[i][j] = 15;
					}
					else{
						board[i][j] = 25;
					}
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					pacmanPos.i = i;
					pacmanPos.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {
		sumCount++;
		var emptyCell = findRandomEmptyCell(board);
		if (sumCount<=p5num){
			board[emptyCell[0]][emptyCell[1]] = 5;
		}
		else if (sumCount>p5num && sumCount<=p15num+p5num){
			board[emptyCell[0]][emptyCell[1]] = 15;
		}
		else{
			board[emptyCell[0]][emptyCell[1]] = 25;
		}
		
		food_remain--;
	}
	// add clock to board
	var c = findRandomEmptyCell(board);
	board[c[0]][c[1]] = 10;

	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	if (pacmanPos == undefined){
		pacmanPos = new Object();
	}
	interval = setInterval(UpdatePosition, 80);
	console.log(board);
}




function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 16 + 1);
	var j = Math.floor(Math.random() * 16 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 16 + 1);
		j = Math.floor(Math.random() * 16 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[chosenKeys["keyUp"]]) {
		return 1;
	}
	if (keysDown[chosenKeys["keyDown"]]) {
		return 2;
	}
	if (keysDown[chosenKeys["keyLeft"]]) {
		return 3;
	}
	if (keysDown[chosenKeys["keyRight"]]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	lblCurUser.value = current_username;
	lblLives.value = lives.toString();
	p5color = point5;
	p15color = point15;
	p25color = point25;
	for (var i = 0; i < 17; i++) {
		for (var j = 0; j < 17; j++) {
			var center = new Object();
			center.x = i * 40 + 20;
			center.y = j * 40 + 20;
			if (board[i][j] == 2) {
				pacmanPos.i = i;
				pacmanPos.j = j;
				var pacmanImg = new Image();
				if (pacmanDirection == "RIGHT"){
					pacmanImg.src = "Pac-Man-right.png"
				}
				if (pacmanDirection == "UP"){
					pacmanImg.src = "Pac-Man-up.png"
				}
				if (pacmanDirection == "DOWN"){
					pacmanImg.src = "Pac-Man-down.png"
				}
				if (pacmanDirection == "LEFT"){
					pacmanImg.src = "Pac-Man-left.png"
				}
				
    			context.drawImage(pacmanImg, center.x - 20, center.y - 20, 40, 40);
			} else if (board[i][j] == 5) {
				sumCount++;
				context.beginPath();
				context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
				context.fillStyle = p5color;
				context.fill();
			} else if (board[i][j] == 15) {
				sumCount++;
				context.beginPath();
				context.arc(center.x, center.y, 9, 0, 2 * Math.PI); // circle
				context.fillStyle = p15color;
				context.fill();
			}  else if (board[i][j] == 25) {
			sumCount++;
			context.beginPath();
			context.arc(center.x, center.y, 7, 0, 2 * Math.PI); // circle
			context.fillStyle = p25color;
			context.fill();
			} 
			else if (board[i][j] == 4) {
					context.beginPath();
					context.rect(center.x - 20, center.y - 20, 40, 40);
					context.fillStyle = "grey"; //color
					context.fill();
			}
			else if (board[i][j] == 9){ //red
				var redImg = new Image();
				redImg.src = "red-ghost.png";
				context.drawImage(redImg,center.x-20,center.y-20,40,40);
			}
			else if (board[i][j] == 6){ //green
				var greenImg = new Image();
				greenImg.src = "green-ghost.png"
    			context.drawImage(greenImg, center.x - 20, center.y - 20, 40, 40);

				
			}
			else if (board[i][j] == 7){ //blue
				var blueImg = new Image();
				blueImg.src = "blue-ghost.png"
    			context.drawImage(blueImg, center.x - 20, center.y - 20, 40, 40);

			}
			else if (board[i][j] == 8){ //orange
				var orangeImg = new Image();
				orangeImg.src = "orange-ghost.png"
    			context.drawImage(orangeImg, center.x - 20, center.y - 20, 40, 40);
			}
			else if (board[i][j] == 10){ //clock
				var clockImg = new Image();
				clockImg.src = "clock.png"
    			context.drawImage(clockImg, center.x - 20, center.y - 20, 40, 40);
			}
		}
	}
}





function UpdatePosition() {
	if (pacmanPos.i==undefined || pacmanPos.j==undefined){
		return;
	}
	board[pacmanPos.i][pacmanPos.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) { //up
		if (pacmanPos.j > 0 && board[pacmanPos.i][pacmanPos.j - 1] != 4) {
			pacmanPos.j--;
			pacmanDirection = "UP";
		}
	}
	if (x == 2) { //down
		if (pacmanPos.j < 16 && board[pacmanPos.i][pacmanPos.j + 1] != 4) {
			pacmanPos.j++;
			pacmanDirection = "DOWN";
		}
	}
	if (x == 3) { //left
		if (pacmanPos.i > 0 && board[pacmanPos.i - 1][pacmanPos.j] != 4) {
			pacmanPos.i--;
			pacmanDirection = "LEFT";
		}
	}
	if (x == 4) { //right
		if (pacmanPos.i < 16 && board[pacmanPos.i + 1][pacmanPos.j] != 4) {
			pacmanPos.i++;
			pacmanDirection = "RIGHT";
		}
	}
	if (board[pacmanPos.i][pacmanPos.j] == 5) {
		score+=5;
		foodCollected++;
	}
	if (board[pacmanPos.i][pacmanPos.j] == 15) {
		score+=15;
		foodCollected++;

	}
	if (board[pacmanPos.i][pacmanPos.j] == 25) {
		score+=25;
		foodCollected++;

	}
	// if (board[pacmanPos.i][pacmanPos.j] == 10){
	// 	time_elapsed += 30;
	// }
	if (board[pacmanPos.i][pacmanPos.j] == 6 || board[pacmanPos.i][pacmanPos.j] == 7 || board[pacmanPos.i][pacmanPos.j] == 8 || board[pacmanPos.i][pacmanPos.j] == 9){
		if (board[pacmanPos.i][pacmanPos.j] == 6){
			lives--;
			score -= 30;
		}
		lives--;
		if(lives==0){
			window.alert("Looser!!")
			music_play.pause();
		}
		score-=10;
		if (score < 0){
			score = 0;
		}

	}
	board[pacmanPos.i][pacmanPos.j] = 2;
	var currentTime = new Date();
	time_elapsed = time - (currentTime - start_time) / 1000;
	time_elapsed = Math.floor(time_elapsed);


	if (time_elapsed == 0 || foodCollected == foodNum) { 
		window.clearInterval(interval);
		window.alert("Game completed");
		music_play.pause();
		// add return becuase time continue
		time_elapsed = 0;
	} else {
		Draw();
	}
}

function togglePlay() {
	if (music_play.paused) {
		music_play.play();
	}
	else {
		music_play.pause();
	}
};


