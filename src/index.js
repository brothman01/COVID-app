import React from 'react';
import ReactDOM from 'react-dom';
import CountriesDataTable from './components/countries-data-table';
import { getGeo } from 'geoplugin';

import './App.css';

getGeo()
  .then( ( response ) => {
    ReactDOM.render(
      <span>
        <li className={`flag-icon flag-icon-${response.countryCode?.toLowerCase()}`}></li>
        {response.countryName}
      </span>,
      document.getElementById( 'user-country-flag' )
    );

    ReactDOM.render(
      <CountriesDataTable />,
      document.getElementById( 'country-data-table' )
    );
  } )
  .catch( ( error ) => {
    console.error( error );
  } )
  .then( () => {} ); // always executed
