import React, { Component, Fragment } from 'react';
import PieChart from './PieChart';

class Display extends Component {

  render() {

    this.props.chartData.forEach(item => {
      console.log(item.emotionA);

    })

    return (
      <Fragment>

        <h2>How are you feeling?</h2>
        {/* <p>{this.props.chartData}</p> */}
        <PieChart />
      </Fragment>
      
    )

  }

}

export default Display