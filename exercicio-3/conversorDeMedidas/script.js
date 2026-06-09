alert("Conversor de medidas")

let medidaM = parseFloat(prompt("Digite um valor em metros (m): "))

const opcao = parseFloat(prompt(
    "Digite a opção que deseja: " +
    "\n" +
    "\n1 - milímetro (mm)" +
    "\n2 - centímetro (cm)" +
    "\n3 - decímetro (dm)" +
    "\n4 - decâmetro (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
))

switch (opcao) {
    case 1:
        const medidaMM = medidaM * 1000
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em milímetros: ${medidaMM} MM`
        )
        break
    case 2:
        const medidaCM = medidaM * 100
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em centímetros: ${medidaCM} CM`
        )
        break
    case 3:
        const medidaDM = medidaM * 10
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em decímetros: ${medidaDM} DM`
        )
        break
    case 4:
        const medidaDAM = medidaM / 10
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em decâmetros: ${medidaDAM} DAM`
        )
        break
    case 5:
        const medidaHM = medidaM / 100
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em hectômetros: ${medidaHM} HM`
        )
        break
    case 6:
        const medidaKM = medidaM / 1000
        alert(
            `Valor em metros: ${medidaM} M` +
            `\nValor em quilômetros: ${medidaKM} KM`
        )
        break
    default:
        alert("Opção inválida")
        break
}