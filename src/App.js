import React, { Component, Fragment } from 'react';
import Form from './components/Form';

class App extends Component {
  
  constructor() {

    super();
    this.state = {
      emotions: []
    }

  }

  render() {

    return (
      <Fragment>
        <Form />
      </Fragment>
    );

  }
  
}

export default App;
