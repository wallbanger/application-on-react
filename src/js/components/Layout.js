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

  render() {
    const myTitle = 'Aloha';
    setTimeout(() => {
      this.setState({title: 'Reloading title'})
    }, 3000);

    return(
      <div>
        <Header title={this.state.title}/>
        <Header title={'Second title'}/>
        <Footer />
      </div>
    );
  }
}
