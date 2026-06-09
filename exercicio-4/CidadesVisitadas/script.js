alert("Sistema de Cidades Visitadas")

const nome = prompt("Qual o seu nome?")

let cidades = ""
let contagem = 0

let confirmacao = prompt("Você já visitou alguma cidade? (SIM/NÃO)")

while (confirmacao === "SIM") {
    let cidade = prompt("Qual o nome da cidade visitada: ")
    cidades += " " + cidade + ", "
    contagem++
    confirmacao = prompt("Você visitou mais alguma cidade?")
}

alert(
    "Nome do turista: " + nome +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas: " + cidades
)