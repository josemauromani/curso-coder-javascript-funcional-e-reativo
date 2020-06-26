function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function() {
    console.log('Boa Tarde')
}

function executarQualquerCoisa(fn) {
    if (typeof fn === typeof Function)  {
        fn()
    } else {
        //throw Error('Deu ruim')
    }
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa(3)

// ------------------------------------------

function potencia(base) {
    //return Math.pow(base,expoente)
    return function (expoente) {
        return Math.pow(base,expoente)
    }
}
const bits = potencia(2)
console.log(bits(8))

console.log(potencia(2)(8))
