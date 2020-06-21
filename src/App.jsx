import React from 'react';

import { Filters, Cards } from 'components';

import 'styles/index.scss';

function App() {
  return (
    <div className="layout">
      <main className="main">
        <aside>
          <Filters />
        </aside>

        <Cards />
      </main>
    </div>
  );
}

export default App;
