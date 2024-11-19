const { gerarSequenciaFibonacci } = require('../codigos/fibonacci'); // Ajuste o caminho conforme necessário

test('deve gerar corretamente a sequência de Fibonacci', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    gerarSequenciaFibonacci(5);
    expect(console.log).toHaveBeenCalledWith("0,1,1,2,3");
  });
  
  test('deve gerar a sequência de Fibonacci corretamente para 3 termos', () => {
    console.log = jest.fn(); // Mock para interceptar o console.log
    gerarSequenciaFibonacci(3);
    expect(console.log).toHaveBeenCalledWith("0,1,1");
  });
