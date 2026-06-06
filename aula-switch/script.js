
//                                                                                            DATA DO MÊS!!!

alert("DATA")

const dia = prompt("Digite o dia de hoje: ")
const mes = prompt("Digite o mês que estamos: ")
const ano = prompt("Digite o ano que estamos: ")

const diaDaSemana = prompt(
    "Digite o Dia da Semana: " +
    "\n" +
    "\nDomingo -> 1" +
    "\nSegunda-feira -> 2" +
    "\nTerça-feira -> 3" +
    "\nQuarta-feira -> 4" +
    "\nQuinta-feira -> 5" +
    "\nSexta-feira -> 6" +
    "\nSábado -> 7" 
)
let diaDaSemanaExtenso = null

switch (diaDaSemana) {
    case "1":
        diaDaSemanaExtenso = "Domingo"
        break
    case "2":
        diaDaSemanaExtenso = "Segunda-feira"
        break
    case "3":
        diaDaSemanaExtenso = "Terça-feira"
        break
    case "4":
        diaDaSemanaExtenso = "Quarta-feira"
        break
    case "5":
        diaDaSemanaExtenso = "Quinta-feira"
        break
    case "6":
        diaDaSemanaExtenso = "Sexta-feira"
        break
    case "7":
        diaDaSemanaExtenso = "Sábado"
        break
    default:
        alert("Opção Invalida!")
}

if (1 <= diaDaSemana <= 7 && 1 <= dia <= 31 && 1 <= mes <= 12 && ano <= 2026) {
    alert(
        "Data de hoje: " + dia + "/" + mes + "/" + ano +
        "\n" +
        "\nDia da semana: " + diaDaSemanaExtenso
    )
} else {
    alert("Você digitou alguma informação errada! Recomeçe.")
}