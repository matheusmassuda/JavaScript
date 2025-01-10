/* -- TÉCNICO EM INFORMÁTICA PARA A INTERNET INTRODUÇÃO À PROGRAMAÇÃO EXERCÍCIOS */

/* --------------------EXERCÍCIO 1)
var nome = 'Matheus'
var n1 = '5.5'
var n2 = '6.75'
var n3 = '9'
var média = (n1+n2+n3)/3
console.log(`O aluno ${nome} tirou nas provas p1, p2 e p3, respectivamente as notas: ${Number(n1)}, ${Number(n2)} e ${Number(n3)} e ficou com a média ${média.toFixed(2)}`)
*/


/* --------------------EXERCÍCIO 2) R$ e $ [IMPORTANTE]
var vdolar_hoje = 5.98
var vdolar = 981.57
var vdolar_convertido = vdolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
var total_reais = (vdolar / vdolar_hoje)
var treais_convertido = total_reais.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

console.log(`Convertendo sua quantida de ${vdolar_convertido} hoje para real, você ficará com ${treais_convertido}.`)
*/



/* --------------------EXERCÍCIO 3) R$ e $ [IMPORTANTE]
var dolar_hoje = 5.98
var vreais = 598
var vreais_convertido = vreais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
var tdolar = (vreais / dolar_hoje)
var tdolar_convertido = tdolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
console.log(`Convertendo um total de ${vreais_convertido} para dólar hoje, você ficará com ${tdolar_convertido} americanos.`)
*/


/* --------------------EXERCÍCIO 4) Boa vizão de VARIÁVEIS [IMPORTANTE]
//apenas mudar reajuste_per
var reajuste_per = 15
var reajuste_multiplicador = 1 + (reajuste_per / 100)

var saldo = 100
var saldo_convertido = saldo.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
var saldo_brl = (saldo * reajuste_multiplicador)
var saldo_brl_convertido = saldo_brl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

//var saldo_brl_convertido = saldo.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

console.log(`Saldo atual: ${saldo_convertido}`)
console.log(`Novo saldo com reajuste de ${reajuste_per}%: ${saldo_brl_convertido}`)
*/



/* --------------------EXERCÍCIO 5)

var porcento = 33.33
var porcento_convertido = 1 + (porcento / 100)
var vproduto = 100
var vproduto_corrigido = (vproduto * porcento_convertido)
var vproduto_BRL = vproduto_corrigido.toLocaleString('pt-BR', {style:"currency", currency:'BRL'})
console.log(vproduto_BRL)
*/



/* --------------------EXERCÍCIO 6)

var tfa = 68
var tcel = (tfa - 32)/ 1.8
console.log(`A temperatura em Fahrenheit é de ${tfa}°, convertida para Celsius fica ${tcel}°.`)
*/


/* --------------------EXERCÍCIO 7)

var tcel = 25
var tfa = (tcel * 1.8) + 32
console.log(`A temperatura em Celsius é de ${tcel}°, convertida para Fahrenheit é ${tfa}°.`)
*/



/* --------------------EXERCÍCIO 8)

var porcento = 6.97
var porcento_convertido = 1 + (porcento / 100)
var sal = 1412
var nsal = (sal * porcento_convertido)
var vaumento = nsal - sal

var vaumento_BRL = vaumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(`Valor do aumento salarial: ${vaumento_BRL}.`)
*/



/* --------------------EXERCÍCIO 9) if else [IMPORTANTE]

var n1 = 7
if (n1 >= 0) {
    console.log(`O número ${n1} é POSITIVO.`)
} else {
    console.log(`O numero ${n1} é NEGATIVO.`)
}
*/



/* --------------------EXERCÍCIO 10) [MUITO IMPORTANTE]
var n1 = 0
if (n1 < 0) {
    console.log(`Você digitou um numero negativo`)
} else if (n1 > 0) {
    console.log(`Você digitou um numero positivo`)
} else {
    console.log(`Você digitou zero`)
}
*/



/* --------------------EXERCÍCIO 11)
var p1 = 5.5
var p2 = 8.05
var p3 = 7.95
var média = (p1 + p2 + p3) / 3
if (média >= 7) {
    console.log(`ALUNO APROVADO`)
} else {
    console.log(`ALUNO REPROVADO`)
}
*/



/* --------------------EXERCÍCIO 12)*/
// MANEIRA 1
/*
var p1 = 2
var p2 = 9
var p3 = 8
var média = (p1 + p2 + p3)/3
console.log(`Média do aluno: ${média.toFixed(2)}`)
if (média < 5) {
    console.log(`ALUNO REPROVADO`)
} else if (média >= 7) {
    console.log(`ALUNO APROVADO`)
} else {
    console.log(`ALUNO EM RECUPERAÇÃO`)
}


//MANEIRA 2
var p1 = 4.74
var p2 = 6.25
var p3 = 4
var média = Number((p1 + p2 + p3)/3)
var média_decimal = média.toFixed(3)
console.log(`Média do aluno: ${média.toFixed(2)}`)
if (média_decimal < 5) {
    console.log(`ALUNO REPROVADO`)
} else if (média_decimal >= 5 && média_decimal < 7) {
    console.log(`ALUNO EM RECUPERAÇÃO`)
} else {
    console.log(`ALUNO APROVADO`)
}
console.log(média_decimal)
*/



/* --------------------EXERCÍCIO 13)
var n1 = 12

if (n1 % 2 === 0) {
    console.log(`O número ${n1} é par.`)
} else {
    console.log(`O número ${n1} é ímpar.`)
}
*/



/* --------------------EXERCÍCIO 14) [MUITO IMPORTANTE]
var n1 = 24
var n2 = -71
var n3 = 51
let maior
if (n1 > n2 && n1 > n3) {
    maior = n1
} else if (n2 > n1 && n2 > n3) {
    maior = n2
} else {
    maior = n3
}
console.log(`Dos números ${n1}, ${n2} e ${n3}, o maior é o ${maior}`)
*/



/* --------------------EXERCÍCIO 15) 
var idade = 11

if (idade < 9) {
    console.log(`Categoria Mirim`)
} else if (idade >= 9 && idade < 14) {
    console.log(`Categoria Infantil`)
} else if (idade >= 14 && idade < 18) {
    console.log(`Categoria Juvenil`)
} else {
    console.log(`Categoria Adulto`)
}
*/



/* --------------------EXERCÍCIO 16) 
var n1 = 28
var n2 = -8
var soma = (n1 + n2)
var operador1 = 8 
var operador2 = 5

if (soma > 20) {
    console.log(`${soma + operador1}`)
} else {
    console.log(`${soma - operador2}`)
}
*/



/* --------------------EXERCÍCIO 17)
var preço_produto = 19
var preço_produto_BRL = preço_produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

var percento1 = 45
var percento2 = 30
var percento1_convertido = 1 + (percento1 / 100)
var percento2_convertido = 1 + (percento2 / 100)

var pvenda1 = (preço_produto * percento1_convertido)
var pvenda2 = (preço_produto * percento2_convertido)
var pvenda1_BRL = pvenda1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
var pvenda2_BRL = pvenda2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

if (preço_produto < 20) {
    console.log(`O produto foi comprado por ${preço_produto_BRL} e deve ser vendido por ${pvenda1_BRL}`)
} else {
    console.log(`O produto foi comprado por ${preço_produto_BRL} e deve ser vendido por ${pvenda2_BRL}`)
}
*/













