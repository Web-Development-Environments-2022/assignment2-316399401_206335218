class doll{
    constructor(){
        this.corner = [8,8];
        this.i=corner[0];
        this.j=corner[1];
        this.prevLoc = 0;
        this.boardNum = 11;
    }
}

function dollMove(){

    let step = randomStep(this.i,this.j)
    let next_i = step[0]
    let next_j = step[1]
    board[this.i][this.j] = this.prevLoc;
    // if (board[next_i][next_j]==2){
    //     resetAfterEat(g.boardNum);
    // }
    // else{
    this.i = next_i
    this.j = next_j
    this.prevLoc = board[next_i][next_j]
    board[next_i][next_j] = this.boardNum
        // Draw();
    // }
}

function randomStep(i,j){
    let moves_arr = new Array();
    //up
    if (j > 0 && board[i][j - 1] != 4 && board[i][j - 1] != 6 && board[i][j - 1] != 7 && board[i][j - 1] != 8 && board[i][j - 1] != 9) {
        moves_arr.push([i,j-1])
    }
    //down
    if (j < 16 && board[i][j + 1] != 4 && board[i][j + 1] != 6 && board[i][j + 1] != 7 && board[i][j + 1] != 8 && board[i][j + 1] != 9) {
        moves_arr.push([i,j+1])

    }
    //left
    if (i > 0 && board[i - 1][j] != 4 && board[i - 1][j] != 6 && board[i - 1][j] != 7 && board[i - 1][j] != 8 && board[i - 1][j] != 9) {
        moves_arr.push([i-1,j])

    }
    //right
    if (i < 16 && board[i + 1][j] != 4 && board[i + 1][j] != 6 && board[i + 1][j] != 7 && board[i + 1][j] != 8 && board[i + 1][j] != 9) {
        moves_arr.push([i+1,j])

    }
    console.log(moves_arr)
    let rand = RandomInt(0,moves_arr.length-1);
    return moves_arr[rand];
}