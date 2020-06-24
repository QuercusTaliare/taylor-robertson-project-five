import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import Form from './components/Form';
import Display from './components/Display';
import Footer from './components/Footer';

class App extends Component {
  
  constructor() {

    super();
    this.state = {

      emotions: [],
      emotionAtype: "",
      emotionBtype: "",
      emotionCtype: "",
      emotionApercentage: 33,
      emotionBpercentage: 33,
      emotionCpercentage: 34

    }

    this.scrollDisplay = React.createRef();
  }

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

  // DELETE CHART FUNCTION - Deletes a chart from the Display Component
  // Borrowed from Juno Bookshelf Code-along
  deleteChart = (emotionId) => {
    
    const dbRef = firebase.database().ref();

    dbRef.child(emotionId).remove();

  }

  // SCROLL PAGE FUNCTION - Scrolls to Display component
  scrollPage = () => {
    window.scrollTo(0, this.scrollDisplay.current.offsetTop)
  }

  // HANDLE CHANGE FUNCTION - Updates state everytime a value changes in either the dropdowns or the inputs
  // Borrowed from Juno Bookshelf Code-along
  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  // ADD CHART DATA FUNCTION - Takes form input data and puts it into database
  addChartData = (e) => {

    e.preventDefault();
    
    const dbRef = firebase.database().ref();

    dbRef.push({

      emotionA: {
        percentage: this.state.emotionApercentage,
        type: this.state.emotionAtype
      },
      emotionB: {
        percentage: this.state.emotionBpercentage,
        type: this.state.emotionBtype
      },
      emotionC: {
        percentage: this.state.emotionCpercentage,
        type: this.state.emotionCtype
      }

    });

    this.setState({ 
      emotionApercentage: 33,
      emotionAtype: "",
      emotionBpercentage: 33,
      emotionBtype: "",
      emotionCpercentage: 34,
      emotionCtype: "",
    })

    window.scrollTo(0, this.scrollDisplay.current.offsetTop)
    
  }

  render() {

    return (
      <Fragment>

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
