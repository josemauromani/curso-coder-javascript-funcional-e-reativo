let a = 1; 

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    });
});

p.then(valor => valor.x)
    .then(valor => console.log(valor))


