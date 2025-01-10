/* if and else if (se isso aontecer) então, senão (isso vai acontecer)

se (isso for isso) {
    faça esse bloco
} senão {
    faça esse outro bloco
}

*/

//var interruptor = 'off';
//var hora = new Date().getHours();

//condicional simples -----------------------
/*
if (interruptor == 'on') {
    console.log('A lâmpada está ligada.');
} else {
    console.log('A lâmpada está desligada.');
}
*/


//condicional composta -----------------------
/*
if (hora < 12) {
    console.log('Bom dia');
} else if (hora < 18) {
    console.log('Boa tarde.');
} else {
    console.log('Boa noite');
}
*/

//condicional na prática (validação)-----------------------
function verificarInputVazio() {
    let inputNome = document.getElementById('campoNome').value;

    if (inputNome == '' || inputNome == null) {
        let p = document.getElementById('destinoParagrafoJavascript');
        p.innerHTML = 'O campo não pode ser vazio.';
        p.style.color = 'red';
    } else {
        let p = document.getElementById('destinoParagrafoJavascript');
        p.innerHTML = 'Parabéns, tudo correto.';
        p.style.color = 'green';
    }
}