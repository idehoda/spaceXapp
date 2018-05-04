
import * as React from "react"

class Details extends React.Component {
   render() {
      return (
        <div className="info-details">
        <div className="specifics">
            <h4 className="specifics__header">Details</h4>
            <p className="specifics__paragraph">
                {this.props.launch.details}
            </p>
        </div>
        <div className="specifics">
                <h4 className="specifics__header">Rocket</h4>
                <div className="specifics__characteristics">                           
                    <ul className="specifics__list">
                        <li className="specifics__item">Name : <span className="specifics__item--dark">{this.props.rocket.id}</span></li>
                        <li className="specifics__item">Company: <span className="specifics__item--dark">{this.props.rocket.company}</span></li>
                        <li className="specifics__item">Height: <span className="specifics__item--dark">{this.props.rocket.height.meters}M/{this.props.rocket.height.feet}FT</span></li>
                        <li className="specifics__item">Diameter: <span className="specifics__item--dark">{this.props.rocket.diameter.meters}M/{this.props.rocket.diameter.feet}FT</span></li>
                        <li className="specifics__item">Mass: <span className="specifics__item--dark">{this.props.rocket.mass.kg}kg/ {this.props.rocket.mass.lb}LB</span></li>
                    </ul>                      
                    <ul className="specifics__list">
                        <li className="specifics__item">First flight: <span className="specifics__item--dark">{this.props.rocket.first_flight}</span></li>
                        <li className="specifics__item">Country: <span className="specifics__item--dark">{this.props.rocket.country}</span></li>
                        <li className="specifics__item">Success rate: <span className="specifics__item--dark">{this.props.rocket.success_rate_pct}%</span></li>
                        <li className="specifics__item">Cost per launch: <span className="specifics__item--dark">${this.props.rocket.cost_per_launch}$</span></li>
                    </ul>                                
                </div>
                <p className="specifics__paragraph">
                    {this.props.rocket.description}
                </p>
        </div>
        <div className="specifics">
            <h4 className="specifics__header">Details</h4>
            <div className="specifics__characteristics">
                    <ul className="specifics__list">
                        <li className="specifics__item">Name : <span className="specifics__item--dark">{this.props.launchSite.full_name}</span></li>
                    </ul>
                    <ul className="specifics__list">
                        <li className="specifics__item">Location: <span className="specifics__item--dark">{this.props.launchSite.location.name},{this.props.launchSite.location.region}</span></li>
                    </ul>
            </div>
                <p className="specifics__paragraph">
                {this.props.launchSite.details}
                </p>
        </div>
    </div>
            )
    }
  }
  

export default Details