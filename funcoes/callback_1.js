
const somarNoTerminal = (a, b) => a + b;
const subtrairNoTerminal = (a,b) => a - b;

function exec(fn, a, b) {
    return fn(a, b);
}

console.log(exec(somarNoTerminal, 50, 30));
console.log(exec(subtrairNoTerminal, 100, 20));


const fn = () => console.log(Date.now());
setInterval(fn, 2000);