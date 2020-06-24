import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import Header from './components/Header';
import Form from './components/Form';
import Display from './components/Display';
import Footer from './components/Footer';
import { isIE } from 'react-device-detect';

class App extends Component {
  
  constructor() {

    super();
    this.state = {

      emotions: [],
      
    }

    // Creates reference for Display component, for scrolling
    // Passed into Display component
    this.scrollDisplay = React.createRef();
  }

  //LIFECYCLE METHODS

  // Updates state everytime the database is updated
  // Adapted from Juno Bookshelf Code-along
  componentDidMount() {

    // create a variable to store a reference to our database
    const dbRef = firebase.database().ref();

    // Constantly monitor what values are in the database, and when something changes, run callback function
    dbRef.on('value', (response) => {

      // 1. a) Make copy of State
      const newState = [];

      // 1. b) Get information from database
      const data = response.val();

      // 2. Make changes to copy of State
      for (let entry in data) {

        // newState.push(data[entry]);

        newState.push({
          threeEmotions: data[entry],
          id: entry
        })

      }

      // Reverse, so the newest entries are displayed when rendered to page
      const reverseNewState = newState.reverse();

      // 3. Set State with changed copy
      this.setState({ emotions: reverseNewState });

    })

  }

  // APP METHODS

  // DELETE CHART FUNCTION - Deletes a chart from the Display Component
  // Adapted from Juno Bookshelf Code-along
  // Called in Display component
  deleteChart = (emotionId) => {
    
    const dbRef = firebase.database().ref();

    dbRef.child(emotionId).remove();

  }

  // SCROLL PAGE FUNCTION - Scrolls to Display component
  // Called in Form component
  scrollPage = () => {
    window.scrollTo(0, this.scrollDisplay.current.offsetTop)
  }

  render() {

    if (isIE) return (
      <div> IE is not supported on this website. Please download Firefox, Chrome, Edge, or Safari for a faster, safer browsing experience! </div>
    )

    return (
      <Fragment>

        <Header />

        <Form scrollPage={this.scrollPage}/>

        <Display 
          chartData={this.state.emotions} 
          scrollDisplay={this.scrollDisplay}
          deleteChart={this.deleteChart}
        />
        
        <Footer />

      </Fragment>
    );

  }
  
}

export default App;
