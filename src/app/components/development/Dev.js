import React, { Component } from 'react';
import Weather from '../widgets/Weather'

class Dev extends Component {
  render() {

    return (

      
      <div>
          
        <section className="bg-grey full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              
              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Development</h1>
              </div>

              <div className="textwidget">
                <span className="test-title">Got a development project?<a href="/contact#project">Get in touch</a></span>
              </div>

              <div className="sub-title">The Weather...Powered by DarkSky</div>
          
              <Weather/>

            </div>
          </div>
        </section>

        neave.com
zoom.earth
darksky


      </div>
    );
  }
}

export default Dev;