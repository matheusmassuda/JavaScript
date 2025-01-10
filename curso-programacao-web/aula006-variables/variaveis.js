/*
-> var
-> let
-> const

var pote = 'bombom';
console.log(pote)

*/

/*
//ESCOPOS -------------------------------
// var pode ser escrita em qualqquer lugar do programa e sempre receberá o que tiver mais em baixo
var a, b, c;
var a = 1
console.log(a)
var a = 3
console.log(a)
var a = 10
console.log(a)
*/


/* ------------------------------------
//DECLARAÇÃO DE TODAS AS VARIÁVEIS
var a, b, c;
//ATRIBUIÇÃO DE VALORES
a = 2;
b = 3;
c = a + b;

console.log(c)
*/

/* ------------------------------------
//DECLARAÇÃO DE TODAS AS VARIÁVEIS
var a, b, c;
//VARIÁVEIS SEM ATRIBUIÇÃO SÃO UNDEFINED == Indefinida
console.log(a)
//SOMA DE VARIÁVEIS INDEFINIDAS == NaN Not a Number
console.log(a + b)
*/

/* ------------------------------------------
//CONCATENAÇÃO
var nome, sobrenome, nomeCompleto, idade;
nome = 'Matheus Luiz';
sobrenome = 'Massuda';
idade = 26;
nomeCompleto = nome + " " + sobrenome;
document.getElementById('destinoNomeCompleto').innerHTML = nomeCompleto;
*/

//QUANDO USAR VAR, LET E CONST
// let torna a variável única e não permite redeclaração
/*
let pessoa = 'Matheus';
console.log(pessoa);
let pessoaDois = 'Giulia'; //Não pode ser feito, tem que mudar o nome desse let
*/

/*
var x = 10; //Nessa parte x == 10

{
    var x = 2; //Nessa parte x == 2
}

//Nessa parte x == 2

document.getElementById('textoViaJavascript').innerHTML = x;
*/

/* ------------------------------------------
let x = 10;

{
    let x = 2;
}

//Uma vez declarada let, ela sempre permanecerá com o primeiro valor, pos isso ignora o que está dentro do bloco
//A let x = 2, somente é == a 2 dentro daquele bloco

document.getElementById('textoViaJavascript').innerHTML = x;
*/

//const == constante e nunca pode mudar (a regra mais restrita)

const x = 10; //Absolutamente sempre será 10, independente do lugar

{
    const x = 2; //Não importa o que está aqui
}

console.log(x)

