// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53
const data = [
    {uf: 'SP', value: 67836.43 },
    {uf: 'RJ', value: 36678.66 },
    {uf: 'MG', value: 29229.88 },
    {uf: 'ES', value: 27165.48 },
    {uf: 'Outros', value: 19849.53 },
]

function soma(){
    let sum = 0;
    data.forEach( i => sum += i.value);
    return sum;
}

function percent(){
    console.log('Participação por estado:');
    const sum = soma();
    data.forEach( i =>{
        const percent = i.value*100 /sum;
        console.log(`${i.uf} porcentagem: ${percent.toFixed(2)}%`);
    });
}

percent();
