const readline = require('readline-sync')

const Fahrenheit = parseInt(readline.question("Digite um numero: "))

function celsius(Fahrenheit){

    /*formula para converter em Fahrenheit para Celsius

                C = 5/9(F-32)
    */
    return 5 * (Fahrenheit - 32) / 9
}

celsius (Fahrenheit)
console.log(`A temperatura em grau Celsius é: ${celsius(Fahrenheit)}`)