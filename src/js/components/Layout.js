import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Default title',
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return(
      <div>
        <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
