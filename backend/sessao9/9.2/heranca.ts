interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

// class Animal {
//   constructor(public name:string, protected birthDate:Date) { }

//   get ages() {
//     const timeDiff = Math.abs(
//       Date.now() - new Date(this.birthDate).getTime()
//     )
//     return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   }
// }

// class Mammal extends Animal {
//   walk() {
//     console.log(`${this.name} está andando!`);
//   }
// }

class Bird implements Animal {
  constructor(
    public name:string,
    private birthDate:Date) {}

  get age() {
    const timeDiff = Math.abs(
      Date.now() - new Date(this.birthDate).getTime()
    )
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  fly() {
    console.log(`${this.name} está voando!`);
  }

  // showBirthDate() {
  //   console.log(this.birthDate);
  // }
}

// const tiger = new Mammal(
//   'Tigre',
//   new Date(Date.parse('May 03, 2020')),
// );

// const main = (animal:Animal) => {
//   console.log(animal.age);
// };

// main(tiger);
// tiger.walk();

const parrot = new Bird(
  'Papagaio',
  new Date('Jun 07, 2017'),
);

console.log(parrot.age);
parrot.fly();