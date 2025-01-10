/*
//OBJETOS (OBJECTS) == Variáveis com vários valores dentro. Os objetos podem conter: valores (propriedades) ou conter funções (métodos). Propriedades são os 'slots' espaços que armazenam valores e funções em um objeto. A nomenclature de objetos é: objeto = { }

//Objetos são como se fossem arreys (vetores) 'EVOLUÍDOS' pois além de conseguirem armazenar múltiplos valores e até mesmo funções, também é possível manipular o 'slot' de cada propriedade. criando algo do tipo: var objeto = {nome: 'Matheus', idade: '26', profissão: 'Desenvolvedor', estadoCivil: 'solteiro'} outro exemplo seria -> let carro = {marca: 'ford', modelo: 'ka', ano: 2015, cor: 'branco', direcao(), refrigferacao(), travas()}
*/

let carro = 'ford'; //variável simples

const OBJETO = {marca: 'ford', modelo: 'ka', ano: 2015, placa: 'ABC1234', preco: 38900}; //variável composta (objeto), propriedades (marca, modelo, ano, placa).

// No js é uma prática comum escrever objetos usando const 
//Outra maneira de escrever um objeto:
const OBJETOCARRO = {
    marca: 'ford',
    modelo: 'ka',
    ano: 2015,
    placa: 'ABC1234',
    preco: 38900,
    buzina: function() {alert('Biiiii')},
    completo: function() {
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`; //Para pegar uma propriedade dentro do próprio objeto se usa this
    }
}

//TRABALHANDO COM OBJETOS
console.log(typeof OBJETO)
console.log(OBJETO)
console.log(OBJETO.marca)
console.log(OBJETO.modelo)
console.log(OBJETO.ano)
console.log(OBJETO.placa)
console.log(`O ${OBJETO.marca} modelo ${OBJETO.modelo} do ano ${OBJETO.ano} e placa ${OBJETO.placa} custa R$ ${OBJETO.preco}`)

console.log(OBJETOCARRO.completo())