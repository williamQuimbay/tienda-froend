document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      correo: formData.get("correo"),
      contraseña: formData.get("contraseña"),
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
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
      if (response.status === 200) {
        localStorage.setItem("correo", data.correo); // Almacenar el correo del usuario
        localStorage.setItem("nombre_usuario", result.nombre_usuario); // Almacenar el nombre de usuario
        localStorage.setItem("rol", result.rol); // Almacenar el rol del usuario
        localStorage.setItem("es_admin", result.rol === "admin"); // Almacenar si es administrador
        window.location.href = "/index.html"; // Ajustar la ruta de redirección
      } else {
        console.error("Error al iniciar sesión:", result.message);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  });
});
