import Flute from './flute';

export default class Musician {
  constructor(public name:string, public flute:Flute = new Flute('Minha flauta')) {}

  play():void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão de melodias`,
    );
  }
}
const flute = new Flute('Minha flauta');
const musician = new Musician('Márcia', flute);
musician.play();