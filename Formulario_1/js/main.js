function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado, ' + nome.value + '. Seus dados foram encaminhados com sucesso!');
    }

}