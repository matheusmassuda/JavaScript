/*
console.log('Isso é um dado do tipo string.');

console.log(5);
console.log('Acima temos um dado do tipo number');

console.log(`Usando crases "placeholder" é possível escrever dados concatenados sem usar o sinal de + apenas usando a sintaxe $ {} sem espaço entre o $ e {}. `)

//Existem dados do typo booleans (valores lógicos) que são true e false
*/

// Variáveis simples no JS -----------------------------------
/*
var, let e const

>"var" são variáveis simples de escopo global (existem para o programa todo);
>"let" são variáveis simples de escopo local (existem dentro de uma parte ou escopo 
do programa, por exemplo dentro de um bloco);
>"const" são DADOS que tendem a permanecer constantes, ou seja, sem alteração.
*/

/*
var a =2;
var b = 5;
var c = a + b;
console.log(c);
console.log(a * b);
console.log(a - b);
console.log(b ** a)
console.log(a / b)
console.log((a * b) / b)
console.log(a > b)
console.log((a * b) > (a + b))
console.log(a > b && (a * b) > (a + b))
console.log(a > b || (a * b) > (a + b))
//variável c recebe a soma de outras duas variáveis. Toda vez que a ou b ou a e b mudarem c também irá mudar. Com isso é possível fazer cálculos aritiméticos e lógicos com variáveis.
// JS é caseSensitive isso significa que var pessoa != var PESSOA != var Pessoa != var PessoA. Em outras palavrtas minúsculas e maiúsculas importam.
camelCase
*/

//Sinais e significados no JS -----------------------------
/*
= (se lê, recebe)
var a = 5 
variável global a recebe valor 5 (number)

var b = 'Matheus foi viajar'
variável global b recebe valor Matheus foi viajar (string)

== (se lê, igual a)
var a = 5; variável global a recebe valor 5 do tipo number
var b = 5; variável global b recebe valor 5 do tipo number
a == b; variável gobal a é igual variável global b?
true

var a = 5; variável global a recebe valor 5 do tipo number
var b = '5'; variável global b recebe valor 5 do tipo string
a == b; variável gobal a é igual variável global b?
true


=== (se lê, igual restrito a)
var a = 5; variável global a recebe valor 5 do tipo number
var b = 5; variável global b recebe valor 5 do tipo number
a === b; variável gobal a é igual restrito a variável global b?
true

var a = 5; variável global a recebe valor 5 do tipo number
var b = '5'; variável global b recebe valor 5 do tipo number
a === b; variável gobal a é igual restrito a variável global b?
false

Para ser igual restrito, o VALOR e o TIPO do dado devvem ser os mesmos.


*/

