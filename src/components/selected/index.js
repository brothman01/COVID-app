import React from 'react';

class Selected extends React.Component {
  constructor( props ) {
    super( props );

  }

  render() {
    return (
      <h1>Live Data ({this.props.location.country_code})</h1>
    );
  }
}

export default Selected;
