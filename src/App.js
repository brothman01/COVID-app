// Internal Dependenciess
import React from 'react';

// Internal Components
import MainNav from './components/main-nav';
import Hero from './components/hero';
import LiveData from './components/live-data';
import Footer from './components/footer';

import _ from 'lodash';

// Styles
import './App.css';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      geoLocationData: this.props.geoLocationData,
      covidData: this.props.covidData,
      selectedCountry: false, // USA
    };
    this.updateSelectedCountry = this.updateSelectedCountry.bind( this );
  }

  updateSelectedCountry = ( selectedCountry ) => {
    if ( ! selectedCountry  ) {
      this.setState({ selectedCountry: false });
      return;
    }

    let index = _.findIndex( this.state.covidData, { 'country': selectedCountry } );
    if ( -1 === index ) {
      index = _.findIndex( this.state.covidData, { 'country': 'USA' } );
    }

    if (this.state.selectedCountry.hasOwnProperty( 'country' ) && selectedCountry === this.state.selectedCountry.country) {
      this.setState({ selectedCountry: false });
    } else {
      this.setState({ selectedCountry: (selectedCountry === this.state.selectedCountry) ? false : this.state.covidData[ index ] });
    }

    const divElement = document.getElementById( 'live-data-header' );
    divElement.scrollIntoView({ top: -2000, behavior: 'smooth' });
  }

  render() {
    return (
      <Home
        covidData={this.state.covidData}
        geoLocationData={this.state.geoLocationData}
        selectedCountry={this.state.selectedCountry}
        updateSelectedCountry={this.updateSelectedCountry}
      />
    );
  }
}

export default App;

/**
 * Home Component
 */
class Home extends React.Component {
  render() {
    return (
      <>
        <MainNav geoLocationData={this.props.geoLocationData} />
        <Hero />
        <LiveData
          covidData={this.props.covidData}
          geoLocationData={this.props.geoLocationData}
          selectedCountry={this.props.selectedCountry}
          updateSelectedCountry={this.props.updateSelectedCountry}
        />
        <Footer />
      </>
    );
  }
}
