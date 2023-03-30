const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const choosenSimpson = simpsons.find((simpson) => +simpson.id === id)

  if (!choosenSimpson) {
    throw new Error('Id não encontrado');
  }

  return choosenSimpson;
}

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach(e => console.log(e));
};

async function main() {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
};

main();