// Internal Dependenciess
import React from 'react';

// Internal Components
import ToggleDarkMode from './components/toggle-dark-mode';
import CountriesDataTable from './components/countries-data-table';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { showMessage: false };
    this.showCovidData = this.showCovidData.bind( this );
  }

  showCovidData() {
    return (
      <ul className="covid-data text-gray-500 dark:text-gray-400 mt-2 text-sm">
        <li key="lastUpdate">Last Updated: { this.state.lastUpdate }</li>
        <li key="country">Country: { this.state.country }</li>
        <li key="confirmed">Confirmed Cases: { this.state.confirmed }</li>
        <li key="critical">Critical Cases: { this.state.critical }</li>
        <li key="deaths">Deaths: { this.state.deaths }</li>
        <li key="recovered">Recovered: { this.state.recovered }</li>
      </ul>
    );
  }

  componentDidMount() {
    fetch( "https://www.covid19-api.com/country/code?code=US&format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_COVID_API_KEY
      }
    } )
    .then( ( res ) => res.json() )
    .then( response => {
      this.setState( {
        country: response[0].country,
        confirmed: response[0].confirmed.toLocaleString( "en-US" ),
        critical: response[0].critical.toLocaleString( "en-US" ),
        deaths: response[0].deaths.toLocaleString( "en-US" ),
        recovered: response[0].recovered.toLocaleString( "en-US" ),
        lastUpdate: response[0].lastUpdate,
        DataisLoaded: true
      } );
    } )
    .catch( err => {
      console.error( err );
    } );
  }

  render() {
    return (
      <div className="App bg-white dark:bg-gray-900 px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">

        <ToggleDarkMode />

        <div className="grid grid-cols-3 gap-4">
          { this.showCovidData() }

        </div>

        <div className="grid grid-cols-1 mt-5">
          <CountriesDataTable />
        </div>

      </div>
    );
  }
}

export default App;
