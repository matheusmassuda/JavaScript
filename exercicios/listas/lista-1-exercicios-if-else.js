/* --------- EXERCÍCIO 1) [OK]

var date = new Date ()
var v1 = date.getDay()
var v2 = date.getMonth() +1
var v3 = date.getFullYear()
console.log(`O mês de hoje em valor é igual a ${v2}, já o ano em valor é ${v3}.`)
if (v2 > v3) {
    console.log(`O número ${v2} é maior que ${v3}.`)
} else {
    console.log(`O número ${v3} é maior que ${v2}.`)
}
*/

/* --------- EXERCÍCIO 2) [OK]

var aatuals = new Date()
var anasc = 2008
var aatual = aatuals.getFullYear()
var idade = aatual - anasc
console.log(`Você nasceu em ${anasc} e já completou ${idade} anos.`)
if (idade >= 16) {
    console.log(`Você está apto a votar.`)
} else {
    console.log(`Você ainda não pode votar.`)
}
*/

/* --------- EXERCÍCIO 3) [OK]

var scorreta = 1234
var serrada = 1235
if (scorreta == 1234) {
    console.log(`ACESSO	PERMITIDO`)
} else {
    console.log(`ACESSO	NEGADO`)
}
*/


/* --------- EXERCÍCIO 4) [OK]

var mcara = 0.3
var mbarata = 0.25
var mcompradas = 245 //escreva quantidade de maçãs compradas aqui
var vcaro = mcara * mcompradas
var vbarato = mbarata * mcompradas
var vcaro_real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}) .format(vcaro); // conversão para real
var vbarato_real = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}) .format(vbarato); // conversão para real

if (mcompradas < 12) {
    console.log(`Você comprou ${mcompradas} maçã(s), portanto pagará ${vcaro_real}.`)
} else {
    console.log(`Você comrpou ${mcompradas} maçã(s), portanto pagará ${vbarato_real}.`)
}
*/


/* --------- EXERCÍCIO 5) DIFÍCIL

// Leitura dos valores (substitua pelos valores que você deseja testar)
var interno = new Date ()
const a = interno.getMilliseconds();
const b = interno.getDate();
const c = interno.getFullYear();

// Declaração de variáveis para a ordem crescente
let menor, meio, maior;

// Comparações usando if-else
if (a < b && a < c) {
  menor = a;
  if (b < c) {
    meio = b;
    maior = c;
  } else {
    meio = c;
    maior = b;
  }
} else if (b < a && b < c) {
  menor = b;
  if (a < c) {
    meio = a;
    maior = c;
  } else {
    meio = c;
    maior = a;
  }
} else {
  menor = c;
  if (a < b) {
    meio = a;
    maior = b;
  } else {
    meio = b;
    maior = a;
  }
}

// Exibe os valores em ordem crescente
console.log(`Ordem crescente: ${menor}, ${meio}, ${maior}`);
*/


/* --------- EXERCÍCIO 6) [OK]

// feminino = 1, masculino = 2
var altura_m = 1.69
var sexo = 1

if (sexo === 1) {
    console.log(`Seu peso ideal: ${62.1 * altura_m - 44.7}`)
} else if (sexo === 2) {
    console.log(`Seu peso ideal: ${72.7 * altura_m - 58}`)
} else {
    console.log(`[VALOR INVÁLIDO]`)
}
*/


/* --------- EXERCÍCIO 7) [OK]


var nlados = 5
var medida_cm = 5
var area_tri = (1.73 / 4)*(medida_cm * medida_cm)
var area_qua = (medida_cm * medida_cm)

if (nlados === 3) {
    console.log(`TRIÂNGULO de área ${area_tri.toFixed(2)} cm quadrados.`)
} else if (nlados === 4) {
    console.log(`QUADRADO de área ${area_qua.toFixed(2)} cm quadrados.`)
} else if (nlados ===5) {
    console.log(`PENTÁGONO.`)
} else {
    console.log(`Figura de lados [INVÁLIDA]`)
}
*/



/* --------- EXERCÍCIO 8) [OK]

var nlados = 3
var medida_cm = 5
var area_tri = (1.73 / 4)*(medida_cm * medida_cm)
var area_qua = (medida_cm * medida_cm)

if (nlados === 3) {
    console.log(`TRIÂNGULO de área ${area_tri.toFixed(2)} cm quadrados.`)
} else if (nlados === 4) {
    console.log(`QUADRADO de área ${area_qua.toFixed(2)} cm quadrados.`)
} else if (nlados ===5) {
    console.log(`PENTÁGONO.`)
} else if (nlados < 3) {
    console.log(`NÃO É UM POLÍGONO.`)
} else  {
    console.log(`POLÍGONO NÃO IDENTIFICADO`)
} 
*/



/* --------- EXERCÍCIO 9) [OK]          BEM DIFÍCIL


var v1 = 8
var v2 = 1
var v3 = 30

let menor, meio, maior

if (v1 < v2 && v1 < v3) {
    menor = v1
    if (v2 < v3) {
        meio = v2
        maior = v3 
    }
    else {
        meio = v3
        maior = v2
    }
} if (v2 < v1 && v2 < v3) {
    menor = v2
    if (v1 < v3) {
        meio = v1
        maior = v3
    } if (v3 < v1) {
        meio = v1
        maior = v3
    } else if (v3 < v1 && v3 < v2) {
        menor = v3
        if (v2 < v1) {
            meio = v2
            maior = v1
        }
        if (v1 < v2)
            meio = v1
            maior = v2
    }
}

console.log(`Ordem crescente: ${menor}, ${meio}, ${maior}`)

*/



/* --------- EXERCÍCIO 10) [OK]

var l1 = 3
var l2 = 5
var l3 = 2

if (l1 === l2 && l2 === l3) {
    console.log(`O triângulo é: EQUILÁTERO.`)
} else if (l1 === l2 || l1 === l3) {
    console.log(`O triângulo é: ISÓCELES.`)
} else {
    console.log(`O triângulo é: ESCALENO.`)
}
*/


/* --------- EXERCÍCIO 11) [OK] 

var ang1 = 60
var ang2 = 60
var ang3 = 60

if (ang1 === 90 && (ang2 != 90 && ang3 != 90)) {
    console.log(`O triângulo é: RETÂNGULO.`)
} if (ang2 === 90 && (ang1 != 90 && ang3 != 90)) {
    console.log(`O triângulo é: RETÂNGULO.`)
} if (ang3 === 90 && (ang1 != 90 && ang2 != 90)) {
    console.log(`O triângulo é: RETÂNGULO.`)
} else if (ang1 > 90 || ang2 > 90 || ang3 > 90) {
    console.log(`O triângulo é: OBTUSÂNGULO.`)
} else if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
    console.log(`O triângulo é ACUTÂNGULO`)
}
*/


