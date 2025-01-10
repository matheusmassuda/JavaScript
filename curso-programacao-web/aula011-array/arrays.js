/*
//ARRAYS ou MATRIZES
São variáveis que armazenam vários valores. Diferente dos objetos que funcionam com propriedades 'categorias' os arrays NÃO possuem propriedades. O item é encontrado pela posição (índice).

Arrays são uma lista de IntersectionObserver, com controles, por ordem de posição dentro delete.

A sintaxe dos arreis é com [] 
E a posição dos arrays SEMPRE começa no índice 0
Ex: const LISTA = ['arroz', 'feijao', 'macarrao', 'leite']

É possível (mesmo que não seja funcional), chamar os elementos do arrey usando a seguinte sintaxe:
Ex: LISTA[0] (lista na posição / índice 0) vai conter o valor 'arroz'
Ex: LISTA[1] (lista na posição / índice 1) vai contar o valor 'feijao'

A vantagem de se usar arrays é que podemos criar um 'mini' banco de dados dentro de uma única variável.

------------- IMPORTANTE --------------
As matrizes (array) são um tipo específico de objeto, portanto dentro de uma valor da uma matriz poeriamos ter uma String, Number, function () um objeto ou até mesmo outra matriz.
*/

/* ---------------------------------------
let item1 = 'arroz';
let item2 = 'feijao';
let item3 = 'macarrao';
let item4 = 'leite';

                //[0]    //[1]     //[2]      //[3]
const LISTA = ['arroz', 'feijao', 'macarrao', 'leite'];
// Outra forma de escrever:
const LISTA2 = [
    'arroz',
    'feijao',
    'macarrao',
    'leite'
];

LISTA[0] = 'café' // A posição de índice [0] do array recebe novo valor
let x = LISTA[0] // A variável criada 'x', está recebendo o valor de posição 2 do array LISTA[]

console.log(LISTA)
console.log(LISTA2)
console.log(LISTA[0])
console.log(LISTA2[1])
console.log(x)
*/



/* --------------------------------------- */
const PESSOA = ['Matheus', 'Massuda', 26]; //array
const PESSOAOBJECT  = {nome: 'Matheus', sobrenome: 'Massuda', idade: 26}; //object
const NOTARRAY = 10;

//console.log(PESSOA[0])
//console.log(PESSOAOBJECT.nome)

console.log(PESSOA[0]); //retorna SEMPRE o primeiro item de uma array
console.log(PESSOA.length); // retorna quantidade de itens
console.log(PESSOA[PESSOA.length - 1]); // retorna INDISCUTIVELMENTE o último item da array

PESSOA.push('desenvolvedor') // Adiciona um item na última posição
PESSOA[PESSOA.length] = 'solteiro' // Adiciona um item na última posição
//PESSOA[11] = 'Teste' //Colocar um valor distante adicionará posições vazias no meio

console.log(PESSOA)
console.log(Array.isArray(PESSOA)) //Diz se a variável é um array (true and false)
console.log(Array.isArray(NOTARRAY)) //Diz se a variável é um array (true and false)