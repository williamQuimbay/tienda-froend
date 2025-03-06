# Tienda Electrónica

Este es un proyecto de una tienda electrónica que permite a los usuarios navegar por una lista de productos, filtrarlos por marca y tipo, buscar productos específicos, agregar productos al carrito de compras y proceder al pago.

## Características

- Navegación por una lista de productos.
- Filtrado de productos por marca y tipo.
- Búsqueda de productos por nombre, marca o tipo.
- Agregar productos al carrito de compras.
- Proceder al pago desde el carrito de compras.
- Autenticación de usuarios.
- Vista de administrador para gestionar productos.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Font Awesome (para iconos)
- Fetch API (para obtener datos del servidor)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/williamQuimbay/tienda-froend.git
   Abre el archivo index.html en tu navegador para ver la aplicación.
   ```

## Uso

## Navegación

La página principal (index.html) muestra una lista de productos.
Puedes filtrar los productos por marca y tipo utilizando los selectores en la barra lateral.
Puedes buscar productos específicos utilizando el campo de búsqueda en la barra lateral.
Carrito de Compras
Para agregar un producto al carrito, haz clic en el botón "Agregar al Carrito" en la tarjeta del producto.
Para ver el carrito de compras, haz clic en el botón "Carrito" en la barra de navegación.
Desde el carrito de compras, puedes proceder al pago.
Autenticación
Para iniciar sesión, haz clic en el botón "Iniciar Sesión" en la barra de navegación.
Para registrarte, haz clic en el botón "Registrarse" en la barra de navegación.
Si eres un administrador, verás un botón adicional para acceder a la vista de administrador.
Estructura del Proyecto

## index.html

Este archivo contiene la estructura principal de la página de inicio de la tienda electrónica. Incluye la barra de navegación, la barra lateral con los filtros y el campo de búsqueda, y el contenedor para la lista de productos.

## css/styles.css

Este archivo contiene los estilos CSS para la aplicación. Define el diseño y la apariencia de los elementos en la página, incluyendo la barra de navegación, la barra lateral, las tarjetas de productos y los botones.

## js/script.js

Este archivo contiene la lógica JavaScript para la aplicación. Incluye funciones para:

Obtener los productos desde el servidor (fetchProducts).
Renderizar los productos en la página (renderProducts).
Agregar productos al carrito de compras (addProductToCart).
Poblar el filtro de marca con las marcas disponibles (populateMarcaFilter).
Aplicar los filtros seleccionados y renderizar los productos filtrados (applyFilters).
Manejar la autenticación de usuarios y mostrar/ocultar elementos de la interfaz según el estado de autenticación.
vista/carrito.html
Este archivo contiene la estructura de la página del carrito de compras. Incluye un contenedor para mostrar los productos en el carrito y un botón para proceder al pago.

## js/carrito.js

Este archivo contiene la lógica JavaScript para la página del carrito de compras. Incluye funciones para:

Obtener los productos del carrito desde localStorage (getCartProducts).
Renderizar los productos en el carrito (renderCartProducts).
Eliminar productos del carrito (removeProductFromCart).
Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de quimbayfeo@gmail.com.
