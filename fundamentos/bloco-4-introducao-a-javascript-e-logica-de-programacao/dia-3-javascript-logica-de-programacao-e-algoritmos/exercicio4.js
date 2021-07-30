console.log('Exercicio 4');
let n = 9;
let pintado = Math.trunc(n/2);
let impressao = [];

for (let index = 1; index <=n; index +=1){
    for (let index2 = 1; index2 <=pintado; index2 +=1){
    impressao += ' ';
    }
    for (let index4 = 1; index4 <=index; index4 +=1){
    impressao += '*';
    }

    for (let index3 = 1; index3 <=pintado; index3 +=1){
    impressao += ' ';
    }
     
    console.log(impressao);
    impressao = [null];

    pintado -= 1; //3

    for (let index4 = 1; index4 <=index; index4 +=1){
    impressao += ' ';
    }

    if (pintado < 1){
        impressao += '*';
        for (let index5 = 1; index5 <=Math.trunc(n/2); index5 +=1){
        impressao += '*';
        }
        console.log (impressao);
        break;
    }
}
