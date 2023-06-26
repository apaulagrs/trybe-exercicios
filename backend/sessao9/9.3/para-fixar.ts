abstract class Character {
  abstract talk():void;
  abstract specialistMove():void;

  static showCharacter(character:Character):void {
    character.talk();
    character.specialistMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private name:string, private move:string) {
    super();
  }

  public talk():void { console.log(`${this.name} falou que ataca de perto!`); }
  public specialistMove():void { console.log(`${this.name} usou ${this.move}`); }
}

class LongRangeCharacter extends Character {
  constructor(private name:string, private move:string) {
    super();
  }
  talk():void { console.log(`${this.name} falou que ataca de longe!`); }
  specialistMove():void { console.log(`${this.name} usou ${this.move}`); }
}

const yoshi = new MeleeCharacter('Yoshi', 'facada');
const samus = new LongRangeCharacter('Samus', 'Kamehame-há');

// yoshi.talk();
// yoshi.specialistMove();

// samus.talk();
// samus.specialistMove();

// Character.showCharacter(yoshi);