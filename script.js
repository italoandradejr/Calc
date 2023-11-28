function calculateInvestment() {
    var valorInicial = parseFloat(document.getElementById('valorInicial').value);
    var depositoMensal = parseFloat(document.getElementById('depositoMensal').value) || 0;
    var taxaDeJurosAnual = parseFloat(document.getElementById('taxaDeJurosAnual').value) / 12;
    var periodoAnos = parseFloat(document.getElementById('periodoAnos').value);

    const converteAnoEmMes = periodoAnos * 12

    var valorFuturo = valorInicial;

    for (var i = 0; i < converteAnoEmMes; i++) {

        valorFuturo = (valorFuturo + depositoMensal) * (1 + taxaDeJurosAnual /100)

        console.log(valorFuturo)
    }

    document.getElementById('valorFuturo').innerText = 'O valor futuro do investimento será de R$ ' + valorFuturo.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
}

