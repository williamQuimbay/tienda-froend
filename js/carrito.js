document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.querySelector(".cart-list");

  // Función para obtener los productos del carrito desde localStorage
  const getCartProducts = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  // Función para renderizar los productos en el carrito
  const renderCartProducts = () => {
    const products = getCartProducts();
    cartList.innerHTML = "";
    products.forEach((product, index) => {
      const productItem = document.createElement("div");
      productItem.classList.add("cart-item");
      productItem.innerHTML = `
          <div class="cart-product-card">
            <div class="cart-product-image-container">
              <img src="${product.url_imagen}" alt="${product.modelo}">
            </div>
            <div class="cart-product-details">
              <h3>${product.modelo}</h3>
              <p>Marca: ${product.marca}</p>
              <p>Precio: $${product.precio}</p>
              <button class="remove-from-cart-button" data-index="${index}">
                <i class="fas fa-trash"></i> Eliminar
              </button>
            </div>
          </div>
        `;
      cartList.appendChild(productItem);
    });

    // Añadir eventos de clic a los botones de eliminar
    document.querySelectorAll(".remove-from-cart-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        removeProductFromCart(index);
      });
    });
  };

  // Función para eliminar un producto del carrito
  const removeProductFromCart = (index) => {
    const products = getCartProducts();
    products.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(products));
    renderCartProducts();
  };

  // Renderizar los productos del carrito al cargar la página
  renderCartProducts();
});
