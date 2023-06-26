interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db:DbCharacter[] = [];

interface IModel {
  create: (character:Character) => Promise<DbCharacter>;
  update: (id:number, character:Character) => Promise<DbCharacter>;
  delete: (id:number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id:number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  create = async (character:Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }

  findIndexById = (id:number) => {
    const index = db.findIndex((c) => c.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }

  update = async (id:number, character:Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  }
  delete = async (id:number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model:IModel) {}

  async create(character:Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async getById(id:number) {
    const findById = await this.model.getById(id);
    return ({ status: 200, data: findById });
  }

  async delete(id:number) {
    const deleteCharacter = await this.model.delete(id);
    return ({ status: 200, data: deleteCharacter });
  }

  async update(id:number, character:Character) {
    const updateCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updateCharacter });
  }
}

class MockedDbModel implements IModel {
  async create(character:Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'toad' };
  }

  async update(id:number, character:Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'egg lay' };
  }

  async delete(id:number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' }
    ]
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  };
}

const A = new CharacterService(new LocalDbModel());
const B = new CharacterService(new MockedDbModel());

A.getAll().then(console.log);
B.getAll().then(console.log);
