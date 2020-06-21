import React from 'react';

import { Cards } from 'components';
import { Filters } from 'containers';

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
