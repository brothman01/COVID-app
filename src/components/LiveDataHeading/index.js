import React from 'react';

class LiveDataHeading extends React.Component {
  render() {
    return (
      <h1>Live Data ({this.props.location.country_code})</h1>
    );
  }
}

export default LiveDataHeading;
