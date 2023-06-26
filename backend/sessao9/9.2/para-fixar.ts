class Superclass {
  constructor(public isSuper:boolean = true) { }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (value:Superclass) => {
  console.log(value.isSuper ? 'Super!' : 'Sub!');
};

const sub1 = new Subclass();
const super1 = new Superclass();

// myFunc(sub1);
// myFunc(super1);

interface MyInterface{
  myNumber: number;
  myFunc(myParam:number):string;
}

class MyClass implements MyInterface {
  constructor(public myNumber:number = 0) { }

  myFunc(myParam: number): string {
    return `Soma: ${myParam + this.myNumber}`
  }
}

const somas = new MyClass(26);

console.log(somas.myNumber);
console.log(somas.myFunc(4));