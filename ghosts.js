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
}

function updateGhostsLocations(){
    if (pacmanPos.i == undefined || pacmanPos.j == undefined){
        return;
    }
    
    for (let i=0;i<activeGhosts.length; i++){
        let g = activeGhosts[i];
        let cur_dis = checkDistance(g.i,g.j);
        var min_dis = Infinity;
        var min_move = [g.i,g.j];
        //up
        if (g.j > 0 && board[g.i][g.j - 1] != 4 && board[g.i][g.j - 1] != 6 && board[g.i][g.j - 1] != 7 && board[g.i][g.j - 1] != 8 && board[g.i][g.j - 1] != 9 && board[g.i][g.j - 1] != 11) {
            let next_dis = checkDistance(g.i,g.j - 1);
                if (next_dis<min_dis){
                    min_dis = next_dis;

                    min_move = [g.i,g.j-1];
                }
        }
        //down
        if (g.j < 16 && board[g.i][g.j + 1] != 4 && board[g.i][g.j + 1] != 6 && board[g.i][g.j + 1] != 7 && board[g.i][g.j + 1] != 8 && board[g.i][g.j + 1] != 9 && board[g.i][g.j + 1] != 11) {
            let next_dis = checkDistance(g.i,g.j + 1);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    min_move = [g.i,g.j+1];
                }
        }
        //left
        if (g.i > 0 && board[g.i - 1][g.j] != 4 && board[g.i - 1][g.j] != 6 && board[g.i - 1][g.j] != 7 && board[g.i - 1][g.j] != 8 && board[g.i - 1][g.j] != 9 && board[g.i - 1][g.j] != 11) {
            let next_dis = checkDistance(g.i-1,g.j);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    min_move = [g.i-1,g.j];
                }
        }
        //right
        if (g.i < 16 && board[g.i + 1][g.j] != 4 && board[g.i + 1][g.j] != 6 && board[g.i + 1][g.j] != 7 && board[g.i + 1][g.j] != 8 && board[g.i + 1][g.j] != 9 && board[g.i + 1][g.j] != 11) {
            let next_dis = checkDistance(g.i+1,g.j);
                if (next_dis<min_dis){
                    min_dis = next_dis;
                    min_move = [g.i+1,g.j];
                }
        }

        let next_i = min_move[0]
        let next_j = min_move[1]
        ghostMove(g.i,g.j,next_i,next_j,g);

    }
}

function ghostMove(cur_i,cur_j,next_i,next_j,g){

            board[cur_i][cur_j] = g.prevLoc;
            if (board[next_i][next_j]==2){
                resetAfterEat(g.boardNum);
            }
            else{
                g.i = next_i
                g.j = next_j
                g.prevLoc = board[next_i][next_j]
                board[next_i][next_j] = g.boardNum
            }
}

function checkDistance(i,j){
    let iDis = Math.pow((i-pacmanPos.i),2);
    let jDis = Math.pow((j-pacmanPos.j),2);
    let distance = Math.sqrt(iDis+jDis);
    return distance;
}