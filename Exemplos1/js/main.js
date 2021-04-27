/*
Exemplo de uma pequena página que apresenta botão, redirecionamento para outra página 
e algumas outras pequenas funções.
*/

function clicou(){
    //alert("Obrigada por clicar!");
    document.getElementById("agradecimento").innerHTML="Clique aqui também!";
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/maysaalves/"); // abre em outra janela
    //window.location.href = "https://www.linkedin.com/in/maysaalves/"; // abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigada!";
    //document.getElementById("mousemove").innerHTML = "Obrigada!";
    // alert("Obrigada!");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
Esses são exemplos básicos realizados durante os momentos de estudo
e aprendizado de JavaScript. São Fundamentais para obter uma boa base.
*/

/*
// Declaração de Variáveis
var nome = "Maysa Alves";
var idade = 27;
var idade2 = 10;
var frase = "Homens na tecnologia";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Homens", "Mulheres")); 
*/

/*
// Array
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | ")); 
*/

/*
// Dicionário
var fruta = {nome: "banana", cor: "amarela"};
console.log(fruta.nome);
*/

/*
// Lista de Dicionários
var frutas = [{nome: "banana", cor: "amarela"}, {nome: "melancia", cor: "vermelha"}];
console.log(frutas);
alert(frutas[1].nome); 
*/

/*
// Condicional (If-Else)
var idade = prompt("Qual é a sua idade?");

if (idade >= 18){
    alert("Infelizmente você é maior de idade e já deve ter muitos boletos para pagar!");
}else{
    alert("Parabéns, você ainda é menor de idade! Aproveite sua infância enquanto os boletos não chegam para sua vida adulta!");    
};
*/
/*
// Estrutura de Repetição While
var count = 0;

while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
// Estrutura de Repetição For
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
// Comando para data e hora
var d = new Date();
//alert(d);
alert(d.getHours());
*/

/*
// Função
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
validaIdade(idade);
console.log(validar);
*/