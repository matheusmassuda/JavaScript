//jogando funções dentro de variáveis


var descontoInteiro = 50
var preçoDoProduto = 578.50

let resultadoFuncao = function porcentagemEmDecimal(desconto) {
    return 1 - (desconto / 100) 
}
console.log(`O produto de ${(preçoDoProduto).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} com desconto de ${descontoInteiro}% custará:${(preçoDoProduto*resultadoFuncao(descontoInteiro)).toLocaleString("pt-BR", {style:"currency", currency: "BRL"})}`)

