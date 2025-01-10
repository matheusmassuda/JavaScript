/** CLASSES EM JS
 
Ferramenta antiga em outras inguagens como PHP, mas introduzida em JS em 2015 no Ecma6. 

resumo: objetos são variáveis com muitos valores e propriedades (categorias) dentro. objetos também podem receber métodos (funções dentro de propriedades).
const carro = {marca: 'ford', modelo: 'ka', ano: 2015, placa: 'ABC-1234', buzina: function() {alert('Biiii')}};
carro.marca retorna 'ford'

CLASSES: São como fábricas de objetos, ou seja, são funções especiais para criação de objetos.
Do mesmo modo que uma fábrica usa máruinas, as classes usam o método constructor() para fabricar objetos

*/

//SINTAXE DE CLASS
//A class irá passar parâmetros como matéria prima, e cada propriedade receberá um valor
//IMPORTANTE - As classes sempre devem ser DECLARADAS primeiro da chamada da class (a fábrica precisa existir antes) é a propriedade içada, diferente de uma função que pode ser chamada em cima.
class Carro {
    constructor(valor1, valor2, valor3, valor4, valor5) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
        this.direcao = valor4;
        this.freio = valor5;
    }
    buzina() { //criação de método
        return this.modelo+' Buzinou Biiii';
    }
}


/*
//criação objeto carro
const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2001,
}
*/

//criação com class
const uno = new Carro('Fiat', 'Uno', 2001, 'hidraulica', 'ABS');
const gol = new Carro('Volswagem', 'gol', 2016, 'Elétrica', 'ABS');
console.log(uno.buzina());
console.log(gol);
gol.ano = 2010; //faz modificação na propriedade específica
console.log(gol)