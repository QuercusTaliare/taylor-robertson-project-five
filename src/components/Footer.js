import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {

    return (
      <footer>
        <section className="attributions">

          <h3>Thanks</h3>
          <p>
            Towards the following, I am feeling 70% grateful, 20% impressed, and 10% inspired
          </p>
          <ul>
            <li>Pie Charts rendered by the wonderful <a href="https://github.com/toomuchdesign/react-minimal-pie-chart" title="Visit the react-minimal-pie-chart GitHub repo" target="_blank">React Minimal Pie Chart</a> library. </li>
            <li>Icons created by the awesome <a href="https://fontawesome.com/license" title="Visit FontAwesome's licence agreement" target="_blank">Font Awesome</a>.</li>
            <li>Partially inspired by Julia Dufresne's fantastic project <a href="https://github.com/juliadufresne/julia-dufresne-deeper" title="Visit Julia Defresne's GitHub page for the project, Deeper" target="_blank">Deeper</a>.</li>
          </ul>

        </section>
        <section className="me">

          <h3>Me</h3>
          <nav>
            <ul>
              <li>

                <a href="https://twitter.com/taylorRdev" title="Click to access Taylor's Twitter page"target="_blank">
                  <FontAwesomeIcon 
                    icon={faTwitter} 
                    size="1x" 
                    className="social-icon" 
                  />
                </a>
                
              </li>
              <li>

                <a href="https://github.com/QuercusTaliare" title="Click to access the website's Github repo" target="_blank">
                  <FontAwesomeIcon 
                    icon={faGithub} 
                    size="1x" 
                    className="social-icon" 
                  />
                </a>
                
              </li>
            </ul>
          </nav>
          <p>
            Made with <span aria-label="love">♥</span> during Juno College's <a href="https://junocollege.com/bootcamp" title="Description of the bootcamp" target="_blank">Web Dev Bootcamp</a> | Cohort calc(30 -3)
          </p>
          

        </section>
      </footer>
    )

  }
}


export default Footer;