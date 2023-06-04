const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

  // Adiciona espaços em branco antes dos asteriscos
    for (let j = 1; j <= n - i; j++) {
    row += ' ';
    }

  // Adiciona os asteriscos
    for (let k = 1; k <= i; k++) {
        row += '*';
    }

    console.log(row);
}
