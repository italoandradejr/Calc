function calculateInvestment() {
    var valorInicial = parseFloat(document.getElementById('valorInicial').value);
    var depositoMensal = parseFloat(document.getElementById('depositoMensal').value) || 0;
    var taxaDeJurosAnual = parseFloat(document.getElementById('taxaDeJurosAnual').value);
    var periodoAnos = parseFloat(document.getElementById('periodoAnos').value);


    //var valorFuturo = valorInicial;

    const PeriodoConvertidoMes = periodoAnos * 12


    //1 - var equivalenciaTaxaMes = ((Math.pow(1 + (taxaDeJurosAnual/100), periodoAnos/12) - 1) * 100).toFixed(4)

   //2 - const equivalenciaTaxaMes = (1 + taxaDeJurosAnual / 100) ** (1 / 12) - 1

   const equivalenciaTaxaMes = Math.pow(1 + taxaDeJurosAnual / 100, 1 / 12) - 1
   

    console.log("taxa de equivalente: " + equivalenciaTaxaMes)

    var calcJurosCompostos = valorInicial;
    for (var i = 0; i < PeriodoConvertidoMes; i++) {
        calcJurosCompostos = (calcJurosCompostos + depositoMensal) * (1 + equivalenciaTaxaMes);
    }


    console.log("valor: " + calcJurosCompostos)
 

    document.getElementById('valorFuturo').innerText = 'O valor futuro do investimento será de R$ ' + calcJurosCompostos.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
}


//https://www.mobills.com.br/calculadoras/conversor-de-taxas-de-juros-anual-para-mensal/

//https://investnews.com.br/ferramentas/calculadoras/calculadora-de-juros-compostos/#:~:text=A%20f%C3%B3rmula%20dos%20juros%20compostos,(1%20%2B%20i)%5Et

  