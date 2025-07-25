import React from 'react';
import Home from './pages/Home';
// Importaciones de estilos necesarios
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS framework
import './App.css'; // Estilos personalizados del proyecto

/**
 * Componente principal de la aplicación Polaris Tours
 * Punto de entrada que renderiza la página principal
 */
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
