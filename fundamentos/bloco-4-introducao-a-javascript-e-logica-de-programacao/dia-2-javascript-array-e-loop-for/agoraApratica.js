let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('Exercicio 1 - Utilizar a console.log()');
console.log(numbers);


console.log('Exercicio 2 - Somando todos os valores do Array');
let resultado = 0;
for (let contador = 0; contador < numbers.length; contador +=1){
resultado = resultado + numbers[contador];
}

console.log(resultado);


console.log('Exercicio 3 - Calculando a Media dos valores do Array');
let resultado2 = 0;
let media = 0;
for (let contador2 = 0; contador2 < numbers.length; contador2 +=1){
resultado2 = resultado2 + numbers[contador2];
}
media = resultado2/numbers.length;
console.log(media);

console.log('Exercicio 4 - Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"');
if(media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}


console.log('Exercicio 5 - Imprimindo com for o maior valor contido no array');
let maior = 0;
for (let contador3 = 0; contador3 < numbers.length; contador3 +=1){
    if (numbers[contador3] > maior) {
    maior = numbers[contador3];
    }
}
console.log(maior);


console.log('Exercicio 6 - Quantos valores são ímpares e imprimir o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado');
let impar = 0;
for (let contador4 = 0; contador4 < numbers.length; contador4 +=1){
    if (numbers[contador4]%2 != 0) {
    impar += 1;
    }
}
if (impar === 0){
    console.log('Nenhum valor ímpar encontrado');
} else {
console.log(impar);
}


console.log('Exercicio 7 - Qual é o menor valor do array utilizando for');
let menor = numbers[0];
for (let contador5 = 0; contador5 < numbers.length; contador5 +=1){
    if (numbers[contador5] < menor) {
    menor = numbers[contador5];
    }
}
console.log(menor);


console.log('Exercicio 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado');
for (let contador6 = 1; contador6 <= 25; contador6 +=1){
console.log(contador6);   
}

console.log('Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2');
let conta = 0;
for (let contador7 = 1; contador7 <= 25; contador7 +=1){
    console.log(contador7);
    conta = contador7/2;
    console.log(conta);   
}