alert("Verificador de idade!")

const anoDeNascimento = prompt("Digite seu ano de nascimento: ")

const idade = 2026 - parseFloat(anoDeNascimento)

if (idade >= 18) {
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