const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

function checkOrderName(orderName) {
  if (
    orderName === "vegetarian" ||
    orderName === "hawaiian" ||
    orderName === "pepperoni"
  ) {
    return true;
  } else {
    return false;
  }
}

function totalCost(orderQuantity) {
  const pizzaPrice = 80;
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function processOrder() {
  let orderName = document.getElementById("pizzaType").value;
  let orderQuantity = parseInt(document.getElementById("quantity").value);

  if (checkOrderName(orderName)) {
    let orderTotal = totalCost(orderQuantity);
    let minutesToCook = cookingTime(orderQuantity);

    let orderResult = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${minutesToCook} minutes.`;
    document.getElementById("orderResult").innerText = orderResult;
  } else {
    document.getElementById("orderResult").innerText =
      "Sorry, that pizza is not on the menu.";
  }
}
