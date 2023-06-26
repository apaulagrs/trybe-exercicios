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

  myFunc(myParam:number):string {
    return `Soma: ${myParam + this.myNumber}`
  }
}

const somas = new MyClass(26);

// console.log(somas.myNumber);
// console.log(somas.myFunc(4));

interface Logger {
  log(params:string):void;
}

class ConsoleLogger implements Logger {
  log(params:string) { console.log('ConsoleLogger:' + params); }
}

class ConsoleLogger2 implements Logger {
  log(params:string) { console.log('ConsoleLogger2:' + params); }
}

interface Database {
  logger:Logger;

  save(key:string, value:string):void;
}

class ExampleDatabase implements Database {
  constructor(public logger:Logger = new ConsoleLogger()) { }

  save(key:string, value:string):void {
    this.logger.log(`Salvando o ${value} na ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');