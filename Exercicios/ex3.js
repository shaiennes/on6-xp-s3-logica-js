const readline = require('readline-sync')

const metros = parseFloat(readline.question("Digite um numero: "))

function milimetros (metros){
    return 1000 * metros
}

console.log(`A conversão em milimetros é: ${milimetros(metros)}mm`)
