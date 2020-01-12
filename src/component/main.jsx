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
         <div className="wow bounceIn"  style={{marginTop:'32px',marginRight:'262px'}} data-wow-offset="50" data-wow-delay="6.10s"><img src="mylogo.jpeg" height='133px'  alt=""/>
         
 </div>

         <Typical 
        steps={['Hello', 400, ' This is Ashwag Alrougui', 900]}
        loop={Infinity}
        wrapper="p"
      />
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="3.10s">Software Engineer Full Stack </div>
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="4.30s"> Front End Developer</div>
       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="5.500s"> Back End Developer </div>

       <div className="wow bounceIn" data-wow-offset="50" data-wow-delay="6.10s" style={{marginTop:'-82px',marginRight:'302px'}}>
<a target='_blank' href="https://github.com/ASSROUGUI?"><i class='fa fa-github'style={{ color:'black' }}></i></a><p></p>
<a  target='_blank' href="mailto:ashwagalrougui@gmail.com"><i class='fa fa-envelope'style={{color:'#FF9791'}}></i></a><p></p>
<a  target='_blank'href="https://assrougui.github.io/my-website/"><i class="fa fa-globe" style={{color:'#E5E9E8'}}aria-hidden="true"></i></a><p></p>
<a  target='_blank' href="https://www.linkedin.com/in/ashwagalrouguisoftwareengineer/" style={{color:'#4E97FE'}}><i class="fa fa-linkedin" aria-hidden="true"></i></a><p></p>

<i  id='x' class="fa fa-phone" style={{color:'green',fontSize:'14px',marginLeft:'59px'}}>+966553465261</i> <p></p>
{/* <i class="fa fa-home" aria-hidden="true"style={{marginLeft:'-512px',color:'black'}}></i>{'c'} */}
<i class="fa fa-map-marker" aria-hidden="true"style={{textAlign:'left',color:'grey',fontSize:'14px',marginLeft:'59px'}}>{'  '}KSA,Riyadh</i>{' '}

</div>
          </div> 
 
        );
    }
}

export default Main;