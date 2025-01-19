import React, { useState } from 'react';
import './index.css';  // Importando o CSS

const TeleportJoinha = () => {
  const [position, setPosition] = useState({
    top: 100,
    left: 100,
  });

  // Função para gerar novas posições aleatórias
  const teleport = () => {
    const newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div
      onMouseEnter={teleport}  // Usando onMouseEnter para detectar quando o mouse passa por cima
      className="joinha" // Classe CSS
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <img
        src="https://i.pinimg.com/1200x/79/85/5d/79855de2c24b8bf83b2163351a550d2e.jpg" // Novo link da imagem
        alt="Joinha"
        width={100}
        height={100}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TeleportJoinha />
    </div>
  );
}

export default App;
