const button = document.querySelector('#button');
const container = document.querySelector('#container');

// button.addEventListener('click', function () {
//     container.style.backgroundColor = colorChange();
//     //e.stopPropagation();
// })

button.addEventListener('click', function (e) {
    container.style.backgroundColor = colorChange();
    e.stopPropagation();
})

container.addEventListener('click', function () {
    container.classList.toggle('container');

})


function colorChange() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    //let color = `rgb(${r}, ${g}, ${b})`;

    return `rgb(${r}, ${g}, ${b})`;
}