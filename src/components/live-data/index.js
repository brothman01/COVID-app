import React from 'react';

// Internal Components
import LiveDataHeading from '../live-data-heading';
import WorldTotals from '../world-totals';
import CountriesDataTable from '../countries-data-table';

class LiveData extends React.Component {
  render() {
    return (
      <section className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <LiveDataHeading geoLocationData={this.props.geoLocationData} selectedCountry={this.props.selectedCountry} />
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="container mx-auto px-4 mb-24">

            <WorldTotals covidData={this.props.covidData} />

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
