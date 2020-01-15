import React, { useState } from 'react';

// Componente: Bloco isolado de HTML, CSS, JS que não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: Informação mantidas pelo componente (Lembrar: Imutabilidade).

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
