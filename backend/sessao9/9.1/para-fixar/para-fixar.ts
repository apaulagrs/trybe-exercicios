class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size= s;
    this._resolution = r;
    this._connections = c;
  }

  turnOn():void {
    console.log(`${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}, ${this._connectedTo}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(connections: string | undefined) {
    if (this._connections.find((c) => c === connections)) {
      this._connectedTo = connections;
    } else {
      console.log('Sorry, connection unavailable!'); 
    }
  }
}

const tv1 = new TV('LG', 65, '4K', ['HDMI', 'Wifi', 'Bluetooth']);

tv1.connectedTo = 'Wifi';
console.log(tv1.connectedTo);



// class Person {
//   name: string;
//   private _weight: number;
//   private _age: number;
//   readonly height: number;

//   constructor(name: string, height: number, weight: number, age: number) {
//     this.name = name;
//     this._weight = weight;
//     this._age = age;
//     this.height = height;
//   }

// // esta sintaxe permite acessar o valor retornado via person.getWeight()
//   getWeight() {
//     return this._weight;
//   }

// // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
//   get age() {
//     return this._age;
//   }

// // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// // mesmo que esteja ocorrendo uma validação internamente
//   set age(newValue: number) {
//     if (newValue >= 0 && newValue < 200) {
//       this._age = newValue;
//     }
//   }

//   birthday() {
//     this._age += 1;
//   }

// }

// const p1 = new Person('Maria', 171, 58, 19);
// const p2 = new Person('João', 175, 66, 18);

// p1.height = 1;
