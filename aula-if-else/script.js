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