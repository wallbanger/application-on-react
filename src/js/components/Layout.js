import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = 'Ahmed'
  }

  render() {
    var list = [
      <Header />, <Header />, <Header />
    ]
    return(
        <div>
          {list}
          <Header />
          <Footer />
        </div>
    );
  }
}
