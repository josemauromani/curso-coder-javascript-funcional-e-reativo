const fs = require('fs');
const path = require('path');

const arquivo = path.join(__dirname, 'dados.txt');

function lerArquivo(erro, conteudo) {
    console.log(conteudo.toString());
}
console.log('inicio ... ');
fs.readFile(arquivo, lerArquivo);
fs.readFile(arquivo, (_, conteudo) => console.log(conteudo.toString()));
console.log('fim ... ');


console.log('inicio sync... ');
const conteudo = fs.readFileSync(arquivo);
console.log(conteudo.toString());
console.log('Fim sync ... ');