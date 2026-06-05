alert("Sistema de Cálculo de Dano")

const nomeAtacante = prompt("Digite o nome do Atacante: ")
const danoAtacante = parseFloat(prompt("Agora digite a quantidade de dano desse atacante: "))
let danoCausado = 0

const nomeDefensor = prompt("Digite o nome do Defensor: ")
let hpDefensor = parseFloat(prompt("Digite a quantidade de vida do Defensor: "))
const poderDefesa = parseFloat(prompt("Qual o poder de defesa do defensor: "))
const escudo = prompt("Ele tem um escudo? (SIM/NÃO)")

alert(
    "ATACANTE" +
    "\n" +
    "\nNome: " + nomeAtacante +
    "\nDano: " + danoAtacante +
    "\n" +
    "\nDEFENSOR" +
    "\n" +
    "\nNome: " + nomeDefensor +
    "\nQuantidade de HP: " + hpDefensor +
    "\nPoder de Defesa: " + poderDefesa +
    "\nPossui escudo? " + escudo
)

if (danoAtacante > poderDefesa && escudo == "NÃO") {
    danoCausado = danoAtacante - poderDefesa
} else if (danoAtacante > poderDefesa && escudo == "SIM") {
    danoCausado = (danoAtacante - poderDefesa) / 2
} else if (danoAtacante <= poderDefesa) {
    danoCausado = 0
}

hpDefensor -= danoCausado

alert(
    nomeAtacante + " causou " + danoCausado + " pontos de dano em " + nomeDefensor
)

alert(
    "ATACANTE" +
    "\n" +
    "\nNome: " + nomeAtacante +
    "\nDano: " + danoAtacante +
    "\n" +
    "\nDEFENSOR" +
    "\n" +
    "\nNome: " + nomeDefensor +
    "\nQuantidade de HP: " + hpDefensor +
    "\nPoder de Defesa: " + poderDefesa +
    "\nPossui escudo? " + escudo
)