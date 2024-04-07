function calcularDivisão(num1, num2) {
  if(num2 == 0) throw new Error('Não pode ser feito uma divisão por zero');

  const resultado = num1 / num2;

  return resultado;
}
try {
  const resultado = calcularDivisão(2, 2)
  console.log("resultado: %s", resultado);
} catch (e) {
  console.log("erro: %s", e.message);
}
