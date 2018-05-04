import React, { Component } from 'react';
 

class LaunchDetails extends Component {
    render() {
      return (
        <React.Fragment>
         <header className="header">
            <a className = "header__logo " href="#">&larr; go back</a>                    
        </header>
        {console.log(this.props.launchSite)}
        <section className="content">
            
            <div className="info-main">
                <h4 className="info-main__header info-main__header--pale">07 july 2018</h4>
                <h1 className="info-main__big-header">iridium next 5 launch</h1>
                <h4 className="info-main__header ">07 july 2018</h4>
                <div className = "info-main__rocket-logo">
                    <img src="https://images2.imgbox.com/1f/13/kR2sdzO4_o.png" alt="tess"/>
            </div>
            </div>

            <div className="info-details">
                <div className="specifics">
                    <h4 className="specifics__header">Details</h4>
                    <p className="specifics__paragraph">
                        Fifth Iridium NEXT Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery.
                    </p>
                </div>
                <div className="specifics">
                        <h4 className="specifics__header">Rocket</h4>
                        <div className="specifics__characteristics">                           
                            <ul className="specifics__list">
                                <li className="specifics__item">Name : <span className="specifics__item--dark">falcon9</span></li>
                                <li className="specifics__item">Company: <span className="specifics__item--dark">SpaceX</span></li>
                                <li className="specifics__item">Height: <span className="specifics__item--dark">70m/229.6FT</span></li>
                                <li className="specifics__item">Diameter: <span className="specifics__item--dark">3.7M/ 12FT</span></li>
                                <li className="specifics__item">Mass: <span className="specifics__item--dark">549054kg/ 1207920lb</span></li>
                            </ul>                      
                            <ul className="specifics__list">
                                <li className="specifics__item">First flight: <span className="specifics__item--dark">2010-06-04</span></li>
                                <li className="specifics__item">Country: <span className="specifics__item--dark">United States</span></li>
                                <li className="specifics__item">Success rate: <span className="specifics__item--dark">94%</span></li>
                                <li className="specifics__item">Cost per launch: <span className="specifics__item--dark">$61200000</span></li>
                            </ul>                                
                        </div>
                        <p className="specifics__paragraph">
                            Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.
                        </p>
                </div>
                <div className="specifics">
                    <h4 className="specifics__header">Details</h4>
                    <div className="specifics__characteristics">
                            <ul className="specifics__list">
                                <li className="specifics__item">Name : <span className="specifics__item--dark">Cape Canaveral Air Force Station Space Launch Complex 40</span></li>
                            </ul>
                            <ul className="specifics__list">
                                <li className="specifics__item">Location: <span className="specifics__item--dark">Cape Canaveral, Florida</span></li>
                            </ul>
                    </div>
                        <p className="specifics__paragraph">
                                SpaceX primary Falcon 9 launch pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Initially used to launch Titan rockets for Lockheed Martin. Back online since CRS-13 on 2017-12-15.                            
                        </p>
                </div>
            </div>
        </section>
        <section className="mission-links">    
            <h2 className="mission-links__heading">Mission links</h2>       
            <div className="mission-links__btns">                    
                <a  className="mission-links__btn" href="">reddit campaign</a>
                <a  className="mission-links__btn" href="">presskit</a>
                <a  className="mission-links__btn" href="">mission video</a>
            </div>
        </section>
        
        <footer className="footer">                               
            <ul className="social"> 
                 <li>follow spacex |</li>                      
                    <li ><a className="social__link" href="">twitter</a></li>
                    <li ><a className="social__link" href="">youtube</a></li>
                    <li ><a className="social__link" href="">flickr</a></li>
                    <li ><a className="social__link" href="">instagram</a></li>
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