const menu = [
    {name: "Margherita", price: 8.5},
    {name: "Pepperoni", price: 9.5},
    {name: "Hawaiian", price: 10.0},
    {name: "Veggie", price: 9.0},
    {name: "BBQ Chicken", price: 11.0}  
]
const cashRegister = 100 
const nextOrderId = 1
const order = []
 /** 
  * Challenge: Add a utility function "addNewPizza" to take a pizza object 
  * and adds it to the menu array.
  */

 function addNewPizza(pizza) {
    menu.push(pizza);
 }
/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName) 
    
    cashRegister += selectedPizza.price
    const orderObject = { id:nextOrderId++, pizza: selectedPizza, status: "ordered" }
    order.push(orderObject)
    return orderObject
}   
/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
function completeOrder(orderId) {
    const orderToComplete = order.find(order => order.id === orderId)
    orderToComplete.status = "completed"
    return orderToComplete
}
addNewPizza({name: "Meat Lovers", price: 12.0})
addNewPizza({name: "Supreme", price: 11.5}) 
addNewPizza({name: "Buffalo Chicken", price: 12.5})

placeOrder("Pepperoni")
completeOrder(1) 

console.log("Menu:", menu)
console.log("Cash in Register:", cashRegister)
console.log("Order Queue:", order)

//# sourceMappingURL=index.js.map

