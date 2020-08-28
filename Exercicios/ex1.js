const readline = require('readline-sync')

const celsius = parseInt(readline.question("Digite um numero: "))

function Fahrennheit(celsius){

    return ((celsius * 9 / 5) + 32)
}

Fahrennheit (celsius)
console.log(`A temperatura em Fahrenheit é: ${Fahrennheit (celsius)}`)