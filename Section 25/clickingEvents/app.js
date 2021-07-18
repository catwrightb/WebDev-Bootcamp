const button = document.querySelector('#button2');
let count = 0;

button.onclick = function () {
    count++;
    console.log(count+ " function click");
}

button.onmouseover = mouseOver;

function mouseOver() {
    console.log("mouse over");
}

///////////////

const button1 = document.querySelector('#button3');

button1.addEventListener('click', () =>{
    console.log("mouse clicked button")    
})

button1.addEventListener('pointerover', mouseOvered);

function mouseOvered() {
    console.log("mouse moved over button")
}

