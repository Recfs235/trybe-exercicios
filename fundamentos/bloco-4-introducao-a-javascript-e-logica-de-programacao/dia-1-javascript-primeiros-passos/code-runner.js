//console.log('Hello');
//console.log('Javascript é maravilhoso');
//console.log('Javascript é sensacional');

// const team = 12;
// let cohort = 15;

// o sinal = está atribuindo o valor na variavel

// tipos de primitivos: number, string, boolen, null, undefined

let a=12;
let b=10;

console.log('Exercicio 1: ');
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log('Exercicio 2 - Comparaçao de dois numeros:');
if (a>b){
console.log(a);
} else {
console.log(b);
}


let c=15;

console.log('Exercicio 3 - Comparando 3 numeros: ');
if (a>b && a>c){
console.log(a);
} else {
    if (b>a && b>c){
        console.log(b);
    } else{
        console.log(c);
    }
}

console.log('Exercicio 4 - Positivo ou Negativo: ');
if (a > 0){
    console.log(Positivo);
    } else {
        if (a>0){
            console.log(Negativo);
        } else{
            console.log('0');
        }
    }


console.log('Exercicio 5 - Angulos de um triangulo');
let d = 60;
let e = 50;
let f = 40;

if (d>0 && e>0 && f>0 && d+e+f <=180){
    console.log(true);
} else{
    console.log(false);
}


console.log('Exercicio 6 - Xadrez');
let peca = 'rainhas';

peca = peca.toLowerCase();

switch(peca){
    case 'rei':
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;
    case 'rainha':
    console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
    case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
    case 'cavalo':
    console.log('O cavalo é a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
    case 'torre':
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;
    case 'peão':
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;
}

if (peca != 'rei' && peca != 'rainha' && peca != 'bispo' && peca != 'cavalo' && peca != 'torre' && peca != 'peão'){
    console.log('Não é uma peça valida - ERRO');
}
  


console.log('Exercicio 7 - Conversão de notas');
let nota = 99;

if (nota < 0 || nota > 100){
console.log('ERRO - Nota passada não pode ser menor que 0 ou maior que 100.');
} else {
    if (nota >= 90){
    console.log('A');
    } else {
        if (nota >= 80){
        console.log('B');
        } else {
            if (nota >= 70){
            console.log('C');
            } else {
                if (nota >= 60){
                console.log('D');
                } else {
                    if (nota >= 50){
                    console.log('E');
                    } else {
                        console.log('F');
                    }
                }
            }
        }
    }
}


console.log('Exercicio 8');
let num1 = 1;
let num2 = 3;
let num3 = 5;

if (num1%2 == 0 || num2%2 == 0 || num3%2 == 0){
console.log(true);
} else {
    console.log(false);
}

console.log('Exercicio 9');
let num4 = 2;
let num5 = 4;
let num6 = 6;

if (num4%2 != 0 || num5%2 != 0 || num6%2 != 0){
console.log(true);
} else {
    console.log(false);
}



console.log('Exercicio 10');
let custoProduto = 100;
let valorVenda = 250;

if (custoProduto <0 || valorVenda < 0){
console.log('Erro - valores são menores do que zero');
} else {
    console.log('O lucro da empresa com a venda de mil produtos é '+(valorVenda - 1.2*custoProduto)*1000);
}



console.log('Exercicio 11 - INSS');
let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

if (salarioBruto <1556.94){
salarioBase = salarioBruto - 0.08*salarioBruto;
} else {
    if (salarioBruto >=1556.95 && salarioBruto <=2594.92){
        salarioBase = salarioBruto - 0.09*salarioBruto;
    } else {
        if (salarioBruto >=2594.93 && salarioBruto <=5189.82){
            salarioBase = salarioBruto - 0.11*salarioBruto;
        } else {
            salarioBase = salarioBruto - 570.88;    
        }
    }
}


if (salarioBase < 1903.98){
console.log('Isento de imposto de renda');
} else {
    if (salarioBase >=1903.99 && salarioBase <=2826.65){
    salarioLiquido = salarioBase - (0.075*salarioBase - 142.80)
    } else {
        if (salarioBase >=2826.66 && salarioBase <=3751.05){
        salarioLiquido = salarioBase - (0.15*salarioBase - 354.80)    
        } else {
            if (salarioBase >=3751.06 && salarioBase <=4664.68){
            salarioLiquido = salarioBase - (0.225*salarioBase - 636.13)
            } else {
                salarioLiquido = salarioBase - (0.275*salarioBase - 869.36)
            }
        }
    }
console.log('Resultado: R$'+salarioLiquido);
}