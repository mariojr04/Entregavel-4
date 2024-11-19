function gerarSequenciaFibonacci(n) {
    let termo1 = 0;
    let termo2 = 1;
    let termo3;
  
    let sequencia = `${termo1},${termo2}`;
  
    for (let i = 3; i <= n; i++) {
      termo3 = termo1 + termo2;
      sequencia += `,${termo3}`;
      termo1 = termo2;
      termo2 = termo3;
    }
  
    console.log(sequencia);
  }
  
  // Exemplo de uso:
  const numeroDeTermos = 10; // Substitua pelo número de termos desejado
  gerarSequenciaFibonacci(numeroDeTermos);
  
  module.exports = { gerarSequenciaFibonacci };
  