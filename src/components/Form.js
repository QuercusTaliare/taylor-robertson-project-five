import React, { Component, Fragment } from 'react';

class Form extends Component {
  
  render() {
    
    return (

      <div className="form">

        <header>
          <h1>How's it going?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laudantium eius, iste minus beatae sed id ex accusantium. Ducimus reiciendis ab deleniti tempore nostrum doloribus quos aliquam veniam dolores dolorum!</p>
        </header>
        <main>
          <form>
            <fieldset>
              <legend>Emotion 1</legend>
              <select name="" id="">
                <option value="">Select First Emotion</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <input type="number"/>
            </fieldset>
            <fieldset>
              <legend>Emotion 2</legend>
              <select name="" id="">
                <option value="">Select Second Emotion</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <input type="number" />
            </fieldset>
            <fieldset>
              <legend>Emotion 3</legend>
              <select name="" id="">
                <option value="">Select Third Emotion</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <input type="number" />
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </main>

      </div>

    )

  }

}

export default Form;