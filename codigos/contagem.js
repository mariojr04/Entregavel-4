function contarAprovados(n, notasAlunos) {
    let contador = 0;
  
    for (let i = 0; i < n; i++) {
      if (notasAlunos[i] >= 50) {
        contador++;
      }
    }
  
    console.log(`A quantidade de alunos que passaram no exame foi: ${contador}`);
  }
  
  module.exports = { contarAprovados };
  