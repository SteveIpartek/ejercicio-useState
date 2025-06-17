import { useState } from 'react';
import './App.css'; // Asegúrate de que este archivo exista si tienes estilos

function App() {
  // Estado para el nombre del profesor actual
  const [name, setName] = useState("Sofía");
  // Estado para el nuevo nombre ingresado en el formulario (bonus)
  const [newName, setNewName] = useState('');

  // Función para manejar el envío del formulario (bonus)
  const changeName = (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Verifica que el nuevo nombre no esté vacío o solo contenga espacios en blanco
    if (newName.trim() !== '') {
      setName(newName); // Actualiza el nombre del profesor con el nuevo valor
      setNewName('');    // Limpia el campo de entrada del formulario
    } else {
      alert("Por favor, ingresa un nombre válido para el profesor.");
    }
  };

  return (
    <div className="App">
      <h1>Ejercicio: Cambio de Nombre del Profesor</h1>

      {/* Parte 1: Mostrar el nombre actual del profesor */}
      <h2>Teacher Name: {name}</h2>

      <hr /> {/* Línea para separar las secciones */}

      {/* Parte 2: Cambiar el nombre haciendo clic en la lista */}
      <h3>Cambiar profesor haciendo clic en su nombre:</h3>
      <ul>
        {/* Cada elemento de la lista cambia el nombre del profesor al hacer clic */}
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Yolanda")}>Yolanda</li>
      </ul>

      <hr /> {/* Línea para separar las secciones */}

      {/* Bonus: Cambiar el nombre usando un formulario */}
      <h3>Cambiar profesor con un formulario:</h3>
      <form onSubmit={changeName}> {/* Cuando el formulario se envía, llama a changeName */}
        <input
          type="text"
          value={newName} // El valor del input está controlado por el estado `newName`
          // Cuando el input cambia, actualiza el estado `newName`
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a new teacher name"
        />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
}

// Exporta el componente App para que pueda ser usado en otros archivos
export default App;