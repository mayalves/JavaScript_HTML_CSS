function calcular(){

    var distancia = inputDistancia.value;

    var minutos = inputTempo.value;

    var corrida = 2 + distancia * 1.40 + minutos * 0.26;

    botaoCalcular.innerHTML = ("Sua corrida deu: R$" + corrida.toFixed(2));

}

