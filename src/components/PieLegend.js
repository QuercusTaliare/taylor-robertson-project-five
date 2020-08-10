import React, { Component } from 'react';

class PieLegend extends Component {

  render() {

    const { emotionA, emotionB, emotionC } = this.props.emotionEntry.threeEmotions;

    const colourStyleA = { background: this.props.colours[emotionA.type] };
    const colourStyleB = { background: this.props.colours[emotionB.type] };
    const colourStyleC = { background: this.props.colours[emotionC.type] };

    return (

        <ul className="legend-list">

          <li className="legend-item">
            <div className="colour" style={colourStyleA}></div>
            <p className="emotion emotion-one">{emotionA.type}</p>
            <p className="percentage">{emotionA.percentage}%</p>
          </li>
          <li className="legend-item">
            <div className="colour" style={colourStyleB}></div>
            <p className="emotion emotion-two">{emotionB.type}</p>
            <p className="percentage">{emotionB.percentage}%</p>
          </li>
          <li className="legend-item">
            <div className="colour" style={colourStyleC}></div>
            <p className="emotion emotion-three">{emotionC.type}</p>
            <p className="percentage">{emotionC.percentage}%</p>
          </li>

        </ul>

    )

  }

}

export default PieLegend