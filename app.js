var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var curdiv;
var p5color = point5;
var p15color = point15;
var p25color = point25;
var p5num;
var p15num;
var p25num;
var sumCount=0;


$(document).ready(function() {
	context = canvas.getContext("2d");

	Start();
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
	foodDev();
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 17; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
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
			} else {
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
					shape.i = i;
					shape.j = j;
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
	interval = setInterval(UpdatePosition, 250);
}




function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 15 + 1);
	var j = Math.floor(Math.random() * 15 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 15 + 1);
		j = Math.floor(Math.random() * 15 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 18; i++) {
		for (var j = 0; j < 18; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 5) {
				sumCount++;
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = p5color;
				context.fill();
			} else if (board[i][j] == 15) {
				sumCount++;
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = p15color;
				context.fill();
			}  else if (board[i][j] == 25) {
			sumCount++;
			context.beginPath();
			context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
			context.fillStyle = p25color;
			context.fill();
		} 
		 else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}





function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 5) {
		score+=5;
	}
	if (board[shape.i][shape.j] == 15) {
		score+=15;
	}
	if (board[shape.i][shape.j] == 25) {
		score+=25;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) { 
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}
