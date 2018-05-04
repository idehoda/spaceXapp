
import * as React from "react"

let differenceInSeconds = require('date-fns/difference_in_seconds')

function convertS(s) {
    var d, h, m;
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return `${d} days ${h} hrs ${m} mins ${s} secs to start`;
  };

class Counter extends React.Component {
    state = {
         seconds:   differenceInSeconds(
            new Date(this.props.from),
             new Date(Date.now())             
           )     
      }

    componentWillReceiveProps(nextProps){
        this.setState({
            seconds: nextProps.seconds
          });
    }
    
    componentDidMount() {
      this.timerId = setInterval(
        () => this.tick(),
        1000
      );  
    }
    tick() {        
        //   if(this.state.seconds > 0)   
      this.setState({ seconds: this.state.seconds - 1});
    } 
    
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
    
      resetTimer = () => {
      this.setState({seconds: this.props.from})
    }
    
   render() {
      return (
        <h4 className="info-main__header"> {convertS(this.state.seconds)}</h4>
            )
    }
  }  

export default Counter