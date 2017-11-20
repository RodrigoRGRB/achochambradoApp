function sortfunction(a, b) {
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

function calcular() {
    var valor = document.getElementById("campo").value;
    var fonte = document.getElementById("fonte").value;
    var titulo = document.getElementById("titulo").value;

    //valor = "33 35 35 39 41 41 42 45 47 48 50 52 53 54 55 55 57 59 60 60 61 64 65 65 65 66 66 67 68 69 71 73 73 74 74 76 77 77 78 80 81 84 85 85 88 89 91 94 94 98";

    texto = valor.trim();

    var res = texto.split(" ");

    res.sort(sortfunction);

    //tamanho do rol
    rol = res;

    tamanho = arrayContar(res);

    //calculo do log de linhas
    i = calcularLog(rol.length);

    amp = calcularAmplitude(rol, i);


    //amplitude arrendonda
    h = arrendondar(amp);

    var control;
    var cont = 0;
    var limite;
    w = 0;
    soma = 0;
    sfri = 0;
    var controls = [];
    var datecontrol = [];

    //testando criação de tabela
    var tabela = titulo;
    tabela += '<table id="tabelacss">';
    tabela += '<thead><tr><th>i</th><th>ROL</th><th>f<sub>i</sub></th><th>fr<sub>i</sub></th><th>F<sub>i</sub></th><th>FR<sub>i</sub></th></tr></thead>';
    //testando criação de tabela



    while (w < i) {
        //console.log(w);
        tabela += '<tr>';
        if (w == 0) {
            control = rol[0];
            limite = eval(control) + eval(h);

            console.log("control = " + control + " limite = " + limite);
        } else {
            control = limite;
            limite = eval(control) + eval(h);
        }


        for (k = 0; k < rol.length; k++) {
            if (rol[k] >= control && rol[k] < limite) {
                //console.log("inicio = "+control+" limite "+limite+" valor = "+rol[k]);

                cont++;

            }
        }

        //soma
        soma = soma + cont;
        fri = cont / rol.length;
        sfri = sfri + fri;
        //console.log(w+1+"ºClasse "+control+" |- "+limite+" f =  " + cont + " Fri "+ fri.toFixed(2) + " F " + soma + " FRI "+ sfri.toFixed(2));
        tabela += '<td>' + (w + 1) + "ºClasse</td><td>" + control + " |- " + limite + "</td><td> " + cont + " </td><td> " + fri.toFixed(2) + "  </td><td> " + soma + " </td><td> " + sfri.toFixed(2) + " </td>";

        //console.log(cont);

        datecontrol[w] = cont;
        controls[w] = control + " |- " + limite;

        cont = 0;
        w++;

        tabela += '</tr>';

    }
    tabela += '<tr><td></td><td></td><td>&Sigma;f<sub>1</sub> = ' + soma + '</td><td>&Sigma;FR<sub>1</sub> = ' + sfri + '</td><td></td><td></td></tr>';


    console.log(soma)
    console.log(sfri)
    console.log(controls)
    console.log(datecontrol)

    tabela += '</table>';
    tabela += fonte;
    document.getElementById('campoTabela').innerHTML = tabela;

    gerarGrafico(datecontrol, controls, titulo);
    //calcula o log
    //alert(Math.LOG10E*Math.log(50));
}

function calcularLog(numeroLog) {
    //alert("este é o numero "+numeroLog+ " este é o log "+ Math.LOG10E*Math.log(numeroLog));
    expressao = 1 + 3.3 * Math.LOG10E * Math.log(numeroLog);

    return expressao;

}

function calcularAmplitude(rol, i) {
    //alert("numero minimo "+rol[0] + " numero ultimo" + rol[rol.length-1] + " valor de i" + i);
    h = eval((rol[rol.length - 1] - rol[0]) / i);
    //alert(h);

    return h;
}

function arrendondar(numeroRedondo) {
    numeroRedondo = Math.round(numeroRedondo);

    return numeroRedondo;
}


function arrayContar(res) {
    arr = res;
    linha = [];
    coluna = [];


    for (x = 0; x < arr.length; x++) {
        //console.log(x);
        if (x == 0) {
            coluna.push(arr[x]);
            quantidade = contarValores(arr[x]);
            coluna.push(quantidade);
            //console.log(coluna);
            linha.push(coluna);
            //console.log(linha);

        } else {
            if (linha[linha.length - 1][0] != arr[x]) {
                coluna.push(arr[x]);
                quantidade = contarValores(arr[x]);
                coluna.push(quantidade);
                linha.push(coluna);
            }
        }

        coluna = [];



    }


    return linha;
}

function contarValores(numero) {
    contador = 0;

    for (y = 0; y < arr.length; y++) {
        if (numero == arr[y]) {
            contador++
        }
    }

    return contador;
}

function myFunction() {
    window.print();
}