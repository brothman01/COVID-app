import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { showMessage: false };
    this.showCovidData = this.showCovidData.bind( this );
  }

  showCovidData() {
    return (
      <ul className="covid-data">
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
      console.log( response[0] );
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
      <div className="App">
        { this.showCovidData() }
        { this.state.showMessage && this.state.items.map ( ( item ) => (
          <p key={ item.id }>{ item.name }</p>
        ) ) }
      </div>
    );
  }
}

export default App;
