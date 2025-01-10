/*
// Switch: Estrutura que realiza diferentes ações com base em diferentes condições (casos e respostas de casos), no mesmo bloco de verificação. Caso não tenha nenhuma coondição compatível ele irá retornar valor padrão estipulado.

//Uma desvantagem do switch é (difícil de automatizar e trabalhoso para dar manutenção) que cada caso precisa ser escrito, se por algum acaso, entrar uma nova consição (caso) no sistema, ele terá que ser escrito (aumentando muito o código).

//Vantagem do switch: quando temos escolhar pré-definidas e que NUNCA serão alteradas ou criadas.

//Peculiaridade do switch: quando ele tenta executar o caso o operador que ele usa é o === (ou seja é necessário satisfazer valor e tipo do dado para a condição ser satisfeita).

Estrutura do Switch:

switch (expressão) {
    case 1:
        //o que acontece
        break;
    case 2:
        //o que acontece
        break;
    case 3:
        //o que acontece
        break;
    default;
    //o que acontece
}
    
break == se a condição for satisfeita o switch retorna o bloco e para ali.
*/


function verificarCor() {
    let cor = document.getElementById('campoNome').value;
    cor = cor.toLowerCase(); // TRATAMENTO DA VARIÁVEL será convertida para minúscula para quando o switch que esta em minúscula ler, ele encontrar de qualquer forma, mesmo que o usuário tenha escrito "errado".

    switch (cor) {
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'vermelho':
            document.body.style.backgroundColor = 'red';
            break;
        case 'preto':
            document.body.style.backgroundColor = 'black';
            break;
        case 'verde':
            document.body.style.backgroundColor = 'green';
            break
        case 'amarelo':
            document.body.style.backgroundColor = 'yellow'
            break;
        default:
            document.body.style.backgroundColor = 'rgb(218, 210, 210)';
            document.getElementById('destinoParagrafoJavascript').innerHTML = 'Cor não disponível.'
    }
}

function verificarDiaDaSemana() {
    var dia = new Date().getDay();
     // TRATAMENTO DA VARIÁVEL será convertida para minúscula para quando o switch que esta em minúscula ler, ele encontrar de qualquer forma, mesmo que o usuário tenha escrito "errado".

    switch (dia) {
        case 0:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Domingo.'
            break;
        case 1:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Segunda-Feira.'
            break;
        case 2:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Terça-feira.'
            break;
        case 3:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Quarta-feira.'
            break
        case 4:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Quinta-feira.'
            break;
        case 5:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Sexta-feira.'
            break;
        case 6:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Hoje é Sábado.'
            break;
        default:
            document.getElementById('destinoParagrafoJavascriptDois').innerHTML = 'Não sei qual dia é hoje'
            break;
           
    }
}