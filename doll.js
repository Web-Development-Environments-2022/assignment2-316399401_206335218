class doll{
    constructor(){
        this.corner = [8,8];
        this.i=this.corner[0];
        this.j=this.corner[1];
        this.prevLoc = 0;
        this.boardNum = 11;
    }
    

}

function dollMove(d){
        console.log(d);
        let step = randomStep(d.i,d.j)
        let next_i = step[0]
        let next_j = step[1]
        board[d.i][d.j] = d.prevLoc;
        if (board[next_i][next_j] == 2){
            if (dollInterval != undefined){
                window.clearInterval(dollInterval)
            }
            score += 50;
            return
        }
        d.i = next_i
        d.j = next_j
        d.prevLoc = board[next_i][next_j]
        board[next_i][next_j] = d.boardNum
}
function randomStep(i,j){
    console.log([i,j]);
    let moves_arr = new Array();
    //up
    if (j > 0 && board[i][j - 1] != 4 && board[i][j - 1] != 6 && board[i][j - 1] != 7 && board[i][j - 1] != 8 && board[i][j - 1] != 9) {
        console.log([i,j-1]);
        moves_arr.push([i,j-1])
    }
    //down
    if (j < 16 && board[i][j + 1] != 4 && board[i][j + 1] != 6 && board[i][j + 1] != 7 && board[i][j + 1] != 8 && board[i][j + 1] != 9) {
        console.log([i,j+1]);
        moves_arr.push([i,j+1])
    }
    //left
    if (i > 0 && board[i - 1][j] != 4 && board[i - 1][j] != 6 && board[i - 1][j] != 7 && board[i - 1][j] != 8 && board[i - 1][j] != 9) {
        console.log([i-1,j]);
        moves_arr.push([i-1,j])

    }
    //right
    if (i < 16 && board[i + 1][j] != 4 && board[i + 1][j] != 6 && board[i + 1][j] != 7 && board[i + 1][j] != 8 && board[i + 1][j] != 9) {
        console.log([i+1,j]);
        moves_arr.push([i+1,j])

    }
    let rand = RandomInt(0,moves_arr.length-1);
    return moves_arr[rand];
}