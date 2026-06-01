alert("Teste de Velocidade")

const nomeVeiculo1 = prompt("Digite o nome do primeiro veículo: ")
const velVeiculo1 = prompt("Digite a sua velocidade: ")

const nomeVeiculo2 = prompt("Digite o nome do outro veículo: ")
const velVeiculo2 = prompt("Agora digite sua velocidade: ")

if (parseFloat(velVeiculo1) > parseFloat(velVeiculo2)) {
    alert(
    "Velocidades: " +
    "\n" + nomeVeiculo1 + " -> " + velVeiculo1 + " km/h" +
    "\n" + nomeVeiculo2 + " -> " + velVeiculo2 + " km/h" +
    "\n" +
    "\nO " + nomeVeiculo1 + " foi mais rápido!"
)
} else if (parseFloat(velVeiculo2) > parseFloat(velVeiculo1)) {
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