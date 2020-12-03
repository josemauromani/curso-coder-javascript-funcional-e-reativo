function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio);
    });
}

gerarNumerosEntre(1, 300000000)
    .then(valor => console.log(valor))
    .then(console.log)
