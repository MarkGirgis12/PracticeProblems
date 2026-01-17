const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

// Display on the webpage
let html = `
    <div class="container">
        <h2>📋 Menu</h2>
        ${menu.map(pizza => `
            <div class="menu-item">
                <span>${pizza.name}</span>
                <span>$${pizza.price}</span>
            </div>
        `).join('')}
    </div>

    <div class="container">
        <h2>💰 Cash in Register</h2>
        <div class="cash-display">$${cashInRegister}</div>
    </div>

    <div class="container">
        <h2>📦 Order Queue</h2>
        ${orderQueue.length === 0 ? '<p>No orders yet</p>' : orderQueue.map(order => `
            <div class="order">
                <div class="order-id">Order #${order.id}: ${order.pizza.name}</div>
                <div>Price: $${order.pizza.price}</div>
                <div>
                    Status: 
                    <span class="order-status status-${order.status}">${order.status.toUpperCase()}</span>
                </div>
            </div>
        `).join('')}
    </div>
`

document.body.innerHTML += html