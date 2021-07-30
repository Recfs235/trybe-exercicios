console.log('Exercicio 1');
let n = 5;
let impressao = [];

for (let index = 1; index <=n; index +=1){
    for (let index2 = 1; index2 <=n; index2 +=1){
    impressao += '*';
    }
    console.log(impressao);
    impressao = [null];
}


console.log('Exercicio 2');
for (let index3 = 1; index3 <=n; index3 +=1){
    for (let index4 = 1; index4 <=index3; index4 +=1){
    impressao += '*';
    }
    console.log(impressao);
    impressao = [null];
}


console.log('Exercicio 3');
for (let index5 = 1; index5 <=n; index5 +=1){
    for (let index6 = 1; index6 <=(n-index5); index6 +=1){
    impressao += ' ';
    }
    for (let index7 = 1; index7 <=index5; index7 +=1){
    impressao += '*';
    }

    console.log(impressao);
    impressao = [null];
}


