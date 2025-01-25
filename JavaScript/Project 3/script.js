document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
    { id: 7, name: "Product 7", price: 700 },
    { id: 8, name: "Product 8", price: 800 },
    { id: 9, name: "Product 9", price: 900 },
    { id: 10, name: "Product 10", price: 1000 },
  ];

  const cart = [];
  const countFreq = {};

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  function renderProducts() {
    products.forEach((product) => {
      const item = document.createElement("div");
      item.classList.add("product");
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button data-id="${product.id}">Add to Cart</button>
      `;
      productList.appendChild(item);
    });
  }
  renderProducts();

  productList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      if (!countFreq[productId]) {
        countFreq[productId] = 1;
        const product = products.find((product) => product.id === productId);
        cart.push({ ...product });
      } else {
        countFreq[productId]++;
      }
      renderCart();
    }
  });

  function renderCart() {
    cartItems.innerHTML = "";
    if (Object.keys(countFreq).length > 0) {
      let total = 0;
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((product) => {
        const quantity = countFreq[product.id];
        total += product.price * quantity;
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
          <span>${product.name}</span> - 
          <span>$${product.price} x ${quantity}</span> = 
          <span>$${product.price * quantity}</span>
        `;
        cartItems.appendChild(item);
      });
      totalPrice.innerHTML = `$${total}`;
    } else {
      emptyCart.classList.remove("hidden");
      cartTotal.classList.add("hidden");
    }
  }

  checkoutBtn.addEventListener("click", function () {
    alert("Thank you for shopping with us!");
    cart.length = 0;
    Object.keys(countFreq).forEach((key) => delete countFreq[key]);
    renderCart();
  });
});
