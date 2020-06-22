import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
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

  }

  // Updates state everytime the database is updated
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

      // 3. Set State with changed copy
      this.setState({ emotions: newState });

    })

  }

  // HANDLE CHANGE FUNCTION - Updates state everytime a value changes in either the dropdowns or the inputs
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
    
  }

  render() {

    const emotionPercentage = parseInt(this.state.emotionApercentage) + parseInt(this.state.emotionBpercentage) + parseInt(this.state.emotionCpercentage);

    return (
      <Fragment>

        <div className="form" id="form">

          <header>
            <h1>Pie me a Sliver</h1>
            <ol>
              <li>Choose 3 emotions that you're feeling the most right now.  Tip: <em>You have to choose all 3!</em></li>
              <li>Decide how much of each emotion you're feeling.  Tip: <em>These have to add up to 100%!</em></li>
              <li>Press Submit and see your pie-chart come to life!</li>
            </ol>
          </header>

          <main>
            <form>
              <h2>How are you feeling?</h2>
              <fieldset>
                <legend>Emotion 1</legend>
                <select name="emotionAtype" id="" onChange={this.handleChange} value={this.state.emotionAtype}>
                  <option value="">Select First Emotion</option>
                  <option value="happy">Happy</option>
                  <option value="elated">Elated</option>
                  <option value="proud">Proud</option>
                  <option value="amazed">Amazed</option>
                  <option value="excited">Excited</option>
                  <option value="determined">Determined</option>
                  <option value="content">Content</option>
                  <option value="hopeful">Hopeful</option>
                  <option value="relieved">Relieved</option>
                  <option value="joy">Joy</option>
                </select>
                <input 
                  type="number" 
                  name="emotionApercentage" 
                  onChange={this.handleChange} 
                  value={this.state.emotionApercentage}
                  min="1"
                  max="98"
                />
              </fieldset>
              <fieldset>
                <legend>Emotion 2</legend>
                <select name="emotionBtype" id="" onChange={this.handleChange} value={this.state.emotionBtype}>
                  <option value="">Select Second Emotion</option>
                  <option value="insecure">Insecure</option>
                  <option value="annoyed">Annoyed</option>
                  <option value="anxious">Anxious</option>
                  <option value="bored">Bored</option>
                  <option value="frustrated">Frustrated</option>
                  <option value="sad">Sad</option>
                  <option value="jealous">Jealous</option>
                  <option value="hurt">Hurt</option>
                  <option value="disgusted">Disgusted</option>
                  <option value="angry">Angry</option>
                </select>
                <input 
                  type="number"
                  name="emotionBpercentage"
                  onChange={this.handleChange}
                  value={this.state.emotionBpercentage} 
                  min="1"
                  max="98"
                />
              </fieldset>
              <fieldset>
                <legend>Emotion 3</legend>
                <select name="emotionCtype" id="" onChange={this.handleChange} value={this.state.emotionCtype}>
                  <option value="">Select Third Emotion</option>
                  <option value="confused">Confused</option>
                  <option value="hungry">Hungry</option>
                  <option value="silly">Silly</option>
                  <option value="peaceful">Peaceful</option>
                  <option value="awed">Awed</option>
                  <option value="awkward">Awkward</option>
                  <option value="nostalgia">Nostalgia</option>
                  <option value="triumphant">Triumphant</option>
                  <option value="curious">Curious</option>
                  <option value="entranced">Entranced</option>
                </select>
                <input
                  type="number"
                  name="emotionCpercentage"
                  onChange={this.handleChange}
                  value={this.state.emotionCpercentage}
                  min="1"
                  max="98"
                />
              </fieldset>
              
              
              <div>
                <p>Please Note: All the percentages you enter need to add up to 100%</p>
                <p>{emotionPercentage} / 100%</p>
              </div>

              {(emotionPercentage === 100 && this.state.emotionAtype !== "" && this.state.emotionBtype !== "" && this.state.emotionCtype !== "") 
                ? <button type="submit" onClick={this.addChartData}>Submit</button> 
                : null}
              

            </form>
          </main>

        </div>

        <Display chartData={this.state.emotions} />
        <Footer />

      </Fragment>
    );

  }
  
}

export default App;
