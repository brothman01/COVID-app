import React from 'react';
import ReactDOM from 'react-dom';
import CountriesDataTable from './components/countries-data-table';

import './App.css';

fetch( "https://ipapi.co/json/", {
  "method": "GET"
} )
.then( ( res ) => res.json() )
.then( response => {
  console.log( response );
  ReactDOM.render(
    <span>
      <li className={`flag-icon flag-icon-${response.country_code?.toLowerCase()}`}></li>
      {response.country_name}
    </span>,
    document.getElementById( 'user-country-flag' )
  );

  ReactDOM.render(
    <CountriesDataTable />,
    document.getElementById( 'country-data-table' )
  );
} )
.catch( error => {
  console.error( error );
} );
