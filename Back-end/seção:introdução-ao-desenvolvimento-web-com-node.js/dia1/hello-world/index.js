const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual a sua idade? ');

console.log(`Hello, ${name}! You are ${idade} years old!`);

