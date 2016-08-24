import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, '/');
  }

  render() {
    return(
      <div>
        <h1>Loyout</h1>
        {this.props.children}
        <Link to="archives"><button>archives</button></Link>
        <Link to="settings"><button>Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
