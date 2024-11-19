function verificarNumeroPrimo(n) {
    if (isNaN(n)) {
      console.log("Por favor, insira um número válido.");
      return;
    }
  
    let primo = true;
  
    if (n <= 1) {
      primo = false;
    } else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          primo = false;
          break;
        }
      }
    }
  
    if (primo) {
      console.log(`O número ${n} é primo.`);
    } else {
      console.log(`O número ${n} não é primo.`);
    }
  }
  
  // Exemplo de uso:
  const numero = 29; // Substitua pelo número desejado
  verificarNumeroPrimo(numero);
  
  module.exports = { verificarNumeroPrimo };
  