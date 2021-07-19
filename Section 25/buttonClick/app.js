
function colorChange() {
    let color = [255,255,255]; //white
    for (let index = 0; index < color.length; index++) {
        let num = Math.floor(Math.random()*255)+0;
        color[index] = num;
    }

    return `rgb(${color[0].toString()}, ${color[1].toString()}, ${color[2].toString()})`;
}

function pngChange() {
    //const img = document.createElement('img');

    const url = "background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const endUrl = ".png)";
    const max = 868;

    let num = Math.floor(Math.random()*max)+1;

    //img.src = url+`${num}`+endUrl;

    return url+`${num}`+endUrl;
}

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.addEventListener('click', function () {
        //btn.style.backgroundColor = colorChange() //for color change random
    
        btn.style = pngChange(); //for backgrounf image chagne random

    })
}

