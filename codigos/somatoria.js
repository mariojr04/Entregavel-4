function somarNumeros(n, numeros) {
    let soma = 0;
  
    for (let i = 0; i < n; i++) {
      soma += numeros[i];
    }
  
    console.log(`A soma dos ${n} números é: ${soma}`);
  }
  
  // Exemplo de uso:
  const quantidadeDeNumeros = 5; // Substitua com a quantidade desejada
  const listaDeNumeros = [10, 20, 30, 40, 50]; // Substitua com a lista de números desejada
  
  somarNumeros(quantidadeDeNumeros, listaDeNumeros);
  
  module.exports = { somarNumeros };

  