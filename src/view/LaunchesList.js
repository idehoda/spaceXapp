import React from 'react';
import Leftbox from '../components/Leftbox';
import Rightbox from '../components/Rightbox';
import SectionFilters from '../components/SectionFilters';
import rocket from '../assets/rocket.gif';
const options = ["Falcon 1", "Falcon 9", "Falcon 10", "Falcon Heavy"];



  class LaunchesList extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
      super();
      this.handleFilterChange = this.handleFilterChange.bind(this);      
    }
    state = { rocketNameFilter: '', launches: [], isLoading: false, error: false, isEmpty: false};
    
    fetchData(value){
      this.setState({ isLoading: true });
      this.setState({ rocketNameFilter: value },()=>{
       let filter = `?rocket_name=${this.state.rocketNameFilter}`; 
       if(this.state.rocketNameFilter === undefined) filter = ``;
       fetch(`https://api.spacexdata.com/v2/launches/all${filter}`)
       .then(response => response.json())
       .then(data =>{               
        this.setState({ launches: data , isLoading: false, isEmpty: false});
        if(data.length===0 ) this.setState({ isEmpty: true});  
       } )
       .catch(error =>( this.setState({ error: true})))

      }); 
    }

    handleFilterChange(value) {
      this.fetchData(value);           
    }
      componentDidMount(){
        this.fetchData(''); 
      }
  
    render() {     

       let filtered = this.state.launches;
       let { isLoading, isEmpty, error} = this.state;

    if(error){
        return(
          <div> 
                <div>
                  <SectionFilters
                  options={options}
                  onChange={this.handleFilterChange}
                   />  
                    <section className="section-launches">
                    <h1>whoops! It looks like something's gone wrong!</h1>
                    </section >         
                </div> 
          </div>
        )
    }
    if (isLoading) {
      return(
        <div> 
              <div>
                <SectionFilters
                options={options}
                onChange={this.handleFilterChange}
                 />  
                  <section className="section-launches">
                  <img src={rocket} width="100" height="100" alt="spinner"/>
                  </section >         
              </div> 
        </div>
      )}
      if (isEmpty) {
        return(
          <div> 
                <div>
                  <SectionFilters
                  options={options}
                  onChange={this.handleFilterChange}
                   />  
                    <section className="section-launches">
                    <h1>Sorry, no launches found</h1>
                    </section >         
                </div> 
          </div>
        )
      }
       
     return (
        <div> 
              <div>
                <SectionFilters
                options={options}
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

  export default LaunchesList;