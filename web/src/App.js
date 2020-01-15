import React from 'react';

// Componente: Bloco isolado de HTML, CSS, JS que não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// Estado: 

import Header from './Header';

function App() {
  return (
    <>
      <Header title="Título 1" />
      <Header title="Título 2" />
      <Header title="Título 4" />
    </>
  );
}

export default App;
