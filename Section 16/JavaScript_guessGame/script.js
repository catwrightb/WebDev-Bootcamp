const randomNum = Math.floor(Math.random()* 10) + 1;
console.log(randomNum);

let guess = prompt("Enter number guess . . .");

while(parseInt(guess) !== randomNum){
    //let quit = guess.toString();

    if(guess === 'q') break;
    else if(guess !== randomNum){
        guess = prompt("Guess again . . .");
    }
    else if(guess === randomNum){
        break;
    }


};

console.log(randomNum);

//For Of loop

const numbers = [1,2,3,4,5,6,7,8,9];

for (const iterator of numbers) {
    console.log(iterator*iterator);
}

//For In loop = iterates over a object to get the keys

let scores ={
    sam: 90,
    stew: 89,
    lula: 67,
    chris: 78
}

for (const person in scores) {
    console.log(person);
}

for (const person in scores) {
    console.log(`${person} scored ${scores[person]}`)
}