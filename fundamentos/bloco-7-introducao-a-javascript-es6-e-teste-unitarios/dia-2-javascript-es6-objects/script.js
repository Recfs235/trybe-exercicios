  // Parte I
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const objeto = order;
    console.log(`Olá ${objeto.order.delivery.deliveryPerson}, entrega para: ${objeto.name}, Telefone: ${objeto.phoneNumber}, ${objeto.address.street}, Nº. ${objeto.address.number}, AP. ${objeto.address.apartment}`);
  }
  customerInfo(order);
  
  const orderModifier = (order) => {
    const objeto = order;
    objeto.name = 'Luiz Silva';
    objeto.payment.total = '50';
    const pedido = Object.keys(objeto.order.pizza);

  console.log(`Olá ${objeto.name}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${objeto.order.drinks.coke.type} é R$ ${objeto.payment.total},00.`);
  }
  orderModifier(order);

  // Parte II
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurnoManha = (objetoParametro, chave, valor) => {
    const objeto = objetoParametro;
    objeto[chave] = valor;
  }
  // addTurnoManha(lesson2, 'turno', 'Manhã');
  // console.log(lesson2);

  const listarChaves = (objetoParametro) => {
    const objeto = Object.keys(objetoParametro);
    return objeto;
  }
  // console.log(listarChaves(lesson2));

  const tamanhoObjeto = (objetoParametro) => {
    const objeto = Object.keys(objetoParametro).length;
    return objeto;
  }
  // console.log(tamanhoObjeto(lesson2));

  const valorObjeto = (objetoParametro) => {
    const objeto = Object.values(objetoParametro);
    return objeto;
  }
  // console.log(valorObjeto(lesson2));

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  // console.log(allLessons);



//   8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
//   console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

//   6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  // console.log(array);
  for (index in array) {
    // console.log (array[index]);
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

//   7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//   console.log(getValueByNumber(lesson1, 0));
//   // Output: 'Matématica'

const getValueByNumber = (obj,number) => Object.values(obj)[number];
getValueByNumber(lesson1, 0);