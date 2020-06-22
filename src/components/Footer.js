import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// https://www.npmjs.com/package/@fortawesome/react-fontawesome
// https://fontawesome.com/license

// https://github.com/juliadufresne/julia-dufresne-deeper

class Footer extends Component {
  render() {

    return (
      <footer>
        <h3></h3>
        <p>Pie Charts rendered by the wonderful <a href="https://github.com/toomuchdesign/react-minimal-pie-chart">React Minimal Pie Chart</a> library. Towards them, I am feeling 70% grateful, 20% impressed, and 10% inspired</p>
        <p>Icons created by the inimitable <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome">Font Awesome</a></p>
        <p>Made with <span>♥</span> during emotionally turbulent times in Burlington, ON</p>
        <nav>
          <ul>
            <li title="Click to access Taylor's Twitter page">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li title="Click to access the website's Github repo">
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </ul>
        </nav>
      </footer>
    )

  }
}


export default Footer;