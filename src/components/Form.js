import React, { Component, Fragment } from 'react';
import firebase from '../firebase';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      emotionAtype: "",
      emotionBtype: "",
      emotionCtype: "",
      emotionApercentage: 33,
      emotionBpercentage: 33,
      emotionCpercentage: 34
    }
  }

  // FORM METHODS

  // HANDLE CHANGE FUNCTION - Updates state everytime a value changes in either the dropdowns or the inputs
  // Adapted from Juno Bookshelf Code-along
  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  // ADD CHART DATA FUNCTION - Takes form input data and puts it into database
  // Adapted from Juno Bookshelf Code-along
  // Event Listener on Submit Button
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

    // The total of 3 percentage inputs, with error handling for NaN
    const emotionPercentage = parseInt(this.state.emotionApercentage) + parseInt(this.state.emotionBpercentage) + parseInt(this.state.emotionCpercentage) || "Please only use numbers, my friend!";

    return(

      <Fragment>
        
        <div className="wrapper">

          <main>
            <form>

              <h2>How's it going?</h2>

              <div className="emotion-entry-container">

                <fieldset>
                  <legend className="sr-only">Emotion 1</legend>
                  <div className="select-container">
                    <select
                      name="emotionAtype"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionAtype}
                    >
                      <option value="" disabled>Select 1st Emotion</option>
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
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      name="emotionApercentage"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionApercentage}
                      min="1"
                      max="98"
                    />
                    <span>%</span>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="sr-only">Emotion 2</legend>
                  <div className="select-container">
                    <select
                      name="emotionBtype"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionBtype}
                    >
                      <option value="" disabled>Select 2nd Emotion</option>
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
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      name="emotionBpercentage"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionBpercentage}
                      min="1"
                      max="98"
                    />
                    <span>%</span>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="sr-only">Emotion 3</legend>
                  <div className="select-container">
                    <select
                      name="emotionCtype"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionCtype}
                    >
                      <option value="" disabled>Select 3rd Emotion</option>
                      <option value="confused">Confused</option>
                      <option value="hungry">Hungry</option>
                      <option value="silly">Silly</option>
                      <option value="peaceful">Peaceful</option>
                      <option value="awed">Awed</option>
                      <option value="awkward">Awkward</option>
                      <option value="nostalgic">Nostalgic</option>
                      <option value="triumphant">Triumphant</option>
                      <option value="curious">Curious</option>
                      <option value="entranced">Entranced</option>
                    </select>
                  </div>
                  <div className="input-container">
                    <input
                      type="number"
                      name="emotionCpercentage"
                      className="user-entry"
                      onChange={this.handleChange}
                      value={this.state.emotionCpercentage}
                      min="1"
                      max="98"
                    />
                    <span>%</span>
                  </div>
                </fieldset>

              </div>


              {/* Displays total percentage of inputted values */}
              <p className="percentage-fraction">
                = 
                {(emotionPercentage === 100)
                  ? <span className="form-complete">{emotionPercentage}%</span>
                  : <span className="form-incomplete">{emotionPercentage}%</span>}
              </p>
              
              {/* Makes Submit button clickable when form is filled */}
              {(emotionPercentage === 100 && this.state.emotionAtype !== "" && this.state.emotionBtype !== "" && this.state.emotionCtype !== "")
                ? <button 
                    type="submit" 
                    className="button" 
                    onClick={(e) => {
                      this.addChartData(e);
                      this.props.scrollPage();
                    }}
                    title="Submit form to create pie chart"
                  >Submit</button>
                : <button type="submit" className="button disabled" tabIndex="-1">Submit</button>}

            </form>

          </main>

        </div> {/* wrapper ends */}
      
      </Fragment>
      

    )

  }

}

export default Form;