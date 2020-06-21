import React, { Component, Fragment } from 'react';
import PieChart from './PieChart';
// import '../prefix-free.js'
// import '../conic-gradient.js';

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
        {this.props.chartData.map((emotionEntry, index) => {

          const singleEmotions = [];
          // const emotionPercentage = [];
          // console.log(emotionEntry);

          for (let i in emotionEntry) {
            
            singleEmotions.push({
              type: emotionEntry[i].type,
              percentage: emotionEntry[i].percentage
            
            });
            // emotionPercentage.push(emotionEntry[i].percentage);
            // console.log(emotionEntry[i].type)

          }

          return singleEmotions.map((emotion, index) => {
            return <p key={index}>{emotion.type}: {emotion.percentage}</p>
          })

        })}

        <div className="pie"></div>

        {/* <PieChart /> */}

      </Fragment>
      
    )

  }

}

export default Display