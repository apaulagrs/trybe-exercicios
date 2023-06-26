class Superclass {
  constructor(public isSuper:boolean = true) { }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor(isSuper:boolean = true) {
    super();
  }
}

const myFunc = (value:Superclass) => {
  return value.sayHello();
};

const sub1 = new Subclass(false);
const super1 = new Superclass(true);

myFunc(sub1);
myFunc(super1);