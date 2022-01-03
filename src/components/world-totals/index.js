import React from 'react';
import AnimatedNumber from "animated-number-react";

import confirmedImg from '../../images/confirmed.svg';
import recoveredImg from '../../images/recovered.svg';
import criticalImg from '../../images/critical.svg';
import deathsImg from '../../images/deaths.svg';

class WorldTotals extends React.Component {
  // formatValue = (value) => value.toFixed(0).toLocaleString( "en-US" );
  formatValue = (value) => value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  formatDeathPercent = (value) => `${Number(value).toFixed(2)}%`;

  render() {
    return (
      <div id="world-totals" className="grid grid-cols-1 md:grid-cols-4 text-gray-500">
        <div className="text-center py-10 md:py-24">
          <h2 className="text-4xl font-semibold">Confirmed</h2>
          <img src={confirmedImg} alt="Confirmed Icon" className="py-4" />
          <span className="text-2xl">
            <AnimatedNumber
              value={this.props.covidData.confirmed}
              formatValue={this.formatValue}
              delay="250"
              duration="1500"
            />
          </span>
        </div>
        <div className="text-center py-10 md:py-24">
          <h2 className="text-4xl font-semibold">Recovered</h2>
          <img src={recoveredImg} alt="Recovered Icon" className="py-4" />
          <span className="text-2xl">
            <AnimatedNumber
              value={this.props.covidData.recovered}
              formatValue={this.formatValue}
              delay="250"
              duration="1500"
            />
          </span>
        </div>
        <div className="text-center py-10 md:py-24">
          <h2 className="text-4xl font-semibold">Critical</h2>
          <img src={criticalImg} alt="Critical Icon" className="py-4" />
          <span className="text-2xl">
            <AnimatedNumber
              value={this.props.covidData.critical}
              formatValue={this.formatValue}
              delay="250"
              duration="1500"
            />
          </span>
        </div>
        <div className="text-center py-10 md:py-24">
          <h2 className="text-4xl font-semibold">Deaths</h2>
          <img src={deathsImg} alt="Deaths Icon" className="py-4" />
          <span className="text-2xl">
            <AnimatedNumber
              value={this.props.covidData.deaths}
              formatValue={this.formatValue}
              delay="250"
              duration="1500"
            />
          </span><br />
          <span className="text-sm italic">
            <AnimatedNumber
              value={this.props.covidData.deathPercent}
              formatValue={this.formatDeathPercent}
              delay="250"
              duration="1500"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default WorldTotals;
