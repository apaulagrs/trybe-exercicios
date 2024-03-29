class Animals {
  declare turns:number;

  public makeSound(sound:string) {
    console.log(`Som emitido: ${sound}`);
  }
}

class Dogs extends Animals {
  numberTurn(turns:number) {
    return turns;
  }

  makeSound(sound:string):void {
    const times = this.numberTurn(5);
    console.log(`Som emitido: ${sound}, ${times} vezes`);
  }
}

class Birds extends Animals {
  declare specie:string;

  makeSound(sound:string) {
    this.specie = 'pássaro';
    console.log(`Som emitido pelo ${this.specie} é ${sound}`);
  }
}


// const dogs = new Dogs();
// dogs.makeSound('au au au');

// const birds = new Birds();
// birds.makeSound('fiu fiu fiu fiu fiu');

class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}

class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}

class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);