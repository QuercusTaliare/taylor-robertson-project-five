import React, { Component } from 'react';

class Header extends Component {

  render() {
    
    return (
      
      <header id="header">
        <h1>feels</h1>
        <ul>
          <li><em>Choose 3 emotions</em> that you're feeling the most right now.</li>
          <li><em>Select how much (%)</em> of each emotion you're feeling.</li>
          <li><em>Press Submit</em>and see your pie-chart come to life!</li>
        </ul>
      </header>

    )

  }

}

export default Header;