import React, { Component } from 'react';

import LaunchStart from '../components/LaunchStart';
import Details from '../components/Details'; 

class LaunchDetails extends Component {
    render() {
      return (          
        <React.Fragment>                
         <header className="header">
            <a className = "header__logo " href="#">&larr; go back</a>             
        </header>
        <section className="content">             
               <LaunchStart launch = {this.props.launch}/>
               <Details launch = {this.props.launch} rocket = {this.props.rocket} launchSite = {this.props.launchSite}/>       
        </section>
        <section className="mission-links">    
            <h2 className="mission-links__heading">Mission links</h2>       
            <div className="mission-links__btns">                    
                <a  className="mission-links__btn" href={this.props.launch.links.reddit_campaign}>reddit campaign</a>
                <a  className="mission-links__btn" href={this.props.launch.links.presskit}>presskit</a>
                <a  className="mission-links__btn" href={this.props.launch.links.video_link}>mission video</a>
            </div>
        </section>
        
        <footer className="footer">                               
            <ul className="social"> 
                 <li>follow spacex |</li>                      
                    <li ><a className="social__link" href="https://twitter.com/spacex">twitter</a></li>
                    <li ><a className="social__link" href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA">youtube</a></li>
                    <li ><a className="social__link" href="https://www.flickr.com/photos/spacex/">flickr</a></li>
                    <li ><a className="social__link" href="https://www.instagram.com/spacex">instagram</a></li>
                </ul>              
            <div>
                2018 space exploration technologies corp.
            </div>
        </footer>
        </React.Fragment>
      );
    }
  }
  
  export default LaunchDetails;