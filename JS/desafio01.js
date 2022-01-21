function filtrarQuantidadeDeDigitos(numeros, quantidadeDigitos) {
    let resultado = [];

    for (numero of numeros) {
        const quantidade = String(numero).length;

        if (quantidade === quantidadeDigitos) {
            resultado.push(numero);
        }
    }
    return `Numeros com ${quantidadeDigitos} casa(s) decimal(is) dentro do Array: ${resultado}`;

}

console.log(filtrarQuantidadeDeDigitos([1, 4, 8, 9, 10, 33, 100, 199, 1001, 19000, 20000], 3));




/////////// Mais Uma Alternativa ////////////////


function filtrar2(numeros, quantidade) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length;
        return quantidadeDeDigitos === quantidade;
    })
}

console.log(filtrar2([1, 4, 8, 9, 10, 33, 100, 199, 1001, 19000, 20000], 1))