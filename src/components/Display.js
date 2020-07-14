import React, { Component } from 'react';
// https://github.com/toomuchdesign/react-minimal-pie-chart
import { PieChart } from 'react-minimal-pie-chart';
import PieLegend from './PieLegend';


class Display extends Component {

  constructor() {
    super();
    this.state = {
      colours: {
        happy: "#FFD639",
        elated: "#007CBE",
        proud: "#2B59C3",
        amazed: "#00AF54",
        excited: "#0A81D1",
        determined: "#FBAF00",
        content: "#9F6BA0",
        hopeful: "#62BBC1",
        relieved: "#A1E8AF",
        joy: "#EFBCD5",
        insecure: "#55868C",
        annoyed: "#DB7F67",
        anxious: "#8B2635",
        bored: "#F7B32B",
        frustrated: "#F72C25",
        sad: "#777DA7",
        jealous: "#3A2449",
        hurt: "#461220",
        disgusted: "#5C573E",
        angry: "#690500",
        confused: "#934B00",
        hungry: "#8AAA79",
        silly: "#B3679B",
        peaceful: "#B7D5D4",
        awed: "#C4F7A1",
        awkward: "#28666E",
        nostalgic: "#71A9F7",
        triumphant: "#FFD23F",
        curious: "#F08080",
        entranced: "#D1B1C8"
      }
    }
  }

  render() {

    return (
      <div className="wrapper">

        <section className="display" ref={this.props.scrollDisplay}>

          <h2>many moods</h2>

          {/* Loops through the emotions array that was passed down through props */}
          <ul className="pie-display-list">
            
            {this.props.chartData.map((emotionEntry) => {

              const { emotionA, emotionB, emotionC } = emotionEntry.threeEmotions;
              
              return (

                <li className="pie-display-item" key={emotionEntry.id}>

                  <div className="chart-wrapper" aria-label={`An emotional pie-chart comprised of ${emotionA.type} (${emotionA.percentage}%), ${emotionB.type} (${emotionB.percentage}%), and ${emotionC.type} (${emotionC.percentage}%)`} >
                      {/* Pre-built component from react-minimal-pie-chart library */}
                      <PieChart
                        // Pie Chart rendered by passing in props below
                        data={[
                          {
                            color: this.state.colours[emotionA.type],
                            // color: "#3F84E5",
                            title: emotionA.type,
                            value: parseInt(emotionA.percentage)
                          },
                          {
                            color: this.state.colours[emotionB.type],
                            // color: "#960200",
                            title: emotionB.type,
                            value: parseInt(emotionB.percentage)
                          },
                          {
                            color: this.state.colours[emotionC.type],
                            // color: "#3F784C",
                            title: emotionC.type,
                            value: parseInt(emotionC.percentage)
                          },
                        ]}
            
                      />

                  </div>

                  <PieLegend 
                    emotionEntry={emotionEntry}
                    colours={this.state.colours}
                  />

                  <button 
                    className="button pie-display-button"
                    onClick={() => this.props.deleteChart(emotionEntry.id)}
                  >
                    X
                  </button>

                </li>

              )

            })}

          </ul>

          <a href="#header" className="button add-another-button" title="Click to be brought to the top of the page, where you can create a pie chart">
            Add Another
          </a>

        </section> {/* display section ends  */}

      </div> // wrapper ends
      
    )

  }

}

export default Display