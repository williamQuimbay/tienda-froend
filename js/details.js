// script para cargar los detalles del dispositivo

document.addEventListener("DOMContentLoaded", () => {
  const deviceDetails = JSON.parse(localStorage.getItem("deviceDetails"));
  if (deviceDetails) {
    const deviceDetailsSection = document.getElementById("device-details");
    deviceDetailsSection.innerHTML = `
            <img src="${deviceDetails.image}" alt="${deviceDetails.name}">
            <h2>${deviceDetails.name}</h2>
            <p><strong>Marca:</strong> ${deviceDetails.brand}</p>
            <p><strong>Fecha de lanzamiento:</strong> ${deviceDetails.releaseDate}</p>
            <p><strong>Descripción:</strong> ${deviceDetails.description}</p>
        `;
  }
});
// **Función para volver al inicio**
function goBack() {
  window.location.href = "index.html";
}
