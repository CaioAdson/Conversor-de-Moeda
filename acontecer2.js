function transformar(){
    let numeroEmReal = document.getElementById("valor").value;

    let numeroEmDolar = (numeroEmReal / 5.20).toFixed(2);


    let aparecerNaTela = document.getElementById("number").innerHTML = "O valor em Dolar é $ " + numeroEmDolar;

}