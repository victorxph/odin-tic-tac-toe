const gameModule = (function(){
    
    let restartBtn = document.querySelector('.restart-btn')
    restartBtn.addEventListener('click', gameBoard.startGame)

    let gameBoardArray = Array.from(document.querySelectorAll('.game-square'));

    let restartGame = function () {

        gameBoardArray.forEach((square) => {

            square.textContent = ""

        })

    }


    function render(){



    }
    
    function Player(){

        this.markSquare = function(){


            
        }
        
        this.win = function(){
            
            
            
        }
        
    }

})();