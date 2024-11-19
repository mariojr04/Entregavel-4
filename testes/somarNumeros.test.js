const { somarNumeros } = require('../codigos/somatoria'); // Ajuste o caminho conforme necessário

test('deve somar corretamente os números fornecidos', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    somarNumeros(5, [10, 20, 30, 40, 50]);
    expect(console.log).toHaveBeenCalledWith("A soma dos 5 números é: 150");
  });
  
  test('deve retornar 0 para uma lista vazia', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    somarNumeros(0, []);
    expect(console.log).toHaveBeenCalledWith("A soma dos 0 números é: 0");
  });