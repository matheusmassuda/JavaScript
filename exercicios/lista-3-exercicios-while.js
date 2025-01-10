function calcularSomatorio(qtdValores) {
    let soma = 0;
    let contador = 0;

    while (contador < qtdValores) {
        let valor = parseFloat(prompt(`Digite o ${contador + 1}º valor real:`));

        if (!isNaN(valor)) {
            soma += valor;
            contador++;
        } else {
            alert("Por favor, insira um número válido.");
        }
    }

    console.log(`O somatório dos ${qtdValores} valores é: ${soma}`);
    return soma;
}

// Exemplo de uso
calcularSomatorio(20);
