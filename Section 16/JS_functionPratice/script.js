
let dieRolls = [];

dieRolls[0] = rollDie(6);
dieRolls[1] = rollDie(9);
dieRolls[2] = rollDie(10);
dieRolls[3] = rollDie(12);

printDieRoll();

function rollDie(dieSide) {
    
    return roll = Math.floor(Math.random()* dieSide) +1;
    
}


function printDieRoll() {
    for (let index = 0; index < dieRolls.length; index++) {
        console.log(dieRolls[index]);
    }
}

///////////////

rant();

function rant(message = "I hate beets"){
    for (let index = 0; index < 3; index++) {
        console.log(`${message.toUpperCase()}`);
    }
}

///////////////

function test(first, middle, last, formal) {
    if(formal){
        return first.toString() +" "+ middle.toString() + last.toString();
    }
    else return first.toString();

}

function greet(formal, first, middle, last) {
    var name = test(first, middle, last, formal);

    if(formal){
        return ("Good afternoon " + name + ".");
    }
    else return ("Hey " + name + ".");
}

var result = greet(false, "alice", "jane", "smith");
console.log(result);


//////////////////

let string = "Hello there";
let number = 5;

repeat(string, number);

function repeat(str, times) {
    for (let index = 0; index < times; index++) {
        console.log(str);
    }
}

////////////////////

isSnakeEyes(1,1);
isSnakeEyes(4,8);

function isSnakeEyes(num1, num2) {
    if(num1 === 1 && num2===1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes!");
    }

}
