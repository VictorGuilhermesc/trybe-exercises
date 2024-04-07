const readline = require('readline-sync')

function calculator(peso, altura){

  const imc = peso / (altura * altura)

  return imc
};

function categoria(imc){

  if (imc < 18.5) {
    return "Abaixo do peso"
  } else if (imc >= 18.5 && imc < 24.9 ){
    return 'peso normal'
  } else if (imc >= 25.0 && imc <= 29.9){
    return 'Acima do peso (sobrepeso)'
  } else if (imc >= 30.0 && imc <= 34.9){
    return 'Obesidade grau I'
  } else if (imc >= 35.0 && imc <= 39.9){
    return 'Obesidade grau II'
  } else if (imc > 40.0){
    return 'Obesidade graus III e IV'
  }
}

const weight = readline.questionFloat('Digite o seu peso: ')
const height = readline.questionFloat('digite a sua altura: ')

const resultado = calculator(weight, height);
const category = categoria(resultado)


console.log(resultado);
console.log(category);