import React from 'react';
import { useSelector } from 'react-redux';

import { getDataByName } from 'redux/selectors';

import { Cards } from 'components';
import { Filters } from 'containers';

import 'styles/index.scss';

function App() {
  const data = useSelector((state) => getDataByName(state, 'data'));
  const filters = useSelector((state) => state.reducer.filters);
  const filteredData = useSelector((state) => state.reducer.filteredData);

  return (
    <div className="layout">
      <main className="main">
        <Filters data={data} filters={filters} />

        <Cards data={filteredData} />
      </main>
    </div>
  );
}

export default App;
