// Internal Dependenciess
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

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
      selectedCountry: this.props.covidData[ 242 ], // USA
    };
    this.updateSelectedCountry = this.updateSelectedCountry.bind( this );
  }

  updateSelectedCountry = ( selectedCountry ) => {
    let index = _.findIndex( this.state.covidData, { 'country': selectedCountry } );
    if ( -1 === index ) {
      index = _.findIndex( this.state.covidData, { 'country': 'USA' } );
    }
    this.setState({ selectedCountry: this.state.covidData[ index ] });
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
