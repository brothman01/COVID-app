import React from 'react';

class LiveDataHeading extends React.Component {
  render() {
    return (
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" style={{position: 'relative'}}>
        <div id="live-data-header" style={{position: 'absolute', top: -100 + 'px', left: 0}}></div>
        Live Data <br />({this.props.selectedCountry.country || "World Stats"})
      </h1>
    );
  }
}

export default LiveDataHeading;
