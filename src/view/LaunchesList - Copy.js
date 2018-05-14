import React, { Component } from 'react';
import logo from '../img/space_x_logo_bw_centered.svg';
import pointer from '../img/arrow_pointer.svg';
class LaunchesList extends Component {
    render() {
      return (
        <div>
            <section className="section-filters">
              <div className="section-filters__header">
                <img className ="section-filters__logo" src={logo} alt="centered logo"/>
                <h4 className="info-main__header info-main__header--pale">Launches 2018</h4>                
              </div>
              <div className="section-filters__btns">
                <div className="mission-links__btns">                    
                  <a  className="mission-links__btn" >all rockets</a>
                  <a  className="mission-links__btn" >falcon9</a>
                  <a  className="mission-links__btn" >falcon heacy</a>
                  <a  className="mission-links__btn" >dragon</a>
                </div>                
              </div>              
            </section>

            <section className="section-launches">
              <div className = "section-launches__row section-launches__row-even">
                <div className="section-launches__cell">                  
                    <a className="section-launches__header">28 April 2018</a>
                    <span className = "section-launches__pointer" >
                      <img className = "section-launches__arrow-left" src={pointer}/>
                    </span>
                    <h5 className = "section-launches__info">
                        Rocket: <span className="section-launches__names">Falcon9</span> | Launch site: <span className="section-launches__names" >Kwafdvfdmvf'ov</span>
                    </h5>
                  
                </div>
                <div className="section-launches__cell section-launches__cell-right">
                
                </div>             
              </div>
              <div className = "section-launches__row section-launches__row-odd">
                <div className="section-launches__cell">

                </div>
                <div className="section-launches__cell section-launches__cell-right">
                <a className="section-launches__header">28 April 2018</a>
                    <span className = "section-launches__pointer section-launches__pointer-right" >
                      <img className = "section-launches__arrow" src={pointer}/>
                    </span>
                    <h5 className = "section-launches__info">
                        Rocket: <span className="section-launches__names">Falcon9</span> | Launch site: <span className="section-launches__names" >Kwafdvfdmvf'ov</span>
                    </h5>
                </div>
              </div>   
               
            </section >
            <h1>TEST</h1>
            <button onClick={this.props.onLaunchClick} >IN</button>
            
        </div>  
      );
    }
  }
  
  export default LaunchesList;