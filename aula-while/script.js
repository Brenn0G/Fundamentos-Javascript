alert("Caixa eletrônico - BGWEB");

const usuarioAdmin = "admin";
const senhaAdmin = "admin12345";
let saldo = 10000;

let usuario = "";
let senha = "";

while (usuario !== usuarioAdmin || senha !== senhaAdmin) {
  usuario = prompt("Digite seu Usuário: ");
  senha = prompt("Digite sua senha: ");

  if (usuario !== usuarioAdmin || senha !== senhaAdmin) {
    alert("Usuário ou senha incorretos!");
  }
}

alert("Login efetuado com sucesso!");

let menu = "";

while (menu !== 4) {
  menu = parseFloat(
    prompt(
      "Banco BGWEB" +
        "\n" +
        "\nEscolha uma das opções: " +
        "\n1 - Consultar Saldo" +
        "\n2 - Depositar" +
        "\n3 - Sacar" +
        "\n4 - Sair",
    ),
  );

  switch (menu) {
    case 1:
        alert(`Seu saldo é R$${saldo}`);
        break;
    case 2:
        const deposito = parseFloat(prompt("Qual o valor do deposito?"));

        if (deposito > 0) {
            saldo += deposito;
            alert("Deposito realizado com sucesso!" + `\nNovo saldo: R$${saldo}`);
        } else {
            alert("Valor inválido");
        }
        break;
    case 3:
        const saque = parseFloat(prompt("Qual o valor do saque?"));

        if (saque > saldo) {
            alert("Saldo insuficiente!");
        } else if (saque === 0) {
            alert("Valor inválido!");
        } else {
            saldo -= saque;
            alert(
                "Saque efetuado com sucesso!" +
                `\nNovo Saldo: R$${saldo}`
            );
        }
        break;
    case 4:
        alert("Saindo do sistema...");
        break;
    default:
        alert("Opção inválida!");
  }
}

alert("Saindo em segurança...");
alert("Volte sempre!");
