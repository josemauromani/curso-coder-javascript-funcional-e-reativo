// Function declaration 
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// Funtcion expression 
const boaTarde = function () {
    console.log('Boa tarde')
}

boaTarde()
// ------------------------

function somar(a,b) {
    return a +  b
}

const resultado = somar(2,5)
console.log(resultado)

const resultado1 = somar(2,4,5,78,9)
console.log(resultado1)

const resultado2 = somar(2)
console.log(resultado2)

const resultado3 = somar()
console.log(resultado3)