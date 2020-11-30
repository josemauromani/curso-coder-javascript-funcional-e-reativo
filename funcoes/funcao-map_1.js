/**
 * O objetivo da função MAP é transformar os dados de um Array para outro Array
 */

const numeros = [1, 2, 3, 4];
console.log(numeros);

const dobro = numeros.map((value) => value*2);
console.log(dobro);

// map com strings

const nomes = ['José', 'Erika', 'Isabel', 'Sara'];
const letras = nomes.map((nome) => nome[0]);
console.log(nomes, letras);

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 1, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 2, preco: 19.22 },
];

const produtos = carrinho.map((valor) => valor['nome']);
console.log(produtos);

const totalCarrinho = carrinho.map((valor) => valor['qtde'] * valor['preco']);
console.log(totalCarrinho);

const getNome = item => item.nome;
console.log(carrinho.map((valor) => getNome(valor)));

const calculaValorItem = item => item.qtde * item.preco;
console.log(carrinho.map(valor => calculaValorItem(valor)));

/**
 * funcao map criada manualmente
 */

 Array.prototype.meuMap = function(fn) {
     const novoArray = [];
     for(let i = 0; i < this.length; i++) {
        const resultado = fn(this[i], i, this) 
         novoArray.push(resultado)
     }
     return novoArray;
 }


const getNome2 = item => item.nome;
console.log(carrinho.meuMap((valor) => getNome2(valor)));

const calculaValorItem2 = item => item.qtde * item.preco;
console.log(carrinho.meuMap(valor => calculaValorItem2(valor)));