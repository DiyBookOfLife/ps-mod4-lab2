// empty shopping list
let shoppingList = [];
let inputItem = document.getElementById("input-list-item");
let addItemBtn = document.getElementById("add-item-btn");

  // Function to add item
function addItem(item) {
  if (shoppingList.includes(item)){
    alert('Item already added. Add another item')
  } else {
  shoppingList.push(item);
  }
}

// Function to remove item
function removeLastItem() {
  shoppingList.pop();
}

// Function to log items in shoppingList
function displayList() {
  console.log(shoppingList);
}

