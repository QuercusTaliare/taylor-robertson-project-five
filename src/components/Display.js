import React, { Component } from 'react';
// https://github.com/toomuchdesign/react-minimal-pie-chart
import { PieChart } from 'react-minimal-pie-chart';
import PieLegend from './PieLegend';


class Display extends Component {

  render() {

    return (
      <div className="wrapper">

        <section className="display" ref={this.props.scrollDisplay}>

          <h2>à la Mood</h2>

          {/* Loops through the emotions array that was passed down through props */}
          <ul className="pie-display-list">
            
            {this.props.chartData.map((emotionEntry, index) => {

              const { emotionA, emotionB, emotionC } = emotionEntry.threeEmotions;
              
              return (

                <li className="pie-display-item" key={emotionEntry.id}>

                  <div className="chart-wrapper" aria-label={`An emotional pie-chart comprised of ${emotionA.type} (${emotionA.percentage}%), ${emotionB.type} (${emotionB.percentage}%), and ${emotionC.type} (${emotionC.percentage}%)`} >
                      {/* Pre-built component from react-minimal-pie-chart library */}
                      <PieChart
                      
                        data={[
                          {
                            color: "#3F84E5",
                            title: emotionA.type,
                            value: parseInt(emotionA.percentage)
                          },
                          {
                            color: "#960200",
                            title: emotionB.type,
                            value: parseInt(emotionB.percentage)
                          },
                          {
                            color: "#3F784C",
                            title: emotionC.type,
                            value: parseInt(emotionC.percentage)
                          },
                        ]}
            
                      />

                  </div>

                  <PieLegend emotionEntry={emotionEntry}/>

                </li>

              )

            })}

          </ul>

          <a href="#form" className="button" title="Click to be brought to the top of the page, where you can create a pie chart">Add Another</a>

        </section>

      </div>
      
    )

  }

}

export default Display