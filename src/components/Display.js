import React, { Component, Fragment } from 'react';
import PieChart from './PieChart';

class Display extends Component {

  render() {

    return (
      <Fragment>

        <h2>How are you feeling?</h2>
        <PieChart />
      </Fragment>
      
    )

  }

}

export default Display