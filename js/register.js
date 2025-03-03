document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      nombre_usuario: formData.get("nombre_usuario"),
      correo: formData.get("correo"),
      contraseña: formData.get("contraseña"),
    };

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert(result.message);
      if (response.status === 201) {
        window.location.href = "/index.html"; // Redirigir al index después de un registro exitoso
      }
    } catch (error) {
      console.error("Error al registrarse:", error);
      alert("Error al registrarse");
    }
  });
});
