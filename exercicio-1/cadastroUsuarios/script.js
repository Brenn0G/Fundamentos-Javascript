window.alert("Seja Bem-vindo ao cadastro de usuários!")

let nome = window.prompt("Digite seu primeiro nome: ")

let sobrenome = window.prompt("Digite seu segundo nome: ")

let areaDeEstudo = window.prompt("Digite sua área de estudo: ")

let dataDeNascimento = window.prompt("Digite seu ano de nascimento: ")

let idade = 2026 - parseFloat(dataDeNascimento)

window.alert("Informações informadas: " +
    "\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nÁrea de Estudo: " + areaDeEstudo +
    "\nIdade: " + idade + " anos"
)

let confirmacao = window.confirm("Suas Informações estão corretas?")

if (confirmacao === true) {
    window.alert("Cadastro efetuado com sucesso!")
} else {
    window.alert("Atualize a página e refaça o cadastro!")
}