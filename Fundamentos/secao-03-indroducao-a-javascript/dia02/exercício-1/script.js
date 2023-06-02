const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let soma = 0
let media = 0

let oddNumbers = 0

let oddNumbersList = []

for (let index = 0; index < numbers.length; index += 1) {

    console.log(numbers[index])
    soma = soma + numbers[index]


    if (numbers[index] % 2 != 0){

        oddNumbers += 1

        oddNumbersList.push(numbers[index])

    }


}

media = soma / numbers.length

console.log(soma)

console.log(media)

if (media < 20){

    console.log('O valor da média aritmética é menor ou igual a 20')
}

console.log(`Existem ${oddNumbers} ímpares`)

console.log(oddNumbersList)