function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

const doSomething = async () => {
  console.log(await dividirNumeros(2,2));
};

doSomething();