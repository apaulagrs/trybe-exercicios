const fs = require('fs').promises;

// async function getSimpsonById(id) {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const choosenSimpson = simpsons.find((simpson) => +simpson.id === id)

//   if (!choosenSimpson) {
//     throw new Error('Id não encontrado');
//   }

//   return choosenSimpson;
// }

// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
//   strings.forEach(e => console.log(e));
// };

// async function filterSimpsons() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const newArray = simpsons.filter((s) => s.id !== '10' && s.id !== '6');

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// };

// async function createSimpsonsFamily() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const familyIds = [1, 2, 3, 4];
//   const simpsonsFamily = simpsons.filter((s) => familyIds.includes(+s.id));

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// };

/* async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent)

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}; */

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpsonsWithoutNelson = simpsons.filter((s) => s.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  await replaceNelson();
};

main();