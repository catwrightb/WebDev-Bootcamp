let movies = [
    {
        title: 'Alien',
        score: 90
    },
    {
        title: 'Parsite',
        score: 95
    },
    {
        title: 'Die Hard',
        score: 87
    },
    {
        title: 'Jurassic Park',
        score: 89
    }
]


movies.forEach(function(movie) { 
    console.log(`${movie.title}: ${movie.score}/100`)
});

console.log(""); //just a printed space
movies.forEach((movie) => { 
    console.log(`${movie.title}: ${movie.score}/100`)
});


/////////////////

const caps = movies.map(function (name) {
    return `${name.title.toUpperCase()}: ${name.score}/100`
})

console.log(""); //just a printed space

caps.forEach(function (name) {
    console.log(name);
})

//////////
console.log(""); //just a printed space
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const upperCase = fullNames.map(function (name) {
    return { first: name.first.toUpperCase(),
     last: name.last.toUpperCase()}
    
})

upperCase.forEach(function (name) {
    console.log(`${name.first} ${name.last}`);
})


/////////
console.log(""); //just a printed space
const square = (x) => {
    return x*x;
}

const print = () => {
    return "The square is: ";
}

console.log(print(),square(3));

///////////

console.log(""); //just a printed space

const greet= (string)=>{
    return `Hey ${string}!`
}

console.log(greet("Luna"));


////////////
//implicit return 

const greetImplicit= (string)=>(
    `Hey ${string}!`
)

//implicit oneliner return
const greetOneLine =  (string)=> `Hey ${string}!`;

console.log(greetImplicit("Kitty"));
console.log(greetOneLine("Robert"));

//////////////

setTimeout(()=>{
    console.log("Hello");
}, 3000);


////////////

let movies2 = [
    {
        title: 'Alien',
        score: 90
    },
    {
        title: 'Parsite',
        score: 95
    },
    {
        title: 'Princess Diaries',
        score: 67
    },
    {
        title: 'Jumaji',
        score: 65
    },
    {
        title: 'Die Hard',
        score: 87
    },
    {
        title: 'Jurassic Park',
        score: 89
    }
]


let goodMovies = movies2.filter((movie) => {
    return movie.score > 80;
});


//////////

const validUserNames = ['makrads', 'popoi89safe', '12345hgnamsg', 'carries0'];

let underTen = validUserNames.filter((urName) => {
    if(urName.length <= 10){
        return urName;
    }
});

console.log(underTen);


//////

const array = [1, 2, 3, 4, 5];

const isEven = array.some((num) => {
    return num % 2 === 0
});


const someEvens = (num) => {
    return num % 2 === 0
}

console.log(array.some(someEvens));
console.log(isEven);

const total = array.reduce((total, element) =>{
    return total+element;
});



////////////////

function raceResults(gold, silver, ...others) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`EVERYONE ELSE: ${others}`);
}

raceResults('Mark', 'Odin', 'Jane', 'Poppy', 'Pam', 'Dan');


///////////

const scores = [100,93,89,78,77,60];

const [gold,silver,copper, ...others] = scores;

