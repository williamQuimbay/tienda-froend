document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-device-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const deviceData = {};
    formData.forEach((value, key) => {
      deviceData[key] = value;
    });

    try {
      const response = await fetch("http://localhost:5000/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deviceData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Dispositivo agregado exitosamente");
      form.reset();
    } catch (error) {
      console.error("Error al agregar el dispositivo:", error);
      alert("Error al agregar el dispositivo");
    }
  });
});
