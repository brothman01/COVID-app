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
    fetch( "https://jsonplaceholder.typicode.com/users" )
      .then( ( res ) => res.json() )
      .then( ( json ) => {
        this.setState( {
          items: json,
          DataisLoaded: true
        } );
      } )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleToggleClick}>
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
