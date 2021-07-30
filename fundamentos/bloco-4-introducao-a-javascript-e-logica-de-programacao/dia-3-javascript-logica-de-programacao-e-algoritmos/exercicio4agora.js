console.log('Exercicio 4');
let n = 9;
let pintado = Math.trunc(n/2);
let impressao = [];


console.log(pintado);


for (let index = 1; index <=n; index +=1){
    for (let index2 = 1; index2 <=pintado; index2 +=1){
    impressao += '*';
    }
    impressao += '*';
    for (let index3 = 1; index3 <=pintado; index3 +=1){
    impressao += '*';
    }
    pintado -= 1; //3
    
    console.log(impressao);
    impressao = [null];

    for (let index3 = 1; index3 <=index; index3 +=1){
    impressao += ' ';
    }

    if (pintado < 1){
        impressao += '*';
        console.log (impressao);
        break;
    }
}
