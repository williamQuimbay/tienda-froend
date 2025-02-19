const devices = [
  {
    name: "Samsung Galaxy S24",
    releaseDate: "2024-01-17",
    brand: "Samsung",
    type: "Celular",
    image: "samsung-galaxy-s24.jpg",
    description:
      "El nuevo Samsung Galaxy S24 con inteligencia artificial avanzada.",
  },
  {
    name: "Redmi Note 13 Pro",
    releaseDate: "2024-01-15",
    brand: "Xiaomi",
    type: "Celular",
    image: "redmi-note-13-pro.jpg",
    description: "El Redmi Note 13 Pro con pantalla AMOLED y cámara de 200 MP.",
  },
  {
    name: "iPhone 15 Pro",
    releaseDate: "2024-02-10",
    brand: "Apple",
    type: "Celular",
    image: "iphone-15-pro.jpg",
    description: "El iPhone 15 Pro con pantalla Super Retina XDR y chip A17.",
  },
  {
    name: "Google Pixel 8",
    releaseDate: "2024-03-05",
    brand: "Google",
    type: "Celular",
    image: "google-pixel-8.jpg",
    description: "El Google Pixel 8 con cámara avanzada y Android 14.",
  },
  {
    name: "Huawei P60 Pro",
    releaseDate: "2024-03-25",
    brand: "Huawei",
    type: "Celular",
    image: "huawei-p60-pro.jpg",
    description:
      "El Huawei P60 Pro con batería de larga duración y cámaras Leica.",
  },
  {
    name: "OnePlus 12",
    releaseDate: "2024-04-10",
    brand: "OnePlus",
    type: "Celular",
    image: "oneplus-12.jpg",
    description:
      "El OnePlus 12 con carga rápida Warp Charge y pantalla Fluid AMOLED.",
  },
  {
    name: "Dell XPS 15",
    releaseDate: "2024-01-20",
    brand: "Dell",
    type: "Portátil",
    image: "dell-xps-15.jpg",
    description: "El Dell XPS 15 con procesador Intel Core i9 y pantalla 4K.",
  },
  {
    name: "MacBook Pro M2",
    releaseDate: "2024-02-15",
    brand: "Apple",
    type: "Portátil",
    image: "macbook-pro-m2.jpg",
    description: "El MacBook Pro con chip M2 y pantalla Retina.",
  },
  {
    name: "HP Spectre x360",
    releaseDate: "2024-03-01",
    brand: "HP",
    type: "Portátil",
    image: "hp-spectre-x360.jpg",
    description:
      "El HP Spectre x360 convertible con pantalla táctil y lápiz óptico.",
  },
  {
    name: "Asus ROG Zephyrus G14",
    releaseDate: "2024-03-20",
    brand: "Asus",
    type: "Portátil",
    image: "asus-rog-zephyrus-g14.jpg",
    description:
      "El Asus ROG Zephyrus G14 con gráficos NVIDIA RTX y pantalla de 120Hz.",
  },
  {
    name: "Acer Predator Helios 300",
    releaseDate: "2024-04-05",
    brand: "Acer",
    type: "Portátil",
    image: "acer-predator-helios-300.jpg",
    description:
      "El Acer Predator Helios 300 para juegos con procesador Intel i7 y gráficos RTX.",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    releaseDate: "2024-04-25",
    brand: "Lenovo",
    type: "Portátil",
    image: "lenovo-thinkpad-x1-carbon.jpg",
    description:
      "El Lenovo ThinkPad X1 Carbon con teclado retroiluminado y batería de larga duración.",
  },
  {
    name: "Samsung Galaxy Book Flex",
    releaseDate: "2024-05-10",
    brand: "Samsung",
    type: "Portátil",
    image: "samsung-galaxy-book-flex.jpg",
    description: "El Samsung Galaxy Book Flex con pantalla QLED y S Pen.",
  },
  {
    name: "Xiaomi Mi Notebook Pro",
    releaseDate: "2024-05-20",
    brand: "Xiaomi",
    type: "Portátil",
    image: "xiaomi-mi-notebook-pro.jpg",
    description:
      "El Xiaomi Mi Notebook Pro con pantalla 2K y procesador Intel Core i7.",
  },
  {
    name: "Microsoft Surface Laptop 5",
    releaseDate: "2024-06-01",
    brand: "Microsoft",
    type: "Portátil",
    image: "surface-laptop-5.jpg",
    description:
      "El Microsoft Surface Laptop 5 con pantalla táctil PixelSense y almacenamiento SSD.",
  },
  {
    name: "LG Gram 17",
    releaseDate: "2024-06-15",
    brand: "LG",
    type: "Portátil",
    image: "lg-gram-17.jpg",
    description:
      "El LG Gram 17 ultraligero con batería de larga duración y pantalla 17 pulgadas.",
  },
  {
    name: "Razer Blade 15",
    releaseDate: "2024-07-01",
    brand: "Razer",
    type: "Portátil",
    image: "razer-blade-15.jpg",
    description:
      "El Razer Blade 15 para juegos con gráficos NVIDIA RTX y pantalla de 240Hz.",
  },
  {
    name: "Google Pixelbook Go",
    releaseDate: "2024-07-20",
    brand: "Google",
    type: "Portátil",
    image: "google-pixelbook-go.jpg",
    description:
      "El Google Pixelbook Go con Chrome OS y batería de larga duración.",
  },
  {
    name: "Sony Xperia 1 III",
    releaseDate: "2024-08-01",
    brand: "Sony",
    type: "Celular",
    image: "sony-xperia-1-iii.jpg",
    description: "El Sony Xperia 1 III con pantalla 4K HDR y cámara triple.",
  },
  {
    name: "Motorola Edge 30",
    releaseDate: "2024-08-20",
    brand: "Motorola",
    type: "Celular",
    image: "motorola-edge-30.jpg",
    description: "El Motorola Edge 30 con 5G y pantalla OLED.",
  },
  {
    name: "Nokia X20",
    releaseDate: "2024-09-01",
    brand: "Nokia",
    type: "Celular",
    image: "nokia-x20.jpg",
    description: "El Nokia X20 con Android One y cámara cuádruple.",
  },
];
const deviceList = document.getElementById("device-list");
const searchInput = document.getElementById("search");
const brandFilter = document.getElementById("brand-filter");
const typeFilter = document.getElementById("type-filter");

// Generar opciones de marca en el filtro
const uniqueBrands = [...new Set(devices.map((device) => device.brand))];
uniqueBrands.forEach((brand) => {
  const option = document.createElement("option");
  option.value = brand;
  option.textContent = brand;
  brandFilter.appendChild(option);
});

function renderDevices(filteredDevices) {
  deviceList.innerHTML = "";
  filteredDevices.forEach((device) => {
    const deviceItem = document.createElement("div");
    deviceItem.classList.add("device-item");
    deviceItem.innerHTML = `
            <img src="${device.image}" alt="${device.name}">
            <h2>${device.name}</h2>
            <p>${device.brand}</p>
            <p>${device.releaseDate}</p>
            <button onclick="showDetails('${device.name}')">Ver Detalles</button>
        `;
    deviceList.appendChild(deviceItem);
  });
}

function filterDevices() {
  const searchText = searchInput.value.toLowerCase();
  const selectedBrand = brandFilter.value;
  const selectedType = typeFilter.value;

  const filteredDevices = devices.filter((device) => {
    const matchesSearch = device.name.toLowerCase().includes(searchText);
    const matchesBrand = !selectedBrand || device.brand === selectedBrand;
    const matchesType = !selectedType || device.type === selectedType;
    return matchesSearch && matchesBrand && matchesType;
  });

  renderDevices(filteredDevices);
}

searchInput.addEventListener("input", filterDevices);
brandFilter.addEventListener("change", filterDevices);
typeFilter.addEventListener("change", filterDevices);

// Renderizar la lista inicial de dispositivos
renderDevices(devices);

function showDetails(deviceName) {
  const device = devices.find((d) => d.name === deviceName);
  if (device) {
    localStorage.setItem("deviceDetails", JSON.stringify(device));
    window.location.href = "device-details.html";
  }
}
