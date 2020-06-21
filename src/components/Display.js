import React, { Component, Fragment } from 'react';
// import PieChart from './PieChart';
import { PieChart } from 'react-minimal-pie-chart';

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
        {this.props.chartData.map((emotionEntry, index) => {

          const { emotionA, emotionB, emotionC } = emotionEntry;


          console.log(emotionA, emotionB, emotionC);

          return (

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


          )



















          // Creates a new array
          const singleEmotions = [];

          for (let i in emotionEntry) {
            
            singleEmotions.push({
              type: emotionEntry[i].type,
              percentage: parseInt(emotionEntry[i].percentage)
            
            });
            // emotionPercentage.push(emotionEntry[i].percentage);
            // console.log(emotionEntry[i].type)

          }

          console.log(emotionEntry.emotionA.type)

          singleEmotions.map((emotion, index) => {
            
            // return <p key={index}>{emotion.type}: {emotion.percentage}</p>

            // console.log(emotion.percentage)
            // return ( 
            
              // <div className="chart-wrapper">

              //   <PieChart
              //     animation
              //     animationDuration={500}
              //     animationEasing="ease-out"
              //     center={[50, 50]}
              //     data={[
              //       {
              //         color: "#E38627",
              //         title: "Emotion One",
              //         value: {emotion.percentage},
              //       },
              //       {
              //         color: "#C13C37",
              //         title: "Emotion Two",
              //         value: 25,
              //       },
              //       {
              //         color: "#6A2135",
              //         title: "Emotion Three",
              //         value: 10,
              //       },
              //     ]}
              //     labelPosition={50}
              //     lengthAngle={360}
              //     lineWidth={15}
              //     paddingAngle={0}
              //     radius={50}
              //     rounded
              //     startAngle={0}
              //     viewBoxSize={[100, 100]}
              //   />

              // </div>
            // )

          })




        })}


        {/* <PieChart /> */}

        {/* <div className="chart-wrapper">

          <PieChart
            animation
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={[
              {
                color: "#E38627",
                title: "One",
                value: 65,
              },
              {
                color: "#C13C37",
                title: "Two",
                value: 25,
              },
              {
                color: "#6A2135",
                title: "Three",
                value: 10,
              },
            ]}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={15}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
          />

        </div> */}

      </Fragment>
      
    )

  }

}

export default Display