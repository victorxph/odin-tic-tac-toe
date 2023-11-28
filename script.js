const gameModule = (function(){

    let gameBoard = {

        fields: [0,0,0,0,0,0,0,0,0],
        exposeFields: function(){

            return gameBoard.fields

        }

    }

    function Player(mark){

        this.mark = mark;
        this.turn = false;

    }

    let playerX = new Player('x');
    let playerO = new Player('o');

    let handler = {

        rounds: 0,

        playRound: function (index) {

            if (handler.rounds % 2 === 0) {

                playerO.turn = false;
                
            } else {
                
                playerO.turn = true;

            };
            handler.rounds++
            console.log('rounds: ',handler.rounds)
            let mark = playerO.turn === false ? 1 : -1;
            gameBoard.fields.splice(index, 1, mark)
            console.log(gameBoard.fields);

            if (handler.rounds > 4) {

                handler.checkRound();

            }

            render();

        },

        checkRound: function checkRound(){

            let winner;

            if (gameBoard.fields[0] + gameBoard.fields[1] + gameBoard.fields[2] === 3 ||
                gameBoard.fields[3] + gameBoard.fields[4] + gameBoard.fields[5] === 3 ||
                gameBoard.fields[6] + gameBoard.fields[7] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[0] + gameBoard.fields[3] + gameBoard.fields[6] === 3 ||
                gameBoard.fields[1] + gameBoard.fields[4] + gameBoard.fields[7] === 3 ||
                gameBoard.fields[2] + gameBoard.fields[5] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[0] + gameBoard.fields[4] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[2] + gameBoard.fields[4] + gameBoard.fields[6] === 3) {

                    winner = playerX;
                    /* return */console.log('winner > ', playerX)
                    
                } else if (gameBoard.fields[0] + gameBoard.fields[1] + gameBoard.fields[2] === 3 ||
                gameBoard.fields[3] + gameBoard.fields[4] + gameBoard.fields[5] === 3 ||
                gameBoard.fields[6] + gameBoard.fields[7] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[0] + gameBoard.fields[3] + gameBoard.fields[6] === 3 ||
                gameBoard.fields[1] + gameBoard.fields[4] + gameBoard.fields[7] === 3 ||
                gameBoard.fields[2] + gameBoard.fields[5] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[0] + gameBoard.fields[4] + gameBoard.fields[8] === 3 ||
                gameBoard.fields[2] + gameBoard.fields[4] + gameBoard.fields[6] === 3) {
                    
                    winner = playerO;
                    /* return */console.log('winner > ', playerO)

            }

            return null

        },

        restartGame: function restartGame(){

            gameBoard = [0,0,0,0,0,0,0,0,0];
            handler.rounds = 0;
            playerO.turn = false;
        
        }
    
    }

    let squares = Array.from(document.querySelectorAll('.game-square'));
    squares.forEach(square => square.addEventListener('click', handler.playRound))

    function render(){

        for(i = 0; i <= gameBoard.fields.length; i++){
            
            if(gameBoard.fields !== 0){
                
            squares[i].textContent = gameBoard.fields[i] === 1 ? 'X' : 'O';

        }
    }
    }
    
    return {

        playRound: handler.playRound,
        restartGame: handler.restartGame,
        exposeFields: gameBoard.exposeFields,
        squares: squares

    }

})();

// let gameBoard = [0,0,0,0,0,0,0,0,0];
//rm
// let Oturn = false;
// let playerX = 'x'
// let playerO = 'o'
//private --Handler
// let rounds = 0;
//rm
// if(Oturn === false) {playRound(5, playerX)}
//public --Handler
// function playRound(index){

//     if(rounds % 2 === 0) {
        
//         Oturn = false;
    
//     } else {

//         Oturn = true;

//     };
//     rounds++
//     console.log(rounds)
//     let mark = Oturn === false ? 1 : -1;
//     gameBoard.splice(index, 1, mark)
//     console.log(gameBoard);

//     if(rounds > 4){

//         checkRound();

//     }

// }
//private -- Handler
// function checkRound(){

//     if(gameBoard[0] + gameBoard[1] + gameBoard[2] === 3 ||
//        gameBoard[3] + gameBoard[4] + gameBoard[5] === 3 ||
//        gameBoard[6] + gameBoard[7] + gameBoard[8] === 3 ||
//        gameBoard[0] + gameBoard[3] + gameBoard[6] === 3 ||
//        gameBoard[1] + gameBoard[4] + gameBoard[7] === 3 ||
//        gameBoard[2] + gameBoard[5] + gameBoard[8] === 3 ||
//        gameBoard[0] + gameBoard[4] + gameBoard[8] === 3 ||
//        gameBoard[2] + gameBoard[4] + gameBoard[6] === 3){

//             /* return */console.log('X wins')

//        } else if(gameBoard[0] + gameBoard[1] + gameBoard[2] === 3 ||
//         gameBoard[3] + gameBoard[4] + gameBoard[5] === 3 ||
//         gameBoard[6] + gameBoard[7] + gameBoard[8] === 3 ||
//         gameBoard[0] + gameBoard[3] + gameBoard[6] === 3 ||
//         gameBoard[1] + gameBoard[4] + gameBoard[7] === 3 ||
//         gameBoard[2] + gameBoard[5] + gameBoard[8] === 3 ||
//         gameBoard[0] + gameBoard[4] + gameBoard[8] === 3 ||
//         gameBoard[2] + gameBoard[4] + gameBoard[6] === 3){

//             /* return */console.log('O wins')

//         }

// }
// //public -- Handler
// function restartGame(){

//     gameBoard = [0,0,0,0,0,0,0,0,0];
//     rounds = 0;
//     Oturn = false;

// };