const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 1, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 2, preco: 19.22 },
];


Array.prototype.meuReduce = function (fn, inicial) {
    let acc = inicial;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], this);
    }
    return acc;
}


const getTotal = item => item.qtde * item.preco;
const somar = (acc, el) => {
    return acc + el;
}

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar);

console.log(totalGeral);


const totalGeral2 = carrinho
    .map(getTotal)
    .reduce(somar);

console.log(totalGeral2);
