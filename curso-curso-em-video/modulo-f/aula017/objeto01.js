let amigo = {nome: 'Matheus', 
    sexo: 'Masculino', 
    peso: 67.85,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(typeof amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)