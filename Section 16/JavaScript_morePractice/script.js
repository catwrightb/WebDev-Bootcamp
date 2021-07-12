
const days = ["monday", "tuesday", "wednesday", "thursday","friday","saturday", "sunday"];


for (let index = 0; index < 2; index++) {
    let randNum = Math.floor(Math.random()* 6) + 0;
    console.log("The random day is "+ days[randNum]);
}

console.log(days.length);

for (let index = 0; index < (days.length); index++) {
    console.log(days[index]);
    
}

console.log(days);

days[2] = "TEST";
console.log(days);

let month = ["FEB", "MARCH", "APRIL"];

const week = days.concat(month);

console.log(week);

// for (let i = 25; i >= 0 ; i-=5) {
//     console.log(i);
// }

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length ; i++) {
   
    console.log(people[i].toUpperCase());
}


const names = [
    ['poppy','odin','archie'],
    ['sam','todd','bee'],
    ['tim','pam','mark'], 
];

for (let i = 0; i <= names.length-1 ; i++) {

    const row = names[i];
    
    for (let k = 0; k <= row.length-1 ; k++) {
   
        console.log(row[k]);
    }
    
}


let num = 10;
while(num >= 0){
    if(num === 10){
        console.log("Count Down Start . . .");
    }

    console.log(num);

    if(num === 0){
        console.log("Count Down Done!");
    }
    
    num--;
}

//

const password = "Kitten";

let guess = prompt("Enter password . . .");

while(guess !== password){
    guess = prompt("Enter password . . .");

};

console.log("CONGRATS");








