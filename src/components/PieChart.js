import React, { Component, Fragment } from 'react';

class PieChart extends Component {

  render() {

    return (
      <section className="pie-chart">

        <div className="pie"></div>

        <div className="legend">

          <div>
            <p className="emotion emotion-one"></p>
            <p className="percentage"></p>
          </div>
          <div>
            <p className="emotion emotion-two"></p>
            <p className="percentage"></p>
          </div>
          <div>
            <p className="emotion emotion-three"></p>
            <p className="percentage"></p>
          </div>

        </div>

      </section>
    )

  }

}

export default PieChart