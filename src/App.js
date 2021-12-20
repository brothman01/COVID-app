// Internal Dependenciess
import './App-tailwind.css';
import React from 'react';

// Internal Components
import ToggleDarkMode from './components/toggle-dark-mode';

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
      <div className="App bg-white dark:bg-gray-900 px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">

        <ToggleDarkMode />

        <button className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight" onClick={ this.handleToggleClick  }>
          { this.state.showMessage ? 'Hide' : 'Show' }
        </button>

        { this.state.showMessage && this.state.items.map ( ( item ) => (
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm" key={ item.id }>
            { item.name }
          </p>
        ) ) }

      </div>
    );
  }
}

export default App;
