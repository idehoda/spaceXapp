import logo from '../img/space_x_logo_bw_centered.svg';
import * as React from "react";

class SectionFilters extends React.Component {
    constructor(props) {
        super(props);
        this.transfer = this.transfer.bind(this);
      }
      transfer(e){  
          this.props.onChange(e.currentTarget.dataset.name);
      }  
   render() {
      return (
        <section className="section-filters">
            <div className="section-filters__header">
                <img className ="section-filters__logo" src={logo} alt="centered logo"/>
                <h4 className="info-main__header info-main__header--pale">Launches 2018</h4>                
            </div>
            <div className="section-filters__btns">
                <div className="mission-links__btns">               
                <a  onClick={this.transfer} className="mission-links__btn" >All rockets</a>
                    {
                        this.props.options.map((element, index) =>{
                        return <a data-name = {element} key={index}  onClick={this.transfer} className="mission-links__btn" >{element}</a>                      
                    })
                    }
                </div>                
            </div>    
        </section>
      )}
  }  

export default SectionFilters