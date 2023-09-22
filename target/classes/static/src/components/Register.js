import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.name.trim() === '' || formData.lastName.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '' || formData.confirmPassword.trim() === '') {
      console.error('Por favor, complete todos los campos');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    try {
      // Realizar una solicitud POST al backend para enviar los datos de registro
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa (código 200), puedes manejar la lógica de registro aquí
        // Por ejemplo, mostrar un mensaje de registro exitoso o redireccionar al usuario a la página de inicio de sesión
        console.log('Registro exitoso');
        // Redireccionar al usuario a la página de inicio de sesión, por ejemplo:
        // window.location.href = '/login';
      } else {
        // Si la respuesta no es exitosa, puedes manejar el error aquí
        // Por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error de registro');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }

    // Resetear el formulario después de enviar los datos
    setFormData({
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
    </div>
  );
}

export default Register;
