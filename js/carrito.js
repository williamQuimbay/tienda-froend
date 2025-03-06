// Función para formatear precios con separadores de mil y símbolo de pesos
const formatPrice = (price) => {
  return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.querySelector(".cart-list");
  const emptyCartMessage = document.querySelector(".empty-cart-message");
  const checkoutButton = document.getElementById("checkout-button");
  const totalCostElement = document.querySelector(".total-cost");
  const totalAmountElement = document.getElementById("total-amount");

  // Función para obtener los productos del carrito desde localStorage
  const getCartProducts = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  // Función para renderizar los productos en el carrito
  const renderCartProducts = () => {
    const products = getCartProducts();
    cartList.innerHTML = "";
    let totalAmount = 0;

    if (products.length === 0) {
      emptyCartMessage.style.display = "block";
      checkoutButton.style.display = "none";
      totalCostElement.style.display = "none";
    } else {
      emptyCartMessage.style.display = "none";
      checkoutButton.style.display = "block";
      totalCostElement.style.display = "block";

      products.forEach((product, index) => {
        totalAmount += product.precio;

        const productItem = document.createElement("div");
        productItem.classList.add("cart-item");
        productItem.innerHTML = `
          <div class="cart-product-image-container">
            <img src="${product.url_imagen}" alt="${product.modelo}">
          </div>
          <div class="cart-product-details">
            <h3>${product.modelo}</h3>
            <p>Marca: ${product.marca}</p>
            <p>Precio: ${formatPrice(product.precio)}</p>
            <button class="remove-from-cart-button" data-index="${index}">
              <i class="fas fa-trash"></i> Eliminar
            </button>
          </div>
        `;
        cartList.appendChild(productItem);
      });

      totalAmountElement.textContent = formatPrice(totalAmount);

      // Añadir eventos de clic a los botones de eliminar
      document
        .querySelectorAll(".remove-from-cart-button")
        .forEach((button) => {
          button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            removeProductFromCart(index);
          });
        });
    }
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

  // Función para generar el PDF de la factura
  const generatePDF = (products, totalAmount) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Información del cliente
    const userName = localStorage.getItem("nombre_usuario") || "Cliente";
    const userEmail = localStorage.getItem("correo") || "correo@ejemplo.com";
    const currentDate = new Date().toLocaleDateString();

    // Encabezado de la factura
    doc.setFontSize(18);
    doc.text("Factura de Compra", 20, 20);

    // Información del cliente
    doc.setFontSize(12);
    doc.text(`Nombre: ${userName}`, 20, 30);
    doc.text(`Correo: ${userEmail}`, 20, 40);
    doc.text(`Fecha: ${currentDate}`, 20, 50);

    // Tabla de productos
    doc.setFontSize(14);
    doc.text("Productos Comprados:", 20, 60);

    doc.setFontSize(12);
    let y = 70;
    products.forEach((product, index) => {
      doc.text(`Producto ${index + 1}: ${product.modelo}`, 20, y);
      doc.text(`Marca: ${product.marca}`, 20, y + 10);
      doc.text(`Precio: ${formatPrice(product.precio)}`, 20, y + 20);
      y += 30;
    });

    // Total de la compra
    doc.setFontSize(14);
    doc.text(`Total: ${formatPrice(totalAmount)}`, 20, y + 10);

    return doc.output("blob");
  };

  // Función para manejar el clic en el botón de proceder al pago
  const handleCheckout = () => {
    const products = getCartProducts();
    const totalAmount = products.reduce(
      (sum, product) => sum + product.precio,
      0
    );
    const pdfBlob = generatePDF(products, totalAmount);
    const userEmail = localStorage.getItem("correo");

    if (userEmail) {
      sendEmail(pdfBlob, userEmail);
    } else {
      alert("No se encontró un correo electrónico registrado.");
    }
  };

  // Añadir evento de clic al botón de proceder al pago
  checkoutButton.addEventListener("click", handleCheckout);

  // Función para enviar el PDF por correo
  const sendEmail = (pdfBlob, userEmail) => {
    emailjs.init("YOUR_USER_ID"); // Reemplaza con tu userID de EmailJS

    const formData = new FormData();
    formData.append("correo", "YOUR_SERVICE_ID"); // Reemplaza con tu serviceID de EmailJS
    formData.append("factura", "YOUR_TEMPLATE_ID"); // Reemplaza con tu templateID de EmailJS
    formData.append("william", "YOUR_USER_ID"); // Reemplaza con tu userID de EmailJS
    formData.append("user_email", userEmail);
    formData.append("file", pdfBlob, "factura.pdf");

    fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Factura enviada por correo electrónico.");
        } else {
          alert("Error al enviar la factura por correo electrónico.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al enviar la factura por correo electrónico.");
      });
  };
});
