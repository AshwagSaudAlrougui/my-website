import React, { Component } from 'react';
import Typical from 'react-typical'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
   

         <div className='App-header' id ='main'>
         <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="3.10s"><img src="mylogo.jpeg" height='333px' style={{marginLeft:'-1112px'}} alt=""/>
 </div>

         <Typical
        steps={['Hello', 400, ' This is Ashwag Alrougui', 900]}
        loop={Infinity}
        wrapper="p"
      />
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="3.10s">Software Engineer Full Stack </div>
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="4.30s"> Front End Developer</div>
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="5.500s"> Back End Developer </div>
     
          </div> 
 
        );
    }
}

export default Main;