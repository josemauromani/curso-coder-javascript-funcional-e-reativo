/**
 * Arrow Functions 
 */
const msg = () => console.log('Mensagem de teste');
msg();

const saudacao = nome => `E ae ${nome} blz?`;
console.log(saudacao('José Mauro'));

const somar = (numeros) => {
    let total = 0; 
    for(let n of numeros) {
        total += n; //
    }
    return total;
}
console.log(somar([10,20,30]));

const potencia = base => exp => Math.pow(base, exp);
console.log(potencia(2)(2));

Array.prototype.log = function() {
    console.log('log criado');
}

Array.prototype.ultimo = function() {
    console.log(this[this.length-1]);
}

Array.prototype.primeiro = function() { console.log(this[0]) };

const numeros = [1,2,3,50];
numeros.log();
numeros.ultimo();
numeros.primeiro();