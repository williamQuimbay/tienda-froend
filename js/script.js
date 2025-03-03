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

document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("nombre_usuario");
  const rol = localStorage.getItem("rol");
  const authButton = document.getElementById("auth-button");
  const registerButton = document.getElementById("register-button");

  if (userName) {
    document.getElementById(
      "user-name"
    ).textContent = `Bienvenido, ${userName}`;
    authButton.textContent = "Cerrar Sesión";
    authButton.onclick = handleLogout;
    registerButton.style.display = "none"; // Ocultar el botón de registro
  } else {
    authButton.textContent = "Iniciar Sesión";
    authButton.onclick = () => (window.location.href = "./vista/login.html");
  }

  if (rol === "admin") {
    document.getElementById("admin-button").style.display = "inline-block";
  }
});

function handleLogout() {
  localStorage.removeItem("correo");
  localStorage.removeItem("rol");
  localStorage.removeItem("nombre_usuario");
  window.location.href = "index.html";
}

function handleAuthButtonClick() {
  const userName = localStorage.getItem("nombre_usuario");
  if (userName) {
    handleLogout();
  } else {
    window.location.href = "index.html";
  }
}
