// script.js

// Get the quantity display element
const quantityDisplay = document.getElementById('product_quantity');

let quantity = 0;

// Function to update the quantity display
function updateQuantityDisplay() {
  quantityDisplay.textContent = quantity;
}

// Function to increase quantity
function increaseQuantity() {
  quantity++;
  updateQuantityDisplay();
}

// Function to decrease quantity
function decreaseQuantity() {
  if (quantity > 0) {
    quantity--;
    updateQuantityDisplay();
  }
}

// Add event listeners to the buttons
document.querySelectorAll('.quantity-btn').forEach((button) => {
  button.addEventListener('click', function (event) {
    if (event.target.textContent === "+") {
      increaseQuantity();
    } else if (event.target.textContent === "-") {
      decreaseQuantity();
    }
  });
});
let cartquantity=0;
document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    quantity=quantityDisplay.textContent;
    
    if (quantity > 0) {
      cartquantity=quantity;
      document.getElementById("cart_top").style.display="block";
      document.getElementById("cart_top").textContent=cartquantity;
      document.getElementById("cart_full").style.display="block";
      document.getElementById("cart_empty").style.display="none";
      document.getElementById("cart_quantity").textContent=quantity;
      document.getElementById("cart_total").textContent=quantity*125;
    }
    
  });
document.querySelector('.delete_icon').addEventListener('click', function() {
      quantity=0;
      document.getElementById("cart_full").style.display="none";
      document.getElementById("cart_empty").style.display="block";
      document.getElementById("cart_top").style.display="none";
      
    
  });  
// Initialize the quantity display
updateQuantityDisplay();
