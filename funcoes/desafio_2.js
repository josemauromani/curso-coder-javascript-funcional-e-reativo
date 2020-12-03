const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 2, preco: 19.22, fragil: true },
];

/**
 *  1. fragil = true
 *  2. qtde: 4  e preço  => total 
 *  3 . media dos valores totais 
 */

// 1 
const response = carrinho
    .filter((item) => item.fragil)
    .map((item) => item.qtde * item.preco)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1;
        const novoTotal = acc.total + el;
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde,
        };
    }, { qtde: 0, total: 0, media:0 }
    )


console.log(response);
/**
// 2 
const totalItem = (item) => {
    return `Quantidde: ${item.qtde} - Valor Unitário: R$ ${item.preco} = Total - R$ ${item.qtde * item.preco}`
}
const totaisProdutos = carrinho.map(totalItem);
console.log(totaisProdutos);


const totais = (item) => item.qtde * item.preco;
const media = (acc, el, array) => {
    total = acc + el;
    return (acc + el)
}

console.log(carrinho.map(totais).reduce(media));
*/