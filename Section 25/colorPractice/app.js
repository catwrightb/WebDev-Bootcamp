
const colorText = document.querySelector('#colorText');
const button = document.querySelector('#button');
document.body.style.textAlign = "center";

let color = [255,255,255]; //white

button.addEventListener('click', colorChange);

function colorChange() {
    for (let index = 0; index < color.length; index++) {
        let num = Math.floor(Math.random()*255)+0;
        color[index] = num;
    }

    setColorString();
    setBackground();
}


function setColorString() {
    stringColor = `rgb(${color[0].toString()}, ${color[1].toString()}, ${color[2].toString()})`;

}

function setBackground() {
    document.body.style.backgroundColor = stringColor;
    colorText.innerHTML = stringColor;
}

