const data = require('./dados.json');

function maxValue(){
    let max = 0;
    const reordened = data.forEach((i)=>{
        max = i.valor>max ? i.valor : max;
    });
    console.log('Valor máximo: ', max);
}

function minValue(){
    let min = Infinity;
    data.forEach((i)=>{
       if(i.valor !== 0 && min > i.valor){
        min = i.valor
       }
    });
    console.log('Valor Mínimo não zero: ', min);
}

function medValue(){
    let total = 0;
    let n = 0;
    data.forEach( i =>{
        if(i.valor !== 0){
            n++;
            total += i.valor;
        }
    });
    console.log(total / n);
    return total / n;
}
function daysAboveMed(){
    let n = 0;
    const med = medValue();
    data.forEach( i =>{
        if(i.valor !== 0 && i.valor > med) n++;
    })
    console.log(`Dias de faturamento acima da média ${n}`);
}

maxValue();
minValue();
daysAboveMed();

