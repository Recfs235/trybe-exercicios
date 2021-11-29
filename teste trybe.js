// function even_fibonacci_numbers(roof) {
//     // Write your code here
// let fibonacci=[1, 2];
// let num1=1;
// let num2=2;
// for (let i = 3; i <= roof; i++) {
//     fibonacci.push(num1+num2);
//     num1=i+1;
//     num2=i-1;

// }
// console.log(fibonacci)
// }

// even_fibonacci_numbers(10);


function nth_prime(n) {
    // Write your code here
let numeroprimo = [];
let numero = 1;
while (numeroprimo.length < n){
    if (numero %1 === 0 && numero % numero === 0){
    numeroprimo.push(numero);
    }
    numero = numero + 1;
}
console.log(numeroprimo);
}
nth_prime(6);