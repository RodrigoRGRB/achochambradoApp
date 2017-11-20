function calcular() {
    var valor = document.getElementById("campo").value;
    var titulo = document.getElementById("titulo").value;
    var fonte = document.getElementById("fonte").value;

    var tabela = titulo;
    tabela += '<table id="tabelacss">';
    tabela += '<thead><tr><th>i</th><th>ROL</th><th>f<sub>i</sub></th><th>fr<sub>i</sub></th><th>F<sub>i</sub></th><th>FR<sub>i</sub></th></tr></thead>';
    for (w = 0; w < valor; w++) {
        tabela += '<tr><td><input type="text" id="linha' + w + '" value="' + (w + 1) + '" disabled></td><td><input type="text" id="campo' + w + '"></td><td><input type="text" id="f' + w + '"></td><td><input type="text" id="fr' + w + '" disabled></td><td><input type="text" id="ff' + w + '" disabled></td><td> <input type="text" id="frr' + w + '" disabled></td></tr>"';


    }
    document.getElementById('botaoTabela').innerHTML = '<br><button onclick="gerarTabela()">Gerar Estatistica</button>';
    document.getElementById('campoTabela').innerHTML = tabela;

}

function gerarTabela() {
    var valor = document.getElementById("campo").value;
    var titulo = document.getElementById("titulo").value;
    var fonte = document.getElementById("fonte").value;
    
    var tabela = titulo+'<br>';
    tabela += '<table id="tabelacss">';
    tabela += '<thead><tr><th>i</th><th>ROL</th><th>f<sub>i</sub></th><th>fr<sub>i</sub></th><th>F<sub>i</sub></th><th>FR<sub>i</sub></th></tr></thead>';
    var contar = contarValores();
    var soma = 0;
    var somafri = 0;
    for (w = 0; w < valor; w++) {

        numero = document.getElementById("f" + w).value;
        rol = document.getElementById("campo" + w).value;

        fri = numero / contar;

        somafri = fri + somafri;
        soma = soma + eval(numero);
        console.log(soma);


        tabela += '<tr><td><input type="text" id="linha' + w + '" value="' + (w + 1) + '" disabled></td><td><input type="text" id="campo' + w + '" value="' + rol + '"></td><td><input type="text" id="f' + w + '" value="' + numero + '"></td><td><input type="text" id="fr' + w + '" value="' + fri + '" disabled></td><td><input type="text" id="ff' + w + '" value="' + soma + '" disabled></td><td> <input type="text" id="frr' + w + '" disabled value="' + somafri + '"></td></tr>"';


        fri = 0;
    }



    tabela += '<tr><td></td><td></td><td><input type="text" id="somatorio" value="' + contar + '" disabled></td><td><input type="text" value="' + somafri + '" disabled></td><td></td><td> </td></tr></table>'+fonte;




    document.getElementById('campoTabela').innerHTML = tabela;
}




function contarValores() {
    var contar = 0;
    var valor = document.getElementById("campo").value;

    for (w = 0; w < valor; w++) {
        contar = contar + eval(document.getElementById("f" + w).value);
    }

    return contar;

}
