function calculateInvestment() {
    var valorInicial = parseFloat(document.getElementById('valorInicial').value);
    var depositoMensal = parseFloat(document.getElementById('depositoMensal').value) || 0;
    var taxaDeJurosAnual = parseFloat(document.getElementById('taxaDeJurosAnual').value);
    var periodoAnos = parseFloat(document.getElementById('periodoAnos').value);

    const converteAnoEmMes = periodoAnos * 12
    const converteTaxaAnualParaMeses = taxaDeJurosAnual / 12

    var valorFuturo = valorInicial;

    console.log(converteTaxaAnualParaMeses)

    for (var i = 0; i < converteAnoEmMes; i++) {

        valorFuturo = ((valorFuturo + depositoMensal) * (1 + converteTaxaAnualParaMeses / 100)) - 0.72


        console.log(valorFuturo)
    }

    document.getElementById('valorFuturo').innerText = 'O valor futuro do investimento será de R$ ' + valorFuturo.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
}

