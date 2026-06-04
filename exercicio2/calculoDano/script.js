alert("Sistema de Calculo de Dano")

const nomeAtacante = prompt("Digite o nome do Atacante: ")
const danoAtacante = parseFloat(prompt("Agora digite a quantidade de dano desse atacante: "))
let danoCausado = null

alert(
    "ATACANTE" +
    "\n" +
    "\nNome: " + nomeAtacante +
    "\nDano: " + danoAtacante
)

const nomeDefensor = prompt("Digite o nome do Defensor: ")
const hpDefensor = parseFloat(prompt("Digite a quantidade de vida do Defensor: "))
const poderDefesa = parseFloat(prompt("Qual o poder de defesa do defensor: "))
const escudo = confirm("Ele tem um escudo?")

alert(
    "DEFENSOR" +
    "\n" +
    "\nNome: " + nomeDefensor +
    "\nQuantidade de HP: " + hpDefensor +
    "\nPoder de Defesa: " + poderDefesa +
    "\nPossui escudo? " + escudo
)

if (danoAtacante > poderDefesa && escudo === false) {
    danoCausado = danoAtacante - poderDefesa
} else if (danoAtacante > poderDefesa && escudo === true) {
    danoCausado = (danoAtacante - poderDefesa) / 2
} else if (danoAtacante <= poderDefesa) {
    danoCausado = 0
}

const hpAtual = hpDefensor - danoCausado

alert(
    "ATACANTE" +
    "\n" +
    "\nNome: " + nomeAtacante +
    "\nDano: " + danoAtacante +
    "\n" +
    "\nQuantidade de HP inicial: " + hpDefensor +
    "\nPoder de defesa: " + poderDefesa + " VS Dano do atacante: " + danoAtacante + 
    "\n" +
    "\nDano Causado: " + danoCausado +
    "\n" +
    "\nDEFENSOR" +
    "\n" +
    "\nNome: " + nomeDefensor +
    "\nQuantidade de HP Atual: " + hpAtual +
    "\nPoder de Defesa: " + poderDefesa +
    "\nPossui escudo? " + escudo
)