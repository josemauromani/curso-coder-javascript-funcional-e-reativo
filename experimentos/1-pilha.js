/**
 * Visualizando a pilha de execução e event queue
 */

function fn5() {
    console.log('função f5')
    console.log('timeout')
}

function fn4() {
    console.log('função f4')
    fn5()    
}


function fn3() {
    setTimeout(() => fn4(),3000)
    console.log('Função 3')
}


function fn2() {
    fn3()
}


function fn1() {
    fn2()
}

function main() {
    fn1()
}

main()
console.log('fim')