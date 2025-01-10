/** EVENTOS DE TMEPO NO JAVASCRIPT
 
Eventos de tempo permitem a execução do código em intervalos de tempo especificados. Intervalos de tempo == eventos de cronometragem.

Dois métodos para isso no JS:

setTimeout (function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado em milisegundos. (define tempo para uma vez)

setInterval (function em milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente. (define tempo para repetição)
 */

/** setTimeout -----------------------------------------------
 
function ativarContagem() {
    document.getElementById('tempo').innerHTML = 'Começou a contagem de 5 segundos';
    
    //EXECUTA UMA VEZ APÓS TEMPO DETERMINADO
    tempo = setTimeout(function() {document.getElementById('tempo').innerHTML = 'Terminou o setTimeout'}, 5000); //chama a função e coloca tempo de 5000ms (5s)
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = 'Contagem interrompida'// interrompe a contagem timeout com variável tempo
}

*/


/** setInterval ---------------------------------------------------
 
function ativarContagem() {
    
//setInterval cria uma espécie de loop na própria função
tempo = setInterval(function() {
    var  cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById('tempo').innerHTML = soma;
}, 1000);
}

function pararContagem() {
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = 'Contagem interrompida'
}
*/




function ativarContagemRegressiva() {
    
//setInterval cria uma espécie de loop na própria função
tempo = setInterval(function() {
    var  cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) - 1;

    if(soma === 0) {
        document.getElementById('tempo').innerHTML = 'Tempo esgotado'
        pararContagem();
    } else {
        document.getElementById('tempo').innerHTML = soma;
    }

}, 1000);
}

function pararContagem() {
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = 'Contagem interrompida'
}

