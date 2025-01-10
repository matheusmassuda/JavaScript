/*
let num = [5, 11, 15, 2, 71]
//num[5] = 7 //na posição 5 crie o valor 7
num[0] = 29
num.push(6) //.push cira um elemento na última posição
//num.length //Mede o tamanho do vetor (quantidade)
num.sort() //Coloca os elementos do vetor em ordem crescente

console.log(`Nosso vetor é ${num}`)
*/

/*
let num = [5, 8, 2, 9, 3, 12, 72, 84]

num.push(85)
console.log(`O vetor é ${num}.`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro elemento é ${num[0]}`)
console.log(`os dois elementos do meio são ${num[4]} e ${num[5]}`)
console.log(`O último elemento é o valor: ${num[8]}`)
console.log(`O novo vetor é [${num}].`)
*/

/*
let nomes = ['Matheus', 'Antonio', 'Giulia', 'Rosana']

console.log(`Nosso vetor nomes é: ${nomes}`)
console.log(`Em ordem alfabética, nosso vetor nomes fica: ${nomes.sort()}`)
nomes.push('Aury') // Adiciona valor Aury no final do vetor
nomes.sort() // Coloca vetor em ordem alfabética
console.log(`Adicionando o nome Aury no vetor e colocando o vetor em ordem alfabética: ${nomes}`)
*/

/*
let num = [6, 4, 5, 8, 7]

num.sort()
console.log(num)
//mostando na tela os valores sem formatação
//console.log(num[0])
//console.log(num[1])
//console.log(num[2])
//console.log(num[3])
//console.log(num[4])

//mostrando valores com método repetição
for(let indice = 0; indice < num.length; indice++) {
    console.log(num[indice])
}


let valores = [5, 8, 2, 9, 3]
let index = valores.indexOf(9)

console.log(`O valor 9 está na posição ${index}.`)
*/

let valores = [5, 8, 2, 9, 3]
valores.sort()
let posicaoDoValor = valores.indexOf(8)

console.log(`Nosso vetor ordenado é ${valores}`)
if (posicaoDoValor == -1) {
    console.log(`O valor não existe no vetor`)
} else {
    console.log(`O valor está na posição ${posicaoDoValor} de nosso vetor ${valores}`)
}