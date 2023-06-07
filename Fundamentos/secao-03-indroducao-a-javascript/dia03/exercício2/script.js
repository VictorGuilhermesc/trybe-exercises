let order = {
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
        },
        },
        drinks: {
            coke: {
            type: 'Coca-Cola Zero',
            price: 10,
            amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
    total: 60,
    },
};

let customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    let deliveryPerson = fullOrder.order.delivery.deliveryPerson
    let customerName = fullOrder.name
    let  customerPhone = fullOrder.phoneNumber
    let customerAdressStreet = fullOrder.address.street
    let customerAdressNumber = fullOrder.address.number
    let customerAddressApartment = fullOrder.address.apartment

    return `Olá, ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, ${customerAdressStreet}, Número: ${customerAdressNumber}, AP: ${customerAddressApartment}.`
    


}

console.log(customerInfo(order));


let orderModifier = (fullOrder) => { 

    let customerName = 'Luiz Silva'
    fullOrder.name = customerName
    
    let orderPizza = Object.keys(fullOrder.order.pizza)
    let orderDrinks = fullOrder.order.drinks
    const orderTotal = fullOrder.payment.total = 50

    return `Olá, ${customerName}, o valor total de seu pedido de ${orderPizza.join(', ')} e ${orderDrinks.coke.type} é R$ ${orderTotal.toFixed(2)}.`

}

console.log(orderModifier(order));
