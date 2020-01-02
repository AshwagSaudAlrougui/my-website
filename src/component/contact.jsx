import React, { Component } from 'react';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const { FaIcon, FaStack } = require('react-fa-icon');
import ReactPlayer from 'react-player'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
       <div className='contact-section' id ='contact'> 
 {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}

       {/* <img src="mylogo.jpeg"  style={{  maxWidth:'100%',height:'auto',marginLeft:'12px',marginTop:'12px'}} alt=""/> */}
<a target='_blank' href="https://github.com/ASSROUGUI?"style={{marginLeft:'-682px',marginTop:'-312px'}}><i class='fa fa-github'style={{ color:'black' }}></i></a>{' '}
<a  target='_blank' href="mailto:ashwagalrougui@gmail.com"><i class='fa fa-envelope'style={{marginLeft:'-682px',color:'#FF9791'}}></i></a>{' '}
<a  target='_blank'href=""><i class="fa fa-globe" style={{marginLeft:'-682px',color:'black'}}aria-hidden="true"></i></a>{' '}
<i  id='x' class="fa fa-phone" style={{marginLeft:'-512px',color:'green'}}>+966553465261</i> {' '}
{/* <i class="fa fa-home" aria-hidden="true"style={{marginLeft:'-512px',color:'black'}}></i>{'c'} */}
<i class="fa fa-map-marker" aria-hidden="true"style={{marginLeft:'-552px',color:'grey'}}>{'  '}KSA,Riyadh</i>{' '}
<a  target='_blank' href="https://www.linkedin.com/in/ashwagalrouguisoftwareengineer/" style={{marginLeft:'-682px',color:'#4E97FE'}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>

     </div> 
        );
    }
}

export default Contact;