interface Person {
  id:number;
  name:string;
  showIdentification():void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name:string;
  private _id:number;
  private _cpf:string;

  constructor(name:string, cpf:string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }

  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }

  showIdentification(): void { console.log(this.id, this.cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name:string;
  private _id:number;
  private _cnpj:string;

  constructor(name:string, cnpj:string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }

  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }

  showIdentification(): void { console.log(this.id, this.cnpj); }
}

const pp0 = new PhysicalPerson('Jonh', '12345678900');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person:Person):void => {
  person.showIdentification();
}

// showIdentification(pp0);
// showIdentification(pp1);
// showIdentification(lp);


class Contract<T> {
  static _number = 0;
  constructor(public broker:T) {}
  static get number() { return this._number; }
}

const c1:Contract<PhysicalPerson> = new Contract(pp0);
const c2:Contract<LegalPerson> = new Contract(lp);

console.log(c1.broker.cpf);
console.log(c2.broker.cnpj);