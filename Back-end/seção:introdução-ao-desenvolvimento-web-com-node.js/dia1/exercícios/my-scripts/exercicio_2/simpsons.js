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


function main() {
  //readAllComAsyncAwait();
  getSimpsonById(3)
  .then((simpson) => console.log(simpson));
}

main();
