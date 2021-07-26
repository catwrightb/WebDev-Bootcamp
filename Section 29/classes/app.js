class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    beep() {
        console.log(`The ${this.make} ${this.model} says beep beep`)
    }
    honk() {
        console.log(`The ${this.make} ${this.model} says honk honk`)
    }
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  const car2 = new Car('Ford', 'Exploer', 1990);
  

  class Color{
      constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = [r, g, b] ;
      }

      colorName(){
        return `${this.name}`
      }

      rbg(){
          return `rgb(${this.colorName()})`;
      }

      rgba(a=1.0){
        return `rgba(${this.colorName()},${a})`;
    }
  }

  let color1 = new Color(154,62,84);
