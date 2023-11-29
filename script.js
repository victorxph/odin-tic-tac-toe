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
        index: 0,

        playRound: function(index) {
            
            if(gameBoard.fields[index] !== 0) return;

            if (handler.rounds % 2 === 0) {

                playerO.turn = false;
                
            } else {
                
                playerO.turn = true;

            };

            handler.rounds++

            console.log('rounds: ',handler.rounds)

            let mark = playerO.turn === false ? 1 : -1;

            gameBoard.fields.splice(index, 1, mark);

            console.log('playRound > ', gameBoard.fields);

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
                    this.win(playerX);
                    
                } else if (gameBoard.fields[0] + gameBoard.fields[1] + gameBoard.fields[2] === -3 ||
                gameBoard.fields[3] + gameBoard.fields[4] + gameBoard.fields[5] === -3 ||
                gameBoard.fields[6] + gameBoard.fields[7] + gameBoard.fields[8] === -3 ||
                gameBoard.fields[0] + gameBoard.fields[3] + gameBoard.fields[6] === -3 ||
                gameBoard.fields[1] + gameBoard.fields[4] + gameBoard.fields[7] === -3 ||
                gameBoard.fields[2] + gameBoard.fields[5] + gameBoard.fields[8] === -3 ||
                gameBoard.fields[0] + gameBoard.fields[4] + gameBoard.fields[8] === -3 ||
                gameBoard.fields[2] + gameBoard.fields[4] + gameBoard.fields[6] === -3) {
                    
                    winner = playerO;
                    console.log('winner > ', winner)
                    this.win(playerO);

                }

            return null

        },

        win: function(winner){

            modal.classList.remove('closed');
            modal.showModal();
            turnDiv.classList.add('closed')

        },

        restartGame: function restartGame(){

            gameBoard.fields = [0,0,0,0,0,0,0,0,0];
            handler.rounds = 0;
            playerO.turn = false;
            modal.classList.add('closed')
            turnDiv.classList.remove('closed')
            modal.close()
            render();
        
        }
    
    }

    //DOM

    let turnDiv = document.querySelector('.turn-div');

    let squares = Array.from(document.querySelectorAll('.game-square'));
    squares.forEach(square => square.addEventListener('click',() => { 
        handler.index =  Number(square.id.slice(-1));
        handler.playRound(handler.index)
    }));

    let restartBtn = document.querySelector('.restart-btn');
    restartBtn.addEventListener('click', handler.restartGame);

    let dialogRestartBtn = document.querySelector('.dialog-restart-btn');
    dialogRestartBtn.addEventListener('click', handler.restartGame);

    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('.close-dialog');
    closeModal.addEventListener('click', () => {
        modal.close();
        modal.classList.add('closed')
    });

    function render(){

        if(playerO.turn === false && handler.rounds != 0){

            turnDiv.textContent = "O's turn"
            
        } else {
            
            turnDiv.textContent = "X's turn"

        }

        for(i = 0; i < gameBoard.fields.length; i++){

            switch();
            
            if(gameBoard.fields[i] === 1){

                squares[i].textContent = 'X';
                
            } else if(gameBoard.fields[i] === -1){
                
                squares[i].textContent = 'O';
                
            } else if(gameBoard.fields[i] === 0){
                
                squares[i].textContent = '';

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