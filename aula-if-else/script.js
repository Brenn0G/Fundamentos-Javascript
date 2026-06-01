/*
//                                                                                            VERIFICADOR DE IDADE!!!

alert("Verificador de idade!")

const anoAtual = prompt("Em que ano estamos?")

const anoDeNascimento = prompt("Digite seu ano de nascimento: ")

const idade = parseFloat(anoAtual) - parseFloat(anoDeNascimento)

if (idade >= 21) {
    alert(
        "Você tem " + idade + " anos de idade!" +
        "\nVocê já é um adulto!"
    )
} else if (idade >= 18 && idade < 21) {
    alert(
        "Você tem " + idade + " anos de idade!" +
        "\nVocê já é de maior!"
    )
} else if (idade >= 13 && idade < 18) {
    alert(
        "Você tem " + idade + " anos de idade!" +
        "\nVocê é um adolescente!"
    )
} else if (idade >= 6 && idade < 13) {
    alert(
        "Você tem " + idade + " anos de idade!" +
        "\nVocê é uma criança!"
    )
} else {
    alert(
        "Você tem " + idade + " anos de idade!" +
        "\nVocê é apenas um bebê!"
    )
}

*/

/*

//                                                                                            VERIFICADOR DE POSITIVO E NEGATIVO!!!

alert("Verificador de Número positivo e negativo!")

const numero = prompt("Digite um número:")

if (parseFloat(numero) == 0) {
    alert("Este é o número ZERO!")
} else if (parseFloat(numero) > 0) {
    alert("Este número é POSITIVO!")
} else if (parseFloat(numero) < 0) {
    alert("Este número é NEGATIVO!")
}

*/



//                                                                                            APROVAÇÃO ESCOLAR!!!

/*

alert("Média escolar")

const av1 = prompt("Nota da primeira avaliação:")
const av2 = prompt("Nota da segunda avaliação:")

const media = (parseFloat(av1) + parseFloat(av2)) / 2

if (media == 10) {
    alert(
        "Média = " + media +
        "\nAluno aprovado com NOTA MÁXIMA!"
    )
} else if (media >= 7 && media < 10) {
    alert(
        "Média = " + media +
        "\nAluno aprovado por MÉDIA!"
    )
} else if (media >= 4 && media < 7) {
    alert(
        "Média = " + media +
        "\nAluno na RECUPERAÇÃO!"
    )
} else if (media < 4 && media >= 0) {
    alert(
        "Média = " + media +
        "\nAluno REPROVADO!"
    )
} else {
    alert("Ocorreu um ERRO! Adicione as notas corretamente!")
}

*/

//                                                                                            CADASTRO E LOGIN!!!



alert("Sistema de Cadastro e Login")

alert("Página de Cadastro")

const usuario = prompt("Digite um nome de Usuário: ")
const senha = prompt("Digite uma senha: ")
const confirmaSenha = prompt("Digite a senha novamente: ")

if (confirmaSenha === senha) {
    alert("Cadastro efetuado com SUCESSO!")

    alert("Página de Login")

    const loginUsuario = prompt("Digite seu nome de Usuário: ")
    const loginSenha = prompt("Digite a sua senha: ")

    if (loginUsuario === usuario && loginSenha === senha) {
        alert("Login efetuado com SUCESSO!")
    } else {
        alert("Usuário ou senha inválido!")
    }
} else {
    alert(
        "As senhas devem ser iguais!" +
        "\nAtualize a página e recomeçe o processo!"
    )
}