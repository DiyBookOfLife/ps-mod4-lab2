// Data
let shoppingList = [];

// DOM Nodes
let inputItem = document.getElementById("input-list-item");
let addItemBtn = document.getElementById("add-item-btn");
const cartList = document.getElementById("cart");

// Add Item
function addItem(item) {
  if (shoppingList.includes(item)) {
    alert("Item already added. Add another item");
  } else {
    shoppingList.push(item);
  }
}

// Remove Last Item
function removeLastItem() {
  shoppingList.pop();
}

// Display List (console-only)
function displayList() {
  shoppingList.forEach((i) => console.log(i));
}

// Filter Items
function filterItems(word) {
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(word.toLowerCase())
  );
}

// Render Cart
function renderCart() {
  cartList.innerHTML = "";
  for (let i = 0; i < shoppingList.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = shoppingList[i];
    cartList.appendChild(listItem);
  }
}

// Event Listeners
addItemBtn.addEventListener("click", function () {
  const item = inputItem.value.trim();
  if (item === "") {
    alert("Please enter an item.");
    return;
  }

  addItem(item);
  renderCart();
  inputItem.value = "";
});

