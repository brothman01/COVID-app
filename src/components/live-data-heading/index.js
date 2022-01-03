import React from 'react';

class LiveDataHeading extends React.Component {
  render() {
    return (
      <>
        { !! this.props.selectedCountry && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gradient show-world-data" onClick={() => this.props.updateSelectedCountry(false)}>Show World Stats</button>
        )}
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" style={{position: 'relative'}}>
          <div id="live-data-header" style={{position: 'absolute', top: -175 + 'px', left: 0}}></div>
          Live Data <br />({this.props.selectedCountry.country || "World Stats"})
        </h1>
      </>
    );
  }
}

export default LiveDataHeading;
