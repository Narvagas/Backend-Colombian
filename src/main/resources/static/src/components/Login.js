import React, { useState } from 'react';
import '../stylesheets/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los datos del formulario
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      console.error('Por favor, complete todos los campos');
      return;
    }

    try {
      // Realizar una solicitud POST al backend para enviar los datos de inicio de sesión
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa (código 200), puedes manejar la lógica de inicio de sesión aquí
        // Por ejemplo, redireccionar al usuario a la página de inicio
        window.location.href = '/inicio';
      } else {
        // Si la respuesta no es exitosa, puedes manejar el error aquí
        // Por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }

    // Resetear el formulario después de enviar los datos
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
