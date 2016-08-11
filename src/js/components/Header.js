import React from 'react';
import Title from './Title'

export default class Header extends React.Component {
  render() {
    console.log(this.props);
    
    return(
        <header>
          <Title title={this.props.title} />
        </header>
    );
  }
}
