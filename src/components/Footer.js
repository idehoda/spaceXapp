
import * as React from "react"

class Footer extends React.Component {
   render() {
      return (
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
      )}
  }
  

export default Footer