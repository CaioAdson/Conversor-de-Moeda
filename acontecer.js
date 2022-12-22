function converter(){
    let valorEmDolar = document.getElementById("valor").value;

    let valorEmReal = (valorEmDolar * 5.20).toFixed(2);

    let valorH2 = document.getElementById("mostrar").innerHTML = "O valor em Real é R$ " + valorEmReal ;

}


