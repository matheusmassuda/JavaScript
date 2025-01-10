/* 
Usados para atribuir, comparar, executar operações aritiméticas entre valores

ARITMÉTICOS --------------------------------------
+ (soma)
- (subtração)
* (multiplicação)
/ (divisão)
** (exponenciação, equivalente a ^)
% (resto da divisão)

LÓGICOS -------------------------------------------
&& (e)
|| (ou)

ATRIBUIÇÃO E COMPARAÇÃO----------------------------
= (Atribuição - recebe, usado para variáveis)
+= ou -= (Valor recebe ele mesmo somado de alguma coisa ou subtraído de alguma coisa)
== (igual em valor)
!= (não igual)
=== (igual restrito: igual em valor e em tipo)
*/

/* ARITMÉTICOS (MATEMÁTICOS)
let valor1, valor2, total1, total2, total3, total4;
valor1 = 5;
valor2 = 2;

total1 = valor1 + valor2;
total2 = valor1 - valor2;
total3 = valor1 * valor2;
total4 = valor1 / valor2;
console.log(total1, total2, total3, total4)
*/


/*
//INCREMENTO +1 e DECREMENTO -1
//Exemplo prático de INCREMENTO e DECREMENTO são botões de "+" no carrinho de compra, quando clicamos no mais, adicionamos uma unidade do produto.
let valor1, valor2, total1, total2, total3, total4;
valor1 = 5;
valor2 = 2;

total1 = ++ valor1
total2 = -- valor2
console.log('Incrementos ++ e decrementos são casos específicos onde se soma ou subitrai-se uma unidade.');
console.log(`O valor1 que era 5 recebeu um incremento ++ e passou a valer ${valor1}`);
console.log(`O valor2 que valia 2 com um decremento passou a valer ${total2}`);
*/

/*
//ATRIBUIÇÃO e CONCATENAÇÃO
let valor1, valor2, valor3, valor4, total1, total2, total3, total4;
valor1 = 5;
valor2 = 2;
valor3 = 'Matheus'
valor4 = 'Massuda'
total2 = valor3 + " " + valor4
console.log(`Até essa parte do código o valor1 tem valor ${valor1}, pois ele apenas foi atribuído.`)
valor1 = valor1 + valor2
console.log(`Nessa parte do código foi somado valor2 "${valor2}" ao próprio valor1 "5" com o operador +=, resultando em novo valor1 = ${valor1}.`)
console.log('(valor1 = valor1 + valor2) == (valor1 += valor2) para o js.')
console.log('(valor1 = valor1 - valor2) == (valor1 -= valor2) para o js.')
console.log('(valor1 = valor1 * valor2) == (valor1 *= valor2) para o js.')
console.log('(valor1 = valor1 / valor2) == (valor1 /= valor2) para o js.')
console.log('O sinal de + com variáveis do tipo string o tranforma num operador de concatenação, por exemplo ' + valor3 + " " + valor4 + '.')
*/

/*
//COMPARAÇÃO
// > (maior), >= (maior igual), < (menor), <= (menor igual), == (igual a), === (igual restrito a), != (não igual ou diferente), !== (não igual restrito ou diferente restrito).
//Serão respondidos pelo programa com true ou false
let valor1, valor2, valor3, total1, total2, total3, total4;
valor1 = 8;
valor2 = '8';

total1 = (valor1 <= valor2);
total2 = (valor1 == valor2);
total3 = (valor1 === valor2);
total4 = (valor1 != valor2);
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
*/


/*
//TERNÁRIOS
// ? (se sim primeira opção, se não segunda.). ? true:false
let nome, idade, eleitor;
nome = 'Matheus';
idade = 16;
eleitor = (idade < 16) ? 'não é eleitor.':'é eleitor.';
console.log(`O ${nome} tem ${idade} anos, portanto ${eleitor}`)
*/



//LÓGICOS (para mais de uma condição)
let nome, idade, eleitor, resultado, resultado2, resultado3, resultado4;
nome = 'Matheus';
idade = 26;
eleitor = (idade < 16) ? 'não é eleitor.':'é eleitor.';

resultado = (idade > 60 && idade < 70);
resultado2 = (idade >= 40 || idade <= 30);
resultado3 = (idade === 26 || idade === 61);
resultado4 = !(idade === 26);
console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);





