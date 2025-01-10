//Recursão
/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
n! = n * (n - 1)!
1! = 1

*/

function fatorialDe(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorialDe(numero-1)
    }
}

console.log(fatorialDe(5))