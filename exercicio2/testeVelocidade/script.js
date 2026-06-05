alert("Teste de Velocidade")

const nomeVeiculo1 = prompt("Digite o nome do primeiro veículo: ")
const velVeiculo1 = parseFloat(prompt("Digite a sua velocidade: "))

const nomeVeiculo2 = prompt("Digite o nome do outro veículo: ")
const velVeiculo2 = parseFloat(prompt("Agora digite sua velocidade: "))

if (velVeiculo1 > velVeiculo2) {
    alert(
    "Velocidades: " +
    "\n" + nomeVeiculo1 + " -> " + velVeiculo1 + " km/h" +
    "\n" + nomeVeiculo2 + " -> " + velVeiculo2 + " km/h" +
    "\n" +
    "\nO " + nomeVeiculo1 + " foi mais rápido!"
)
} else if (velVeiculo2 > velVeiculo1) {
    alert(
    "Velocidades: " +
    "\n" + nomeVeiculo1 + " -> " + velVeiculo1 + " km/h" +
    "\n" + nomeVeiculo2 + " -> " + velVeiculo2 + " km/h" +
    "\n" +
    "\nO " + nomeVeiculo2 + " foi mais rápido!"
) 
} else {
    alert(
    "Velocidades: " +
    "\n" + nomeVeiculo1 + " -> " + velVeiculo1 + " km/h" +
    "\n" + nomeVeiculo2 + " -> " + velVeiculo2 + " km/h" +
    "\n" +
    "\nA velocidade dos dois veículos são iguais"
)
}