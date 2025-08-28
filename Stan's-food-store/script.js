// =======================
// Stan's Food Store Script
// =======================

// ======================= Part 1: Variables and Conditionals =======================
// I am declaring an inventory variable with some food items
let inventory = ["Apples", "Bananas", "Carrots", "Tomatoes", "Milk", "Bread"];

// I am declaring an empty cart for users
let cart = [];

// I am using a conditional to check if the inventory is empty
if (inventory.length === 0) {
  console.log("I notice that the store is currently out of stock.");
} else {
  console.log("I have fresh items available for you!");
}


// ======================= Part 2: Custom Functions =======================
// I am creating a function to display items in the inventory
function displayInventory() {
  let itemList = document.getElementById("item-list");
  itemList.innerHTML = "";
  inventory.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    // I am adding a button for each item so I can add it to my cart
    let addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.onclick = function () {
      addToCart(item);
    };
    li.appendChild(addButton);
    itemList.appendChild(li);
  });
}

// I am creating a function to add items to my cart
function addToCart(item) {
  cart.push(item);
  displayCart();
}


// ======================= Part 3: Loops =======================
// I am using a loop to display the cart items
function displayCart() {
  let cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  // I am looping through the cart items
  for (let i = 0; i < cart.length; i++) {
    let li = document.createElement("li");
    li.textContent = cart[i];
    cartList.appendChild(li);
  }
}

// I am using another loop (while loop) to count the items in my cart
function cartSummary() {
  let count = 0;
  let i = 0;
  while (i < cart.length) {
    count++;
    i++;
  }
  return count;
}


// ======================= Part 4: DOM Interactions =======================
// I am displaying the initial inventory on the webpage
displayInventory();

// I am adding an event listener for the checkout button
document.getElementById("checkout-btn").addEventListener("click", function () {
  let totalItems = cartSummary();

  // I am interacting with the DOM to show a checkout message
  let checkoutMessage = document.createElement("p");
  checkoutMessage.textContent = "I have " + totalItems + " item(s) in my cart. Thank you for shopping at Stan's Food Store!";
  
  document.body.appendChild(checkoutMessage);
});

// I am dynamically updating the DOM whenever I add an item
displayCart();
