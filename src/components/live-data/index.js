import React from 'react';

// Internal Components
import LiveDataHeading from '../live-data-heading';
import WorldTotals from '../world-totals';
import CountriesDataTable from '../countries-data-table';

class LiveData extends React.Component {
  getWorldTotalsData() {
    let worldStatsData = {
      confirmed: 0,
      recovered: 0,
      critical: 0,
      deaths: 0,
      deathPercent: 0,
    };
    if ( !! this.props.selectedCountry ) {
      worldStatsData.confirmed = this.props.selectedCountry.confirmed;
      worldStatsData.recovered = this.props.selectedCountry.recovered;
      worldStatsData.critical = this.props.selectedCountry.critical;
      worldStatsData.deaths = this.props.selectedCountry.deaths;
      worldStatsData.deathPercent = parseFloat((this.props.selectedCountry.deaths/this.props.selectedCountry.confirmed)*100);
      return worldStatsData;
    }
    worldStatsData.confirmed = this.props.covidData.reduce( ( n, { confirmed } ) => n + confirmed, 0 );
    worldStatsData.recovered = this.props.covidData.reduce( ( n, { recovered } ) => n + recovered, 0 );
    worldStatsData.critical = this.props.covidData.reduce( ( n, { critical } ) => n + critical, 0 );
    worldStatsData.deaths = this.props.covidData.reduce( ( n, { deaths } ) => n + deaths, 0 );
    worldStatsData.deathPercent = parseFloat((this.props.covidData.reduce( ( n, { deaths } ) => n + deaths, 0 )/this.props.covidData.reduce( ( n, { confirmed } ) => n + confirmed, 0 ))*100);
    return worldStatsData;
  }

  render() {
    return (
      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <LiveDataHeading geoLocationData={this.props.geoLocationData} selectedCountry={this.props.selectedCountry} updateSelectedCountry={this.props.updateSelectedCountry} />

          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="container mx-auto px-4 mb-24">
            <WorldTotals covidData={this.getWorldTotalsData()} />

            <CountriesDataTable covidData={this.props.covidData} updateSelectedCountry={this.props.updateSelectedCountry} />

            <p className="italic text-gray-500 text-center text-sm py-10">
              Information provided by RapidAPI's top COVID-19 Data API:<br />
              <a href="https://rapidapi.com/Gramzivi/api/covid-19-data" target="_blank" rel="noreferrer" className="text-blue-700">COVID-19 Data API</a>
            </p>
          </div>

        </div>
      </section>
    );
  }
}

export default LiveData;
