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

const addTurnoNoite = (objetoParametro, chave, valor) => {
  const objeto = objetoParametro;
  objeto[chave] = valor;
};
addTurnoNoite(lesson2, 'turno', 'Noite');
console.log(lesson2);

const listarChaves = objetoParametro => {
  const objeto = Object.keys(objetoParametro);
  return objeto;
};
console.log(listarChaves(lesson2));

const tamanhoObjeto = objetoParametro => {
  const objeto = Object.keys(objetoParametro).length;
  return objeto;
};
console.log(tamanhoObjeto(lesson2));

const valorObjeto = objetoParametro => {
  const objeto = Object.values(objetoParametro);
  return objeto;
};
console.log(valorObjeto(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const getNumberOfStudents = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    //console.log(index);
    //console.log(array[index]);
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));