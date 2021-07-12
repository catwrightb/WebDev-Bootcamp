
let result1 = multiply(2,3);
let result2 = multiply(9,9);
let result3 = multiply(5,4);

function multiply(num1, num2) {
    return num2 *num1;
}

/////////////

isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);

function isShortsWeather(temperature) {
    if(temperature < 75){
        return false
    }
    else{
        return true;
    }
}

/////////////

let one = lastElement([3,5,7]);
let two= lastElement([1]);
let three = lastElement([]);

function lastElement(params) {
    if(params.length > 0 ){
       return params[params.length-1];
    }
    else{
        return null;
    }
}

console.log(one);
console.log(two);
console.log(three);

///////////////////

let word =capitalize("eggplant");
console.log(word);

function capitalize(str) {
    let firstLetter = str.slice(0,1).toUpperCase();
    console.log(firstLetter);
    let otherLetters = str.slice(1);
    console.log(otherLetters);

    return firstLetter.concat(otherLetters);


}

////////////////
let t1 = sum([1,2,3]);
let t2= sum([2,2,2,2]);
let t3 = sum([50,50,1]);

function sum(params) {
    if(params.length > 0 ){
        let total = 0;

       for (let index = 0; index < params.length; index++) {
        
           total += params[index];
           
       }

       return total;
    }
    else{
        return null;
    }
}

console.log(t1);
console.log(t2);
console.log(t3);

//////////////


let day1 = returnDay(2);
let day2 = returnDay(0);
let day3 = returnDay(7);

function returnDay(input) {

    console.log(input);
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"];


    for (let index = 1; index <= daysOfWeek.length; index++) {
        if (input === index){
            return daysOfWeek[index-1];
        }
    
    }
    return null;
    
}

console.log(day1);
console.log(day2);
console.log(day3);

//////////////

let answer1 = square(4);
let answer2 = square(3);

console.log(answer1);
console.log(answer2);

function square(input) {
    return input*input;
}


////////////////////

//passing a function as a parameter to a function

function callTwice(func) {
    func();
    func();
}


function printFunction() {
    console.log(Math.floor(Math.random()*6)+1);
}


callTwice(printFunction);

///////////////

//returning a function from a function and saving it to a variable which can then call then 
// results of the function

function randomFunction() {
    let random = Math.floor(Math.random()*6)+1;

    if(random > 0.5){
        return function () {
            console.log(":) Happy return");
        }

    }else{
        return function () {
            console.log(":( Sad return");
        }
    }

}

let res1 = randomFunction();
let res2 =randomFunction();


//////////////////

//from this function we can make many functions that we can save as variables
function factoryFunction(min, max) {
    
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = factoryFunction(0,18);

isChild(12);

isChild(22);

const isAdult = factoryFunction(19,50);

isAdult(34);

///////////