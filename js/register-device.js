document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-device-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const tipo = formData.get("tipo");
    const marca = formData.get("marca");
    const modelo = formData.get("modelo");
    const almacenamiento = formData.get("almacenamiento");
    const ram = formData.get("ram");
    const procesador = formData.get("procesador");
    const pantalla = formData.get("pantalla");
    const precio = formData.get("precio");
    const url_imagen = formData.get("url_imagen");

    // Verificar que todos los campos requeridos estén completos
    if (
      !tipo ||
      !marca ||
      !modelo ||
      !almacenamiento ||
      !ram ||
      !procesador ||
      !pantalla ||
      !precio ||
      !url_imagen
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const data = {
      tipo,
      marca,
      modelo,
      almacenamiento,
      ram,
      procesador,
      pantalla,
      precio,
      url_imagen,
    };

    try {
      const response = await fetch("http://localhost:3000/register-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(`Error: ${errorResult.error || "Error desconocido"}`);
      }

      const result = await response.json();
      if (response.status === 201) {
        alert("Dispositivo registrado exitosamente");
        form.reset(); // Limpiar el formulario después de un registro exitoso
      }
    } catch (error) {
      console.error("Error al registrar el dispositivo:", error);
      alert(`Error al registrar el dispositivo: ${error.message}`);
    }
  });
});
