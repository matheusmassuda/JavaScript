function ParOuImpar(valor) {
    if (valor%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let valorParaTestar = 223
console.log(`O valor é ${ParOuImpar(valorParaTestar)}.`)


