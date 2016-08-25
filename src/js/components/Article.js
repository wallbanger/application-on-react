import React from 'react';

export default class extends React.Component {
  render() {
    const title = this.props;

    return(
      <div>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, deleniti.</p>
      </div>
    );
  }
}
