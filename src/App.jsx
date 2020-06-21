import React from 'react';

import { Filters, Cards } from 'components';

import 'styles/index.scss';

function App() {
  return (
    <div className="layout">
      <main className="main">
        <Filters />

        <Cards />
      </main>
    </div>
  );
}

export default App;
