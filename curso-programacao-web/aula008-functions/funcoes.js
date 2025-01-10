/*
//FUNÇÕES: Em js é um bloco de código que executa uma tarefa específica, é como uma pequena fábrica onde se faz uma entrada e ela dará a saída. Segundo clean code cada função deve executar apenas uma terafa e se preciso for deve chamar outras funções (para realziar mais tarefas). Em js ela é executada quando 'algo' a invoca (chama-a).
*/

/* 
//EXEMPLO DE FUNÇÕES -----------------------------------------------
function somar(valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById('textoViaJavascript').innerHTML = somar(12, 14);


function converterRealParaDolar(real, cotacaoDolarHoje) {
    return (real / cotacaoDolarHoje);
}

let valorEmReal, dolarHoje, convercaoRealDolar;
valorEmReal = 12.18;
dolarHoje = 6.09;
conversaoRealDolar = converterRealParaDolar(valorEmReal, dolarHoje);

document.getElementById('textoViaJavascript2').innerHTML = `R$ ${valorEmReal} convertidos em dólares hoje com a cotação de ${dolarHoje} serão ${conversaoRealDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`;
*/


/*
//CHAMDNO FUNÇÕES -----------------------------------------------
//VIA CÓDIGO
function sejaBemVindo () {
    alert('Seja bem vindo ao conversor monetário.');
}

//VIA EVENTOS onclick=" "
sejaBemVindo();

function bemVindoConversor () {
    alert('Converto valores em Real para Dólar.');
}
*/

//VIA EVENTOS onclick=" "

function converterFahrenheitParaCelsius(temperaturaFahrenheit) {
    return (5 / 9) * (temperaturaFahrenheit - 32);
}

var temperaturaCel = converterFahrenheitParaCelsius(77);
alert(`A temperatura em graus Célsius é de ${temperaturaCel}°C.`)





