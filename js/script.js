document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".product-list");

  // Función para obtener los productos desde el servidor
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/dispositivos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      renderProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Función para renderizar los productos en la página
  const renderProducts = (products) => {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `
        <div class="product-card">
          <div class="product-image-container">
            <img src="${product.url_imagen}" alt="${product.modelo}">
          </div>
          <div class="product-details">
            <h3>${product.modelo}</h3>
            <p>Marca: ${product.marca}</p>
            <p>Precio: $${product.precio}</p>
            <div class="product-specs">
              <p>Tipo: ${product.tipo}</p>
              <p>Marca: ${product.marca}</p>
              <p>Modelo: ${product.modelo}</p>
              <p>Almacenamiento: ${product.almacenamiento}</p>
              <p>RAM: ${product.ram}</p>
              <p>Procesador: ${product.procesador}</p>
              <p>Pantalla: ${product.pantalla}</p>
              <p>Precio: $${product.precio}</p>
            </div>
          </div>
        </div>
      `;
      productList.appendChild(productItem);
    });
  };

  // Llamar a la función para obtener y renderizar los productos al cargar la página
  fetchProducts();
});

document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("nombre_usuario");
  const rol = localStorage.getItem("rol");
  const authButton = document.getElementById("auth-button");
  const registerButton = document.getElementById("register-button");
  const userAvatar = document.getElementById("user-avatar");

  // Verificar si el usuario está autenticado
  if (userName) {
    document.getElementById("user-name").textContent = userName;
    authButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Cerrar Sesión';
    authButton.onclick = handleLogout;
    registerButton.style.display = "none"; // Ocultar el botón de registro
    userAvatar.style.display = "inline-block"; // Mostrar el avatar
  } else {
    authButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesión';
    authButton.onclick = () => (window.location.href = "./vista/login.html");
    userAvatar.style.display = "none"; // Ocultar el avatar
  }

  // Mostrar el botón de administrador si el usuario tiene el rol de admin
  if (rol === "admin") {
    document.getElementById("admin-button").style.display = "inline-block";
  }
});

// Función para manejar el cierre de sesión
function handleLogout() {
  localStorage.removeItem("correo");
  localStorage.removeItem("rol");
  localStorage.removeItem("nombre_usuario");
  window.location.href = "./vista/login.html";
}

// Función para manejar el clic en el botón de autenticación
function handleAuthButtonClick() {
  const userName = localStorage.getItem("nombre_usuario");
  if (userName) {
    handleLogout();
  } else {
    window.location.href = "./vista/login.html";
  }
}
