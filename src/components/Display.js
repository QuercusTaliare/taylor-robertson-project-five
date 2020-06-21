import React, { Component, Fragment } from 'react';
// import PieChart from './PieChart';
import { PieChart } from 'react-minimal-pie-chart';

// https://github.com/toomuchdesign/react-minimal-pie-chart


class Display extends Component {

  render() {

    // this.props.chartData.forEach(item => {
    //   for (let i in item) {
    //     console.log(item[i].type)
    //   }

    // })

    return (
      <Fragment>

        <h2>How are you feeling?</h2>

        {/* Loops through the emotions array that was passed down through props */}
        <ul>
          {console.log(this.props.chartData)}
           
          {this.props.chartData.map((emotionEntry, index) => {

            const { emotionA, emotionB, emotionC } = emotionEntry;
            

            return (
              <li>

                <div className="chart-wrapper">

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

                

              </li>


            )

            // // Creates a new array
            // const singleEmotions = [];

            // for (let i in emotionEntry) {
              
            //   singleEmotions.push({
            //     type: emotionEntry[i].type,
            //     percentage: parseInt(emotionEntry[i].percentage)
              
            //   });
            //   // emotionPercentage.push(emotionEntry[i].percentage);
            //   // console.log(emotionEntry[i].type)

            // }

            // singleEmotions.map((emotion, index) => {
              

            // })




          })}

        </ul>

      </Fragment>
      
    )

  }

}

export default Display