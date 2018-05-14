import * as React from "react"
import {format} from 'date-fns'
import Counter from './Counter';

class LaunchStart extends React.Component {
   render() {
      return (
        <div className="info-main">
            <h4 className="info-main__header info-main__header--pale">
                {                    
                    format(this.props.launch.launch_date_utc.substring(0, 10), 'DD MMMM YYYY')                   
                }
            </h4>
        <h1 className="info-main__big-header"> {this.props.launch.rocket.second_stage.payloads[0].payload_id} launch</h1>
            <Counter from={this.props.launch.launch_date_utc} to={ 0}/> 

        <div className = "info-main__rocket-logo">
            <img src = {this.props.launch.links.mission_patch} alt="tess"/>
        </div>
    </div>
            )
    }
  }
  

export default LaunchStart