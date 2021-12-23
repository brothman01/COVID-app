import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountriesDataTable from './components/countries-data-table';

// ReactDOM.render(
//     <App />,
//   document.getElementById( 'root' )
// );

ReactDOM.render(
    <CountriesDataTable />,
  document.getElementById( 'country-data-table' )
);
