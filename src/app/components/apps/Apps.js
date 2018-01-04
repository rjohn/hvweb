import React, { Component } from 'react';

class Apps extends Component {
  render() {

    return (

      <div>

        <div className="row">
          <div className="small-12 columns">
            <div className="sub-title">Outdoor Apps</div>
          </div>
        </div>

        <div className="row">
          <div className="small-12 medium-5 large-4 columns">

            <div className="card-user-profile">
              <img className="card-user-profile-img" src="https://unsplash.it/2048/1000/?image=434" alt="space" />
              <div className="card-user-profile-content card-section">
                <div className="card-user-profile-avatar">
                  <img src="https://pbs.twimg.com/profile_images/422887689612820482/sZtHMJu5.png" alt="yeti" />
                </div>
                <p className="card-user-profile-name">Tag Hunter</p>
                <p className="card-user-profile-status">Find Available Tags</p>
                <p className="card-user-profile-info">The Tag Hunter keeps an eye on the leftover lists, and notifies you if anything appears that you are interested in.</p>
              </div>

              <div className="card-user-profile-actions">
                <a href="" className="card-user-profile-button button hollow">Get Started</a>
                <a href="" className="card-user-profile-button button hollow secondary">More Info</a>
              </div>
            </div>
          </div>

          <div className="small-12 medium-5 large-4 columns">

            <div className="card-user-profile">
              <img className="card-user-profile-img" src="https://unsplash.it/2048/1000/?image=433" alt="space" />
              <div className="card-user-profile-content card-section">
                <div className="card-user-profile-avatar">
                  <img src="https://pbs.twimg.com/profile_images/422887689612820482/sZtHMJu5.png" alt="yeti" />
                </div>
                <p className="card-user-profile-name">Hunt Intel</p>
                <p className="card-user-profile-status">Hunt Data Statistics</p>
                <p className="card-user-profile-info">Hunt Intel puts publicly available hunting statistics at your fingertips.  If you need more information about an area, or are trying to decide where to go, this is the place to look.</p>
              </div>

              <div className="card-user-profile-actions">
                <a href="" className="card-user-profile-button button hollow">Get Started</a>
                <a href="" className="card-user-profile-button button hollow secondary">More Info</a>
              </div>
            </div>
          </div>

          <div className="small-12 medium-5 large-4 columns">

            <div className="card-user-profile">
              <img className="card-user-profile-img" src="https://unsplash.it/2048/1000/?image=1043" alt="space" />
              <div className="card-user-profile-content card-section">
                <div className="card-user-profile-avatar">
                  <img src="https://pbs.twimg.com/profile_images/422887689612820482/sZtHMJu5.png" alt="yeti" />
                </div>
                <p className="card-user-profile-name">OnPoint</p>
                <p className="card-user-profile-status">Waypoint Data Manager</p>
                <p className="card-user-profile-info">OnPoint lets you store and manage your way point data, and import/export to various other systems and services such as Google or OnX Maps</p>
              </div>

              <div className="card-user-profile-actions">
                <a href="" className="card-user-profile-button button hollow">Get Started</a>
                <a href="" className="card-user-profile-button button hollow secondary">More Info</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Apps;
