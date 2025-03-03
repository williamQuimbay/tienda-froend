document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-list");

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/productos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      renderProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const renderProducts = (products) => {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
              <img src="${product.url_Imagen}" alt="${product.modelo}">
              <h3>${product.modelo}</h3>
              <p>Marca: ${product.marca}</p>
              <p>Precio: $${product.precio}</p>
          `;
      productList.appendChild(productItem);
    });
  };

  fetchProducts();
});
