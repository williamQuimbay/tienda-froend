document.addEventListener("DOMContentLoaded", () => {
  const deviceList = document.getElementById("device-list");
  const searchInput = document.getElementById("search");
  const brandFilter = document.getElementById("brand-filter");
  const typeFilter = document.getElementById("type-filter");
  let devices = [];

  // Función para traer dispositivos desde la base de datos
  async function fetchDevices() {
    try {
      const response = await fetch("http://localhost:5000/productos"); // URL de tu API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      devices = await response.json();
      generarOpcionesDeMarca(devices);
      renderDevices(devices);
    } catch (error) {
      console.error("Error al obtener los dispositivos:", error);
    }
  }

  // Generar opciones de marca en el filtro
  function generarOpcionesDeMarca(devices) {
    const uniqueBrands = [...new Set(devices.map((device) => device.Marca))];
    uniqueBrands.forEach((brand) => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandFilter.appendChild(option);
    });
  }

  function renderDevices(filteredDevices) {
    deviceList.innerHTML = "";
    filteredDevices.forEach((device) => {
      const deviceItem = document.createElement("div");
      deviceItem.classList.add("device-item");
      deviceItem.innerHTML = `
              <img src="${device.Imagen}" alt="${device.Modelo}">
              <h2>${device.Modelo}</h2>
              <p><strong>Marca:</strong> ${device.Marca}</p>
              <p><strong>Fecha de lanzamiento:</strong> ${device.Fecha_Lanzamiento}</p>
              <button onclick="showDetails('${device.Modelo}')">Ver Detalles</button>
          `;
      deviceList.appendChild(deviceItem);
    });
  }

  function filterDevices() {
    const searchText = searchInput.value ? searchInput.value.toLowerCase() : "";
    const selectedBrand = brandFilter.value;
    const selectedType = typeFilter.value;

    const filteredDevices = devices.filter((device) => {
      const matchesSearch = device.Modelo.toLowerCase().includes(searchText);
      const matchesBrand = !selectedBrand || device.Marca === selectedBrand;
      const matchesType = !selectedType || device.Tipo === selectedType;
      return matchesSearch && matchesBrand && matchesType;
    });

    renderDevices(filteredDevices);
  }

  searchInput.addEventListener("input", filterDevices);
  brandFilter.addEventListener("change", filterDevices);
  typeFilter.addEventListener("change", filterDevices);

  // Renderizar la lista inicial de dispositivos
  fetchDevices();

  window.showDetails = function (deviceName) {
    const device = devices.find((d) => d.Modelo === deviceName);
    if (device) {
      localStorage.setItem("deviceDetails", JSON.stringify(device));
      window.location.href = "device-details.html";
    } else {
      console.error("Dispositivo no encontrado:", deviceName);
    }
  };
});
