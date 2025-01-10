/*
 Laços de repetição são um jeito fácil, rápido e AUTOMÁTICO de executar uma ação repetidas vezes.

---------------------------------------------------
A estrutura de um for é:

for (ponto inicial; condição; o que acontece depois da condição) {

}

for (let i = 0; i < 10001; i++) {

}

-> Nosso laço começa em zero
-> zero < 10001?
-> Faça ação e acrescente (itere) uma unidade em i

-> Nosso laço agora é 1
-> um < 10001?
-> faça ação e acrescente (itere) uma unidade em i

-> Nosso laço agora é 2...

---------------------------------------------------
 */
const CARROS = ['Gol', 'Fusca', 'Brasília', 'Etios', 'Forde-k'];
let tamanhoArrayCarros = CARROS.length;

for (let i = 0; i < tamanhoArrayCarros; i++) {
    document.getElementById('destinoParagrafoJavascriptDois').innerHTML += CARROS[i] + ' - ';
}
//percorre o array inteiro de maneira automatizada


for (let i = 0; i < 11; i++) {
    document.getElementById('destinoParagrafoJavascriptUm').innerHTML += i + ', ';
}
//contagem automatizada com for

for (let i = new Date().getFullYear(); i >= 1925; i--) {
    document.getElementById('ano').innerHTML += '<option value = "'+i+'">'+i+'</option>';
}
//maneira automatizada de select

