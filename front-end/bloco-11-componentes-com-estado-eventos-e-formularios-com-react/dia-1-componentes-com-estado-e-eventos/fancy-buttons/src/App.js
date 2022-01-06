import './App.css';
import React from 'react';

function handleClick() {
  console.log('Vermelho');
}

function handleClick2() {
  console.log('Azul');
}

function handleClick3() {
  console.log('Verde');
}

class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={handleClick}>Botão Vermelho</button>
        <button onClick={handleClick2}>Botão Azul</button>
        <button onClick={handleClick3}>Botão Verde</button>
      </div>
    );
  }
}

export default App;
