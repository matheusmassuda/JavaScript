/*
//MUITO IMPORTANTE

EVENTOS: São ações disparadas pela interação dos usuários na página. Um bom manejo de eventos pelo programador pode tornar a interatividade da página melhor, interativa e dinâmica

Existem muitos eventos, porém os mais utilizados são:

onclick -> Dispara quando recebe um clique;
ondbclick -> Disparado com clique duplo;
onmouseover -> Disparado quando o mouse está sobre;
onmouseout -> Disparado quando o mouse é movido para fora do elemento;
onmousemove -> Disparado quando o mouse é movido no elemento;
onmouseup -> Disparado quando o clique do botão é liberado;
onfocus -> Disparado quando o elemento recebe o foco. válidos para Input...;
onchange -> Disparado quando existe mudança no conteúdo;
onblur -> Disparado quando o elemento perde o foco;
onkeydown -> Disparado quando a tecla é pressionada no teclado;
onkeypress -> Disparado quando uma tecla é pressionada e solta;
onkeyup -> Disparado quando uma tecla é solta sobre um elemento;
onload -> Disparado quando a pégina terminou de er carregada. Body.;
onresize -> Disparado quando há redimencionamento da janela;
*/

//ONCLICK
function eventoOnclick() {
    //alert('Evento onclick=" " está funcionando.');
    document.body.style.backgroundColor = 'yellow' // manipulação de elementos da página via eventos e js
}

//ONDBLCLICK
function eventoOndblclick() {
    //alert('Evento de clique duplo ondblclick=" " funcionou.')
    document.body.style.backgroundColor = 'rgb(218, 210, 210)';
}

//ONMOUSEOVER
function eventoOnmouseover() {
    document.getElementById('containerUm').style.backgroundColor = 'rgb(71, 39, 39)'; //muda cor do fundo
    document.getElementById('containerUm').style.color = 'white'; //muda cor da letra
}

//ONMOUSEOUT
function eventoOnmouseout() {
    document.getElementById('containerUm').style.backgroundColor = 'rgb(207, 138, 138)';
    document.getElementById('containerUm').style.color = 'rgb(71, 39, 39)';
}

//ONMOUSEMOVE
function mudarTextoInterno() {
    document.getElementById('containerUm').textContent = 'Mouse está se movendo.';
}

//ONMOUSELEAVE
function resetarTextoInterno() {
    document.getElementById('containerUm').textContent = '1'
}

//ONMOUSEDOWN
function mudarNomeComClique() {
    document.getElementById('containerUm').textContent = 'Mouse clicou';
}

function voltarNomeOriginalSoltandoMouse() {
    document.getElementById('containerUm').textContent = '1'
}

function mudarCorBorda() {
    document.getElementById('textOneName').style.border = '1px solid blue';
    document.getElementById('textOneName').value = ' ';
}

function mudarCorBackground() {
    document.getElementById('textOneName').style.backgroundColor = 'blue';
    document.getElementById('textOneName').style.color = 'white';
}

function teclaPressionada() {
    document.getElementById('textTwoNumber').style.backgroundColor = 'purple';
}

function mudarCorBackground() {
    document.getElementById('textTwoNumber').style.backgroundColor = 'Yellow';
    console.log('Tecla solta')
}
