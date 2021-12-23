import React from 'react';

import './style.css'

class ToggleDarkMode extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      isDarkMode: ( localStorage.theme === 'dark' || ( ! ( 'theme' in localStorage ) && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) )
    };
    this.handleToggleClick = this.handleToggleClick.bind( this );
  }

  componentDidUpdate() {
    if ( localStorage.theme === 'dark' || ( ! ( 'theme' in localStorage ) && window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) ) {
      document.documentElement.classList.add( 'dark' );
    } else {
      document.documentElement.classList.remove( 'dark' );
    }
  }

  handleToggleClick() {
    this.setState( state => ( {
      isDarkMode: ! state.isDarkMode
    } ) );
    if ( ! this.state.isDarkMode ) {
      localStorage.theme = 'dark'
      document.body.classList.add( 'dark' );
    }
    if ( this.state.isDarkMode ) {
      localStorage.theme = 'light'
      document.body.classList.remove( 'dark' );
    }
  }

  render() {
    return (
      <button className="text-gray-900 dark:text-white text-base font-medium tracking-tight bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 font-semibold toggle-dark-mode" onClick={ this.handleToggleClick  }>
        { this.state.isDarkMode ? 'Light Mode' : 'Dark Mode' }
      </button>
    );
  }

}

export default ToggleDarkMode;
