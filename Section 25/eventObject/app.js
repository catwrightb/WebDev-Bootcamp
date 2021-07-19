const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
    console.log(e);
    console.log(e.key);
    console.log(e.code);
})


window.addEventListener('keypress', function (e) {
    console.log(e.key);
})