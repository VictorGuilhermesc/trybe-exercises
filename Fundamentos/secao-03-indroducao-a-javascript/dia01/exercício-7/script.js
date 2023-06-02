let salarioBruto = prompt('Digite seu salário bruto:')

let salarioLiquido

let descontoInss

let descontoIr

// calcula o inss
if (salarioBruto <= 1556.94){
    descontoInss = (salarioBruto * 8) / 100
    salarioLiquido = salarioBruto - descontoInss

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
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

if(salarioBruto > 2594.93 && salarioBruto < 5189.82){

    descontoIr = 2594.93
}