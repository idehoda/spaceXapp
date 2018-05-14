import React from 'react';
import Leftbox from '../components/Leftbox';
import Rightbox from '../components/Rightbox';
import SectionFilters from '../components/SectionFilters';

  class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
      super();
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    state = { rocketNameFilter: ''};
    get availableRocketNames() {
      const {launches} = this.props;
  
      let rocketNames = [];
      launches.forEach(element => {
        rocketNames.push(element["rocket"]["rocket_name"])
      });
     
      rocketNames = ([ ...new Set(rocketNames)]);
      // get all names from launches
  
      return rocketNames;
    }
  
     filteredLaunches(){
      const {rocketNameFilter} = this.state;
      const {launches} = this.props;
  
      if(!rocketNameFilter) return launches;
  
      return launches.filter( launch => launch.rocket.rocket_name === rocketNameFilter );
    }
    
    handleFilterChange(value) {
       this.setState({ rocketNameFilter: value });
    }
  
    render() {
      let filtered = this.filteredLaunches();
      return (
        <div> 
              <div>
                <SectionFilters
                options={this.availableRocketNames}
                onChange={this.handleFilterChange}
                 />  
                  <section className="section-launches">
                   {
                        filtered.map((element, index) =>{
                          if(index%2===0)
                    return (
                          
                          <div key = {index} className = "section-launches__row">
                            <Leftbox data={filtered[index]} onClick={this.props.onLaunchClick} />
                            <div className="section-launches__cell section-launches__cell-right"></div>             
                          </div>
                    )
                    return (
                          
                      <div key = {index} className = "section-launches__row">
                        <div className="section-launches__cell"></div>
                        <Rightbox data={filtered[index]}  onClick={this.props.onLaunchClick} />                
                      </div>
                    )
                    })
                    }  
                  </section >            
              </div> 
        </div>
      );
    }
  }

  export default LaunchesList ;