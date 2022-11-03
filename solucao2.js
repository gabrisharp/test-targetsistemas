const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Digite o número: ', value =>{
    n = parseInt(value);
    calcFibonacci();
});

const fibonacci = [0, 1];
let n = 0;

function calcFibonacci (){
    let last = fibonacci.slice(-1)[0];
    while(last <= n){
        const newValue = last + fibonacci.slice(-2)[0];
        fibonacci.push(newValue);
        last = fibonacci.slice(-1)[0];
    }
    const exist = fibonacci.filter(value => value === n);
    if(exist.length > 0){
        return console.log(`${n} Faz parte da sequencia fibonacci`);
    } 
    return console.log(`${n} Não faz parte da sequencia fibonacci`);
}