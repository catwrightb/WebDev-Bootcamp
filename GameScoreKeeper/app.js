let gameText = document.querySelector('#scoreText');
let gameRounds = document.querySelector('#rounds');
let playerScores = [0,0];

const player1button = document.querySelector('#player1');
const player2button = document.querySelector('#player2');
const restartbutton = document.querySelector('#restart');
const image = document.querySelector('img');

printScore();
disableButtons();

//updates the game rounds from the drop down option
gameRounds.addEventListener('change', gameRoundsUpdate);

restartbutton.addEventListener('click', restartCounter);

player1button.addEventListener('click', function () {
    playerScores[0]++;
    updateScore();

})

player2button.addEventListener('click', function () {
    playerScores[1]++;
    updateScore();
})

function gameRoundsUpdate() {
    if(gameRounds.value === "0"){
        //test.setAttribute("disabled",true );
       disableButtons();
    }
    else{
        enableButtons();
    }
    
}

function restartCounter() {
    for (let i = 0; i < playerScores.length; i++) {
        playerScores[i] = 0;
    }

    gameRounds.selectedIndex = 0;
    printScore();
    gameRoundsUpdate();

}

//disables buttons
function disableButtons() {
    player2button.disabled = true;
    player1button.disabled = true;
}

//enable buttons
function enableButtons() {
    player2button.disabled = false;
    player1button.disabled = false;
}

function updateScore() {
    printScore();

    if(playerScores[0] >= gameRounds.value || playerScores[1] >= gameRounds.value){
        disableButtons();
        let winningText = gameText.innerHTML;

        if(playerScores[0] >= gameRounds.value){
            gameText.innerHTML = winningText +" (Player 1 Wins!)"
        }
        else{
            gameText.innerHTML = winningText +" (Player 2 Wins!)"
        }

    }
}

function printScore() {
    gameText.innerHTML = `${playerScores[0]} : ${playerScores[1]}`
    
}



