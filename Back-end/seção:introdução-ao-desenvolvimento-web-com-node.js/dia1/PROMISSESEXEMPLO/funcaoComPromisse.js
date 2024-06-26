function calcularDivisão(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if(num2 == 0) reject(new Error("Não pode dividir um número por zero"));

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisão(2, 0)
  .then((result) => console.log(result))
  .catch(err => console.log("erro: %s", err.message))

