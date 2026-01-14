// Data
let shoppingList = [];

// DOM Nodes
let inputItem = document.getElementById("input-list-item");
let addItemBtn = document.getElementById("add-item-btn");
let removeLastBtn = document.getElementById("remove-item-btn");
let viewListBtn = document.getElementById("view-list-btn");
let filterBtn = document.getElementById("filter-btn");

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
function displayList() {
  shoppingList.forEach((item) => console.log(item));
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

// ======================
// EVENT LISTENERS
// ======================

// Add Event
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

// Remove Last Item Button
removeLastBtn.addEventListener("click", function () {
  shoppingList.pop();
  renderCart();
});

// View List Button (console-only)
viewListBtn.addEventListener("click", function () {
  displayList();
});

// Filter Button
filterBtn.addEventListener("click", function () {
  let searchWord = prompt("Enter item to search for:");
  if (!searchWord) {
    return;
  }
  let results = filterItems(searchWord);
  alert(results);
  console.log("Search Results: " + results);
});
