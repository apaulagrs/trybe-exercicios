class Aluno {
  private _matricula: number;
  private _nome: string;
  private _prova: number[];
  private _trabalho: number[];

  constructor(matricula: number,
    nome: string,
    prova: number[],
    trabalho: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova = prova;
    this._trabalho = trabalho;
  };
  
  get matricula() { return this._matricula; }
  get nome() { return this._nome; }
  get prova() { return this._prova; }
  get trabalho() { return this._trabalho; }

  somaDasNotas(): number {
    const notaDasProvas = this.prova.reduce((a, p) => a += p);
    const notaDosTrabalhos = this.trabalho.reduce((a, t) => a += t);
    return notaDasProvas + notaDosTrabalhos;
  }

  mediaDasNotas(): number {
    const soma = this.somaDasNotas();
    return soma / 6;
  }
}

// const aluno1 = new Aluno(2548897, 'Alana Fonseca', [4, 10, 6, 7], [8, 10]);
// console.log(aluno1.mediaDasNotas());

class Client {
  constructor(private _name: string) {}

  get name() { return this._name; }
}

class OrderItem {
  constructor(
    private _order: string[],
    private _price: number[],
  ) {}

  get order() { return this._order; }
  get price() { return this._price; }

}

class Order {
  constructor(
    private _client: Client,
    private _orders: OrderItem,
    private _paymment: string,
    private _disccount?: number,
  ) {}

  get client() { return this._client; }
  get orders() { return this._orders; }
  get paymment() { return this._paymment; }
  get disccount() { return this._disccount; }

  totalOrder(): number {
    return this.orders.price.reduce((a, p) => a += p);
  }

  totalOrderWithDisccount(): number {
    if (this.disccount) {
      const totalDisccount = this.totalOrder() * this.disccount;
      return this.totalOrder() - totalDisccount;
    } else {
      return this.totalOrder()
    }
    
  }
}

const client1 = new Client('Alannis Morissete');
const foods = ['Batata Frita', 'Refrigerante', 'Cachorro-quente'];
const prices = [6, 6, 8];
const orderItem1 = new OrderItem(foods, prices);
const orderClient1 = new Order(client1, orderItem1, 'Pix', 0.75);

// console.log(`
//   Cliente: ${orderClient1.client.name}
//   Pedido: ${orderClient1.orders.order.map((e) => ' ' + e)}
//   Total do pedido: R$ ${orderClient1.totalOrder().toFixed(2)}
//   Total com desconto: R$ ${orderClient1.totalOrderWithDisccount().toFixed(2)}`);

class Data {
  constructor(
    private _dia: number,
    private _mes: number,
    private _ano: number,
  ) {
    const dataString = `${_ano}-${_mes}-${_dia}`;
    if (new Date(dataString).getDate() !== _dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = _dia;
      this._mes = _mes;
      this._ano = _ano;
    }
  }

  get dia(): number { return this._dia; }
  get mes(): number { return this._mes; }
  get ano(): number { return this._ano; }

  set dia(value: number) { this._dia = value }
  set mes(value: number) { this._mes = value }
  set ano(value: number) { this._ano = value }

  getData() {
    return `${this.ano}-${this.mes}-${this.dia}`;
  }

  getMonthName() {
    const allMonths = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return allMonths[this.mes - 1];
  }

  isLeapYear(): boolean {
    if (this._ano % 4 > 0) {
      return false;
    } else {
      return true;
    }
  }

  compare(value: Data): number {
    const currentDate = this.getData();
    const dateToCompare = `${value.ano}-${value.mes}-${value.dia}`;

    if (currentDate > dateToCompare) return 1;
    if (currentDate < dateToCompare) return -1;

    return 0;
  }

  format() {}
}

// const test1 = new Data(21, 3, 2023);
// const test2 = new Data(21, 1, 1997);
// console.log(test1.compare(test2));