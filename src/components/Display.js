import React, { Component, Fragment } from 'react';
// https://github.com/toomuchdesign/react-minimal-pie-chart
import { PieChart } from 'react-minimal-pie-chart';
import PieLegend from './PieLegend';


class Display extends Component {

  render() {

    return (
      <Fragment>

        <h2>Pie-ary: a diary told through pies</h2>

        {/* Loops through the emotions array that was passed down through props */}
        <ul>
           
          {this.props.chartData.map((emotionEntry, index) => {

            console.log(emotionEntry.id);

            const { emotionA, emotionB, emotionC } = emotionEntry.threeEmotions;
            
            return (

              <li key={emotionEntry.id}>

                <div className="chart-wrapper">
                    {/* Pre-built component from react-minimal-pie-chart library */}
                    <PieChart
                      // animation
                      // animationDuration={500}
                      // animationEasing="ease-out"
                      // center={[50, 50]}
                      data={[
                        {
                          color: "#E38627",
                          title: emotionA.type,
                          value: parseInt(emotionA.percentage)
                        },
                        {
                          color: "#C13C37",
                          title: emotionB.type,
                          value: parseInt(emotionB.percentage)
                        },
                        {
                          color: "#6A2135",
                          title: emotionC.type,
                          value: parseInt(emotionC.percentage)
                        },
                      ]}
                      // label={() => emotionA.type}
                      // labelPosition={50}
                      // lengthAngle={360}
                      // lineWidth={15}
                      // paddingAngle={0}
                      // radius={50}
                      // rounded
                      // startAngle={0}
                      // viewBoxSize={[100, 100]}
                    />

                </div>

                <PieLegend emotionEntry={emotionEntry}/>

              </li>

            )

          })}

        </ul>

        <a href="#form">Add Another</a>

      </Fragment>
      
    )

  }

}

export default Display