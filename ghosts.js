class ghost{
    constructor(imgsrc, score, corner, boardNum){
        this.img = new Image();
        this.img.src = imgsrc;
        this.score = score;
        this.corner = corner;
        this.i=corner[0];
        this.j=corner[1];
        this.prevLoc = 0;
        this.boardNum = boardNum;
    }


}

function resetGhostLocations(){
    
    for (let i=0;i<activeGhosts.length; i++){
        let g = activeGhosts[i];
        board[g.i][g.j] = g.prevLoc;
        board[g.corner[0]][g.corner[1]] = g.boardNum;
        g.i = g.corner[0];
        g.j = g.corner[1];

    }
    // if(monstersNum==1){
    //     board[1][1]=6;
    // }
    // if(monstersNum==2){
    //     board[1][1]=6;
    //     board[1][15]=7;
    // }
    // if(monstersNum==3){
    //     board[1][1]=6;
    //     board[1][15]=7;
    //     board[15][1]=8;
    // }
    // if(monstersNum==4){
    //     board[1][1]=6;
    //     board[1][15]=7;
    //     board[15][1]=8;
    //     board[15][15]=9;
    // }
}

function updateGhostsLocations(){
    if (pacmanPos.i == undefined || pacmanPos.j == undefined){
        return;
    }
    
    for (let i=0;i<activeGhosts.length; i++){
        let g = activeGhosts[i];
        // let cur_i = g.i;
        // let cur_j = g.j;
        let cur_dis = checkDistance(g.i,g.j);
        console.log("cur_dis" + cur_dis);
        var min_dis = Infinity;
        var min_move = [g.i,g.j];
        // let dis_arr = new Array();
        // let moves_arr = new Array();
        //up
        if (g.j > 0 && board[g.i][g.j - 1] != 4 && board[g.i][g.j - 1] != 6 && board[g.i][g.j - 1] != 7 && board[g.i][g.j - 1] != 8 && board[g.i][g.j - 1] != 9 && board[g.i][g.j - 1] != 10 && board[g.i][g.j - 1] != 11 && board[g.i][g.j - 1] != 12) {
            let next_dis = checkDistance(g.i,g.j - 1);
            console.log("up_dis" + next_dis);

            // if (next_dis<cur_dis){
                if (next_dis<min_dis){
                    min_dis = next_dis;

                    min_move = [g.i,g.j-1];
                }
                // moves_arr.push([g.i,g.j-1])
                // dis_arr.push(next_dis)
            // }
        }
        //down
        if (g.j < 16 && board[g.i][g.j + 1] != 4 && board[g.i][g.j + 1] != 6 && board[g.i][g.j + 1] != 7 && board[g.i][g.j + 1] != 8 && board[g.i][g.j + 1] != 9 && board[g.i][g.j + 1] != 10 && board[g.i][g.j + 1] != 11 && board[g.i][g.j + 1] != 12) {
            let next_dis = checkDistance(g.i,g.j + 1);
            // if (next_dis<cur_dis){
                console.log("down_dis" + next_dis);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    

                    min_move = [g.i,g.j+1];
                }
                // moves_arr.push([g.i,g.j+1])
                // dis_arr.push(next_dis)

            // } 
        }
        //left
        if (g.i > 0 && board[g.i - 1][g.j] != 4 && board[g.i - 1][g.j] != 6 && board[g.i - 1][g.j] != 7 && board[g.i - 1][g.j] != 8 && board[g.i - 1][g.j] != 9 && board[g.i - 1][g.j] != 10 && board[g.i - 1][g.j] != 11 && board[g.i - 1][g.j] != 12) {
            let next_dis = checkDistance(g.i-1,g.j);
            // if (next_dis<cur_dis){
                console.log("left_dis" + next_dis);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    

                    min_move = [g.i-1,g.j];
                }
                // moves_arr.push([g.i-1,g.j])
                // dis_arr.push(next_dis)

            // }
        }
        //right
        if (g.i < 16 && board[g.i + 1][g.j] != 4 && board[g.i + 1][g.j] != 6 && board[g.i + 1][g.j] != 7 && board[g.i + 1][g.j] != 8 && board[g.i + 1][g.j] != 9 && board[g.i + 1][g.j] != 10 && board[g.i + 1][g.j] != 11 && board[g.i + 1][g.j] != 12) {
            let next_dis = checkDistance(g.i+1,g.j);
            // if (next_dis<cur_dis){
                console.log("right_dis" + next_dis);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    

                    min_move = [g.i+1,g.j];
                }
                // moves_arr.push([g.i+1,g.j])
                // dis_arr.push(next_dis)

            // }
        }

        // if (dis_arr.length == 0){ // random step
        //     let move = randomStep();
        //     let next_i = move[0];
        //     let next_j = move[1];
        //     ghostMove(g.i,g.j,next_i,next_j);
        // }
        //else{ //ghost move
            // let bestDisStep = Math.min(dis_arr)
            // console.log(dis_arr)
            // console.log(moves_arr)
            // let bestMove = moves_arr[dis_arr.indexOf(bestDisStep)]
            let next_i = min_move[0]
            let next_j = min_move[1]
            ghostMove(g.i,g.j,next_i,next_j,g);
            // board[g.i][g.j] = g.prevLoc;
            // if (board[next_i][next_j]==2){
            //     resetAfterEat(g.boardNum);
            // }
            // else{
            //     g.prevLoc = board[next_i][next_j]
            //     board[next_i][next_j] = g.boardNum
            //     Draw();
            // }
            
       // }

    }
    console.log(board)
}

function ghostMove(cur_i,cur_j,next_i,next_j,g){

            console.log(g)
            board[cur_i][cur_j] = g.prevLoc;
            if (board[next_i][next_j]==2){
                resetAfterEat(g.boardNum);
            }
            else{
                g.i = next_i
                g.j = next_j
                g.prevLoc = board[next_i][next_j]
                board[next_i][next_j] = g.boardNum
                // Draw();
            }
}

function checkDistance(i,j){
    let iDis = Math.pow((i-pacmanPos.i),2);
    let jDis = Math.pow((j-pacmanPos.j),2);
    let distance = Math.sqrt(iDis+jDis);
    return distance;
}

function randomStep(i,j){
        let moves_arr = new Array();
        //up
        if (j > 0 && board[i][j - 1] != 4 && board[i][j - 1] != 6 && board[i][j - 1] != 7 && board[i][j - 1] != 8 && board[i][j - 1] != 9 && board[i][j - 1] != 10 && board[i][j - 1] != 11) {
            moves_arr.push([i,j-1])
        }
        //down
        if (j < 16 && board[i][j + 1] != 4 && board[i][j + 1] != 6 && board[i][j + 1] != 7 && board[i][j + 1] != 8 && board[i][j + 1] != 9 && board[i][j + 1] != 10 && board[i][j + 1] != 11) {
            moves_arr.push([i,j+1])

        }
        //left
        if (i > 0 && board[i - 1][j] != 4 && board[i - 1][j] != 6 && board[i - 1][j] != 7 && board[i - 1][j] != 8 && board[i - 1][j] != 9 && board[i - 1][j] != 10 && board[i - 1][j] != 11) {
            moves_arr.push([i-1,j])

        }
        //right
        if (i < 16 && board[i + 1][j] != 4 && board[i + 1][j] != 6 && board[i + 1][j] != 7 && board[i + 1][j] != 8 && board[i + 1][j] != 9 && board[i + 1][j] != 10 && board[i + 1][j] != 11) {
            moves_arr.push([i+1,j])

        }
        console.log(moves_arr)
        let rand = RandomInt(0,moves_arr.length-1);
        return moves_arr[rand];
}