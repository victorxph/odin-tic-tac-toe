// (function(){

//     function createGameBoard(){

//         // let squares = Array.from(document.querySelector('.game-square'));
//         let gameBoard = [0,0,0,0,0,0,0,0,0];
        
//         function win()
        
//     }

// })();
//private --GameBoard
let gameBoard = [0,0,0,0,0,0,0,0,0];
//rm
let Oturn = false;
let playerX = 'x'
let playerO = 'o'
//private --Handler
let rounds = 0;
//rm
if(Oturn === false) {playRound(5, playerX)}
//public --Handler
function playRound(index){

    if(rounds % 2 === 0) {
        
        Oturn = false;
    
    } else {

        Oturn = true;

    };
    rounds++
    console.log(rounds)
    let mark = Oturn === false ? 1 : -1;
    gameBoard.splice(index, 1, mark)
    console.log(gameBoard);

    if(rounds > 4){

        checkRound();

    }

}
//private -- Handler
function checkRound(){

    if(gameBoard[0] + gameBoard[1] + gameBoard[2] === 3 ||
       gameBoard[3] + gameBoard[4] + gameBoard[5] === 3 ||
       gameBoard[6] + gameBoard[7] + gameBoard[8] === 3 ||
       gameBoard[0] + gameBoard[3] + gameBoard[6] === 3 ||
       gameBoard[1] + gameBoard[4] + gameBoard[7] === 3 ||
       gameBoard[2] + gameBoard[5] + gameBoard[8] === 3 ||
       gameBoard[0] + gameBoard[4] + gameBoard[8] === 3 ||
       gameBoard[2] + gameBoard[4] + gameBoard[6] === 3){

            /* return */console.log('X wins')

       } else if(gameBoard[0] + gameBoard[1] + gameBoard[2] === 3 ||
        gameBoard[3] + gameBoard[4] + gameBoard[5] === 3 ||
        gameBoard[6] + gameBoard[7] + gameBoard[8] === 3 ||
        gameBoard[0] + gameBoard[3] + gameBoard[6] === 3 ||
        gameBoard[1] + gameBoard[4] + gameBoard[7] === 3 ||
        gameBoard[2] + gameBoard[5] + gameBoard[8] === 3 ||
        gameBoard[0] + gameBoard[4] + gameBoard[8] === 3 ||
        gameBoard[2] + gameBoard[4] + gameBoard[6] === 3){

            /* return */console.log('O wins')

        }

}
//public -- Handler
function restartGame(){

    gameBoard = [0,0,0,0,0,0,0,0,0];
    rounds = 0;
    Oturn = false;

};