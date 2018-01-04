import React, { Component } from 'react';

class Home extends Component {
  render() {

    return (

      
      <div>

        <section className="bg-img1 full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              <div className="cell small-12 align-self-middle">
                <h1 className="front-page-heading">Welcome to Helvellyn...</h1>
              </div>
            </div>
          </div>
        </section>
          
        <section className="bg-grey full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              
              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">A little about us...</h1>
              </div>
               <div className="cell small-12 align-self-middle">
                <p className="text-justify">Helvellyn is a technology consulting company with expertise 
                in Oil & Gas, and Life Sciences.  My name is Rich John, and Helvellyn is a
                company I started to work on interesting projects.  Some of these projects are 
                our own applications and ideas, and others are projects that people or companies 
                approach us to help with.  I have spent a lot of time developing software, from 
                large financial transactional three tier systems to full stack web systems.  I 
                have designed, developed, tested, tuned and scaled, and gained some valuable 
                experience along the way.  If you have a software development project, or a technical
                implementation going on, and you have a need for some expert help, lets talk about how 
                I might be able to get involved and help.  
                </p>
              </div>

              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Skills we offer</h1>
              </div>
               <div className="cell small-12 align-self-middle">
                <p className="text-justify">So what is a Full Stack Software Developer?  It's a common term 
                in the software development world these days, but what does it really mean?  To me, a FSD is a 
                software professional that is able to contribute at almost any level.  That would include the 
                development of any component within the scope of the application...including network 
                envirionment, cloud containers, database, object stores, API development, server technologies,  
                UI design and experience.  There a lot of different technology choices these days.  At Helvellyn
                we are mostly coding JavaScript on the server and web browser, and using web APIs to access, 
                and persist data.  We are very familiar with both Angular and React as platforms for writing 
                browser based applications, and we are using node.js on the server to implement APIs.  We love 
                the move toward lightweight containers, such as docker, to develop, test, and deploy solutions.


                </p>
              </div>

              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Know your water...</h1>
              </div>
               <div className="cell small-12 align-self-middle">
                <p className="text-justify">I'm a fly fisherman.  I love to be out on the water, 
                but sadly I don't get to be there as much as I would like.  
                From time to time, I hire a guide to take me fishing, and although I put in the same 
                amount of effort to catch fish as when I am on my own, generally the days with the 
                guide see more success.  There are so many variables...Water temperature...Weather 
                conditions...What's hatching?...Which flies to use? A guide is on the river every day.  
                They know the water...</p>
              </div>

              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Find a knowledgeable guide...</h1>
              </div>
               <div className="cell small-12 align-self-middle">
                <p className="text-justify">So the guide is able to increase the productivtiy of 
                the same fisherman by providing answers to questions that take time to figure out 
                on your own.  You don't need to waste time and energy on trying things out.  The 
                river is the guide's domain.  They are there day in day out, and 
                they know what works, and in what conditions.  Yes...you pay for it...
                but the end result is a more productive experience.
                </p>
              </div>

              
            </div>
          </div>
        </section>

        
        <section className="bg-img2 full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              <div className="cell small-12 align-self-middle">
                <h1 className="front-page-heading">Experience making things...</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grey full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Oil and Gas Industry</h1>

              </div>
              <div className="cell small-12 align-self-middle">
                <p className="text-justify">For 15 years, I developed financial software for Oil and Gas 
                Industry applications.  Over the years, I learned a lot about how to build software 
                that is easy to use, able to scale, is supportable, and manageable.  I also became very 
                familiar with how the industry works.  Oil and Gas is a fascinating eco system with so much
                going on, and so many different perspectives to consider.
                Legal and land rights, exploration and drilling using incredible technology, operating wells 
                and maximising yields with science and technology, and financials over a massive network of 
                business relationships.  When you drill down into any of these areas, you find a lot of 
                complexity, and with each area, experts that bring a wealth of knowledge.
                </p>
              </div>
              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Medical Devices</h1>

              </div>
              <div className="cell small-12 align-self-middle">
                <p className="text-justify">More recently, I have spent time in the Life Science world of Medical
                Device Manufacturing.  Here I managed the implementation and customization of ERP system projects.  
                FDA regulations strictly defines requirements for managing quality, and requires that company 
                procedures be defined and strictly followed.  These procedures often include the management of 
                data in an ERP system, and because of this systems are strictly managed such that changes can 
                not affect product quality or patient safety.  I spent a lot of time defining these processes, 
                writing customizations, and developing sub systems to manage various aspects of product manufacturing 
                and distribution.


                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-img2 full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              <div className="cell small-12 align-self-middle">
                <h1 className="front-page-heading">Being Outside</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-grey full-scr">
          <div className="row">
            <div className="grid-x grid-padding-x align-middle full-scr">
              <div className="cell small-12 align-self-middle">
                <h1 className="sub-title">Life</h1>
              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
}

export default Home;
