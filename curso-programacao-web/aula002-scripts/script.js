alert('Testando a página')
document.getElementById('textoParagrafo').innerHTML = 'Texto embutido na tag p via <b>JS.</b> com <b>document.getElementById.innerHTML =</B>';
alert('Alertas no script.js são exibidos assim!');
console.log('Conseguimos trabalhar escondido na área do desenvolvedor com console.log');
document.querySelector('p#textoParagrafoTres').innerHTML = 'Texto embutido na tag p via <b>JS</b> com o comando: <b>document.querySelector(p#textoParagrafoTres).innerHTML =</b>'
