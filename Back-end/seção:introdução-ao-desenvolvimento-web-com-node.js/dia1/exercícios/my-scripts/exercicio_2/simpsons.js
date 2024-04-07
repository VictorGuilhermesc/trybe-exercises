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

function main() {
  readAllComAsyncAwait();
}

main();
