// 5! = 5 x 4 x 3 x 2 x 1

function fatorialDe(valor) {
    let fatorial = 1
    for(let i = valor; i > 1; i--) {
        fatorial *= i
    }
    return fatorial
}

console.log(fatorialDe(5))