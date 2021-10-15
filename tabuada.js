function iniciar() {

    // pegando o número escolhido
    var vNumEscolhido = document.getElementById('numero');

    if (vNumEscolhido.value < 1 || vNumEscolhido.value > 10){
        alert('número escolhido inválido: ' + vNumEscolhido.value);
        window.location.href = "./index.html";
    }

    // inibir input número e botão "iniciar"
    vNumEscolhido.disabled = true;
    document.getElementById('inicio').disabled = true;

    // torna a tabela visivel
    document.getElementById('tabela').style.visibility = 'visible';

    // pega as propriedades dos elementos da tabela (<table>)
    var vNumeros = document.getElementsByClassName('numeros');
    var vInputs = document.getElementsByClassName('inputs');
    var vBotoes = document.getElementsByClassName('botoes');
    var vMsg = document.getElementsByClassName('msg');

    // configuração inicial da tabela
    for (var i = 0; i < 10; i++) {
        vNumeros[i].innerHTML = vNumEscolhido.value;

        if (i > 0) {
            vInputs[i].style.visibility = 'hidden';
            vBotoes[i].style.visibility = 'hidden';
        } else {
            vMsg[i].innerHTML = "<< Coloque o resultado e clique no 'OK'";
        }
    }

    // coloca o "foco" no primeiro input de resultado (inputs)
    document.getElementById('res1').focus();

    // inicializa indexador
    document.getElementById('idx').value = 0;

}

function validaResult() {

    // pega as propriedades dos elementos da tabela (<table>)
    var vNumeros = document.getElementsByClassName('numeros');
    var vInputs = document.getElementsByClassName('inputs');
    var vBotoes = document.getElementsByClassName('botoes');
    var vMsg = document.getElementsByClassName('msg');

    // recupera indexador
    var vIdx = document.getElementById('idx');
    ix = vIdx.value;
    // pegando o número escolhido
    var vNumEscolhido = document.getElementById('numero');

    // calcula o produto da linha do "ix"
    vCalc = vNumEscolhido.value * (parseInt(ix) + 1);

    // compara o calculado com o resultado digitado pelo operador
    if (vCalc == vInputs[ix].value){
        vMsg[ix].innerHTML = ">> PARABÉNS !!! ACERTOU !!!";
        vMsg[ix].style.color = "blue";
        vInputs[ix].disabled = true;
        vBotoes[ix].disabled = true;
        // avança o indexador
        vIdx.value++;
	    ix = vIdx.value;
        // verifica se é a última ocorrência
        if (ix > 9){
            document.getElementById('rodape').style.visibility = 'visible';
        }else{
            // prepara a próxima ocorrencia
            vInputs[ix].style.visibility = 'visible';
            vInputs[ix].focus();
            vBotoes[ix].style.visibility = 'visible';
            vMsg[ix].innerHTML = "<< Coloque o resultado e clique no 'OK'";
        }
    }else{
        vInputs[ix].focus();
        vInputs[ix].innerHTML = "";
        vInputs[ix].value = "";
        vMsg[ix].innerHTML = " <<< OPsssss !!! ERROU !!!  Tente de novo";
        vMsg[ix].style.color = "red";
    }

}