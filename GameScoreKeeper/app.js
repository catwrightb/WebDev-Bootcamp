let gameText = document.querySelector('#scoreText');

gameText.innerHTML = "0 to 0";

let gameRounds = document.querySelector('#rounds');

gameRounds.addEventListener('change', function (params) {
    gameText.innerHTML = gameRounds.value;
})