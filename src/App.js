import React, { Component, Fragment } from 'react';
import firebase from './firebase.js';
import Display from './components/Display';

class App extends Component {
  
  constructor() {

    super();
    this.state = {

      emotions: [],
      emotionAtype: "",
      emotionBtype: "",
      emotionCtype: "",
      emotionApercentage: 0,
      emotionBpercentage: 0,
      emotionCpercentage: 0

    }

  }

  componentDidMount() {

    // create a variable to store a reference to our database
    const dbRef = firebase.database().ref();

    // get all the values within the database
    // 1. returning a current snapshot of what is in our DB
    // 2. continue watching our DB and return a snapshot of it when something is added/removed/updated
    dbRef.on('value', (response) => {

      // 1. Make copy of State
      // a variable that we will setState with which we'll update our books with
      const newState = [];

      // Gets information from database
      const data = response.val();

      // 2. Make changes to copy of State
      // Place the database information within the copy of state
      for (let entry in data) {

        newState.push(data[entry])

      }

      // 3. Set State with changed copy
      // automatically triggers the render method
      this.setState({ emotions: newState });

    })

  }

  // Updates state everytime a value changes in either the dropdowns or the inputs
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })

  }


  addChartData = (e) => {

    e.preventDefault();

    console.log(this)

    // const dbRef = firebase.database().ref();

    // dbRef.push({
    //   emotionA: {
    //     percentage: this.state.emotionApercentage,
    //     type: this.state.emotionAtype
    //   },
    //   emotionB: {
    //     percentage: this.state.emotionBpercentage,
    //     type: this.state.emotionBtype
    //   },
    //   emotionC: {
    //     percentage: this.state.emotionCpercentage,
    //     type: this.state.emotionCtype
    //   }

    // });

    // this.setState({ 
    //   emotionApercentage: "",
    //   emotionAtype: 0,
    //   emotionBpercentage: "",
    //   emotionBtype: 0,
    //   emotionCpercentage: "",
    //   emotionCtype: 0,
    // })

  }

  render() {

    return (
      <Fragment>

        <div className="form" id="form">

          <header>
            <h1>How's it going?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laudantium eius, iste minus beatae sed id ex accusantium. Ducimus reiciendis ab deleniti tempore nostrum doloribus quos aliquam veniam dolores dolorum!</p>
          </header>

          <main>
            <form>

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
                />
              </fieldset>
              <button type="submit" onClick={this.addChartData}>Submit</button>

            </form>
          </main>

        </div>

        <Display chartData={this.state.emotions} />

      </Fragment>
    );

  }
  
}

export default App;
