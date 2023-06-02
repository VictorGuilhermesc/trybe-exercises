//Este programa calcula o salário de uma pessoa descontando o imposto de reda e o INSS

let salarioBruto = prompt('Digite seu salário bruto:')

let salarioLiquido

let descontoInss

let descontoIr

// calcula o inss
if (salarioBruto <= 1556.94){
    descontoInss = (salarioBruto * 8) / 100
    salarioLiquido = salarioBruto - descontoInss

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    descontoInss = (salarioBruto * 9) / 100
    salarioLiquido = salarioBruto - descontoInss

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    descontoInss = (salarioBruto * 11) / 100
    salarioLiquido = salarioBruto - descontoInss

} else if (salarioBruto > 5189.82){
    descontoInss = salarioBruto - 570.88
    salarioLiquido = salarioBruto - descontoInss

}
//caucula o IR

if (salarioLiquido <= 1903.98) {
    console.log('Você está isento do imposto de renda')

} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){
    salarioLiquido = salarioLiquido - [(salarioLiquido * 7.5) / 100]

} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05){
    salarioLiquido = salarioLiquido - [(salarioLiquido * 7.5) / 100]

} else if (salarioLiquido >= 3751.05 && salarioLiquido <= 4664.68){
    salarioLiquido = salarioLiquido - [(salarioLiquido * 7.5) / 100]

} else if(salarioLiquido > 4664.68){
    salarioLiquido = salarioLiquido - [(salarioLiquido * 7.5) / 100]
}

alert(`O seu salário Liquido é de ${salarioLiquido}`)