import pointer from '../img/arrow_pointer.svg';
import * as React from "react";
import {format} from 'date-fns';

class Leftbox extends React.Component {
  constructor(props){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){ //handle click function from props + scroll top
    this.props.onClick();
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
   render() {
      return (
        <div className="section-launches__cell">                  
        <a onClick = {this.handleClick} className="section-launches__header">
         {
            format( this.props.data.launch_date_utc.substring(0, 10), 'DD MMMM YYYY') 
           }
        </a>
        <span className = "section-launches__pointer" >
          <img className = "section-launches__arrow-left" src={pointer} alt = "arr"/>
        </span>
        <h5 className = "section-launches__info">
            Rocket: 
            <span className="section-launches__names">{this.props.data.rocket.rocket_name}</span>
            | Launch site: 
            <span className="section-launches__names" >{this.props.data.launch_site.site_name_long}</span>
        </h5>
       
       </div>
      )}
  }
  

export default Leftbox

