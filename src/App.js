import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { showMessage: false };
    this.handleToggleClick = this.handleToggleClick.bind( this );
  }

  handleToggleClick() {
    this.setState( state => ( {
      showMessage: ! state.showMessage
    } ) );
  }

  componentDidMount() {
    fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "af72eff191msh52ab26051a8a2aap11d57bjsn4db4115a61a4"
    }
})
.then(response => {
    console.log(response);
    this.setState( {
      items: response,
      DataisLoaded: true
    } );
})
.catch(err => {
    console.error(err);
});
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.handleToggleClick  }>
          { this.state.showMessage ? 'Hide' : 'Show' }
        </button>
        { this.state.showMessage && this.state.items.map ( ( item ) => (
          <p key={ item.id }>{ item.name }</p>
        ) ) }
      </div>
    );
  }
}

export default App;
