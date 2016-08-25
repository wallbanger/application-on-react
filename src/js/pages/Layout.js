import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav'

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: '60px'
    };

    return(
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          <h1>h1 title</h1>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
