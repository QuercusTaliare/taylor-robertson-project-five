import React, { Component, Fragment } from 'react';

class PieLegend extends Component {

  render() {

    const { emotionA, emotionB, emotionC } = this.props.emotionEntry;

    return (

        <ul className="legend">

          <li>
            <p className="emotion emotion-one">{emotionA.type}</p>
            <p className="percentage">{emotionA.percentage}%</p>
          </li>
          <li>
            <p className="emotion emotion-two">{emotionB.type}</p>
            <p className="percentage">{emotionB.percentage}%</p>
          </li>
          <li>
            <p className="emotion emotion-three">{emotionC.type}</p>
            <p className="percentage">{emotionC.percentage}%</p>
          </li>

        </ul>

    )

  }

}

export default PieLegend