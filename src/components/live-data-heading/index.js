import React from 'react';

class LiveDataHeading extends React.Component {
  render() {
    return (
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Live Data ({this.props.selectedCountry.code})
      </h1>
    );
  }
}

export default LiveDataHeading;
