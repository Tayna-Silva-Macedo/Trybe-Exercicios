const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nomeEntrega = order.order.delivery.deliveryPerson;
  const comprador = order.name;
  const telefone = order.phoneNumber;
  const endereco = order.address.street;
  const numero = order.address.number;
  const complemento = order.address.apartment;
  
  return `Olá ${nomeEntrega}, entrega para: ${comprador}, Telefone: ${telefone}, R. ${endereco}, Nº: ${numero}, AP: ${complemento}.`
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  const novoComprador = order.name = 'Luiz Silva';
  const novoValor = order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;

  return `Olá ${novoComprador}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${novoValor},00.`;
  
};

console.log(orderModifier(order));
