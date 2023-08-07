const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui

people.sort((a, b) => {
  let idadeA = a.age;
  let idadeB = b.age;

  if (idadeA < idadeB) {
    return -1;
  } else if (idadeA > idadeB) {
    return 1;
  } else {
    return 0;
  }
});
console.log(people);