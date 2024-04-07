const fs = require('fs').promises;

function readAllComAsyncAwait() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent);
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

      strings.forEach((string) =>  console.log(string))
    })
    .catch((err) => {
      console.error(`Erro ao ler o arquivo: ${err.message}`);
    });
}

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpsons) => Number(simpsons.id) === id)
  if(!chosenSimpson){
    throw new Error ('id não encontrado');

  }
  return chosenSimpson
}


async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpson = JSON.parse(fileContent);
  const famylyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpson
  .filter((simpson) => famylyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))

}

async function addNelsonFamily(){
  const fileContent = await fs
  .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs
  .readFile('./simpsonsFamily.json', 'utf-8')
  const simpson = JSON.parse(fileContent);
  
  const simpsonWithoutNelson = simpson.filter((simpson) => simpson.id !== '8');

  const simpsonWithMaggie = simpsonWithoutNelson
  .concat([{ id: '15', name: 'Maggie Simpson'}]);

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonWithMaggie));
}

function main() {
  //readAllComAsyncAwait();
  //getSimpsonById(3)
  //.then((simpson) => console.log(simpson));
  //filterSimpsons();
  //createSimpsonsFamily()
  //addNelsonFamily()
  replaceNelson()
}

main();
