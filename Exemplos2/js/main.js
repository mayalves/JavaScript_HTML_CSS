/*
Exemplo para saber quantos dias uma pessoa já viveu.


var idade = prompt("Por favor, informe sua idade:");
document.write("Você tem ", idade, " anos e viveu ", idade * 365, " dias");

*/

/*Exemplo para calcular o valor do trajeto de uma corrida de carro (por exemplo, Uber):
R$2.00 + distância percorrida (km) * R$1.40 (para cada quilômetro) + minutos (permanecidos dentro do carro)* R$0.26
*/

var distancia = prompt("Qual foi a distância percorrida em Km?");

var minutos = prompt("Quantos minutos você permaneceu dentro do carro?");


var corrida = 2 + distancia * 1.40 + minutos * 0.26;

alert("Sua corrida deu: R$" + corrida.toFixed(2));

