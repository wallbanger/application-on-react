import React from 'react';

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;
    return(
      <div>
        <h1>Archives ({article})</h1>
        <h4>Date: {date}, Filter: {filter}</h4>
      </div>
    );
  }
}
