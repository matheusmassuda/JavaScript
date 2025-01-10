
//Funções nativas do js para usar com arrays
const LISTA1 = ['Arroz', 'feijão', 'leite', 'macarrão'];
const LISTA2 = ['Suco', 'refrigerante', 'carne'];
const LISTA3 = ['Salgadinho', 'brigadeiro', 'hamburguer']
const LISTASJUNTAS = LISTA1.concat(LISTA2, LISTA3);

const JOGADORES = ['Zidane', 'Biro Biro', 'Ribamar', 'Pelé', 'Maradona', 'Ronaldinho Gaúcho', 'Ronaldo Fenômeno', 'Vampeta', 'Dimitri']

const PESSOA = ['Matheus', 'Massuda', 26, 'Desenvolvedor'];


//PESSOA.shift(); //remove o primeiro item da matriz (array) com alteração de índice
//PESSOA.unshift('Primeiro item adicionado'); //adiciona o primeiro item da matriz (array) com alteração de índice
//PESSOA.pop(); // remove último ítem da matriz array
//PESSOA.push('Web Developer'); //adiciona o item na última posição da matriz array

//PESSOA.splice(2, 0, 'ADICIONADO 1'); //escolhe o índice, diz quantos itens serão eliminados a partir dele e escreve novos itens 

//MÉTODO .join
//document.getElementById('destinoParagrafoJavascript').innerHTML = PESSOA.join(' ');

//MÉTODO .concat
//document.getElementById('destinoParagrafoJavascript').innerHTML = LISTASJUNTAS;

//MÉTODO FATIAR .slice()
const CRAQUES = JOGADORES.slice(2); //Faria a partir da posição dois para frnte e recorta o pedaço
const FATIADECRAQUES = JOGADORES.slice(2, 6);
//document.getElementById('destinoParagrafoJavascript').innerHTML = CRAQUES;

//MÉTODO .sort (Ordem Alfabética) e (Alfabética reversa)
//const JOGADORESORDEMALFABETICA = JOGADORES.sort(); //deixa em ordem alfabética
//JOGADORESORDEMALFABETICA.reverse(); //espelha a ordem alfabética

//MÉTODO .sort() com Numbers
const NUMEROS = [25, 31, 105, 2, 9, 57, 84, 11, 19, 21];
const NUMEROSMAIORES20 = NUMEROS.filter(acharMaioresQue20);
//NUMEROS.sort(); //ORDEN com base no primeiro número
//NUMEROS.sort(function(a,b) { return a-b}); //ORDENA do menor para o maior

//FUNCTION  PEGAR MAIOR NÚMERO e MENOR NÚMERO
function pegarMaiorNumero(array) {
    return Math.max.apply(null, array);
}

function pegarMenorNumero(array) {
    return Math.min.apply(null, array);
}

function acharMaioresQue20(value, index, array) {
    return value > 20;
}
document.getElementById('destinoParagrafoJavascript').innerHTML = NUMEROSMAIORES20;

