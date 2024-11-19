const { verificarNumeroPrimo } = require('../codigos/numeros_primos'); // Ajuste o caminho conforme necessário

test('deve identificar corretamente um número primo', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarNumeroPrimo(7);
    expect(console.log).toHaveBeenCalledWith("O número 7 é primo.");
  });
  
  test('deve identificar corretamente um número não primo', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarNumeroPrimo(8);
    expect(console.log).toHaveBeenCalledWith("O número 8 não é primo.");
  });
  
  test('deve identificar que números menores ou iguais a 1 não são primos', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    verificarNumeroPrimo(1);
    expect(console.log).toHaveBeenCalledWith("O número 1 não é primo.");
  });