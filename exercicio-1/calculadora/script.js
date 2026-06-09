window.alert("Bem-vindo a calculadora de 4 operações!")

window.alert("Você irá digitar dois números e irá descobrir o resultado das operações: Soma; Subtração; Multiplicação; Divisão."
)

let numero1 = window.prompt("Digite o primeiro número: ")
let numero2 = window.prompt("Digite o segundo número: ")

// Soma: 
let resultadoSoma = parseFloat(numero1) + parseFloat(numero2)

//Subtração: 
let resultadoSub = parseFloat(numero1) - parseFloat(numero2)

// Multiplicação: 
let resultadoMulti = parseFloat(numero1) * parseFloat(numero2)

// Divisão: 
let resultadoDiv = parseFloat(numero1) / parseFloat(numero2)

window.alert("O resultado das Operações foi: " +
    "\n" +
    "\nSoma: " + resultadoSoma +
    "\nSubtração: " + resultadoSub +
    "\nMultiplicação: " + resultadoMulti +
    "\nDivisão: " + resultadoDiv
)

window.alert("Se quiser fazer com outros números basta atualizar a página!")