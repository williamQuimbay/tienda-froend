// Función para formatear precios con separadores de mil y símbolo de pesos
const formatPrice = (price) => {
  return `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

// Función para obtener el siguiente número de orden
const getNextOrderNumber = () => {
  let orderNumber = localStorage.getItem("orderNumber");
  if (!orderNumber) {
    orderNumber = 1;
  } else {
    orderNumber = parseInt(orderNumber) + 1;
  }
  localStorage.setItem("orderNumber", orderNumber);
  return orderNumber;
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
    const orderNumber = getNextOrderNumber();

    // Encabezado de la factura
    doc.setFontSize(18);
    doc.text("FACTURA", 20, 20);

    // Información de la compañía
    doc.setFontSize(12);
    doc.text("TIENDA TECH", 150, 20);
    doc.text("BOGOTA", 150, 25);
    doc.text("COLOMBIA", 150, 30);
    doc.text("(+57)314 408 5330", 150, 35);

    // Información del cliente
    doc.setFontSize(12);
    doc.text("FECHA", 20, 50);
    doc.text(currentDate, 50, 50);
    doc.text("Nº ORDEN", 120, 50);
    doc.text(orderNumber.toString().padStart(4, "0"), 150, 50);

    doc.text("NOMBRE", 20, 60);
    doc.text(userName, 50, 60);
    doc.text("DIRECCIÓN", 20, 70);
    doc.text("Dirección del cliente", 50, 70);
    doc.text("TELÉFONO", 20, 80);
    doc.text("Teléfono del cliente", 50, 80);
    doc.text("CORREO", 20, 90);
    doc.text(userEmail, 50, 90);

    // Línea separadora
    doc.line(20, 100, 190, 100);

    // Tabla de productos
    doc.setFontSize(14);
    doc.text("PRODUCTOS/SERVICIOS", 20, 110);

    doc.setFontSize(12);
    doc.text("DESCRIPCIÓN", 20, 120);
    doc.text("CANTIDAD", 100, 120);
    doc.text("PRECIO", 150, 120);

    let y = 130;
    products.forEach((product, index) => {
      doc.text(`${product.modelo}`, 20, y);
      doc.text(`1`, 100, y);
      doc.text(`${formatPrice(product.precio)}`, 150, y);
      y += 10;
    });

    // Total de la compra
    doc.setFontSize(14);
    doc.text("TOTAL", 20, y + 10);
    doc.text(`${formatPrice(totalAmount)}`, 150, y + 10);

    // Notas
    doc.setFontSize(12);
    doc.text("NOTAS:", 20, y + 30);
    doc.text("Gracias por elegirnos!", 20, y + 40);

    // Descargar el PDF
    doc.save("factura.pdf");
  };

  // Función para manejar el clic en el botón de proceder al pago
  const handleCheckout = () => {
    const products = getCartProducts();
    const totalAmount = products.reduce(
      (sum, product) => sum + product.precio,
      0
    );
    generatePDF(products, totalAmount);
  };

  // Añadir evento de clic al botón de proceder al pago
  checkoutButton.addEventListener("click", handleCheckout);
});
