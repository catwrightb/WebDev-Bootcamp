//methods are functions saved to objects that can be accessed via dot operators

const MyMath = {
    square: function (params) {
        return params*params
    },
    add: function (params, params1) {
        return params+params1
    },
    subtract: function (params, params1) {
        return params-params1
    }
}

//short hand syntax
const MyMathShort = {
    square(params) {
        return params*params
    },
    add(params, params1) {
        return params+params1
    },
    subtract(params, params1) {
        return params-params1
    }
}

/////////////

const square = {
    area(side){
        return side**2;
    },
    perimeter(side){
        return side*4;
    }

}

/////////////////

const cat= {
    name: 'archie',
    color: ['grey', 'white'],
    breed: 'ragdoll',
    hobby: 'crying',

    meow(){
        console.log(`${this.name} says meow`)
    },
    describe(){
        console.log(`${this.name} is a ${this.color[0]} and ${this.color[1]} ${this.breed}.`)
    }

}

////////////////

const hen ={
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        console.log("EGG");
        this.eggCount++;
    }
}


///////////////

    function yell(str) {
        try{
            console.log(str.toUpperCase());
        }catch {

            console.log("param is incorrect");
        
        }
    } 
    

