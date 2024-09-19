import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Alert,ListGroup,CardDeck, Button,Accordion,CardGroup,Card,Container, Row,Col,Image} from 'react-bootstrap';

class Resume extends Component {
    constructor(props) {
        super(props);}
        state = {
        };
       
    
    render() {
        return (
          
                 <div className='resume-section' id ='resume'>


  <Carousel>
  <Carousel.Item>
  

    <Card.Text >
    <h3 style={{fontSize:'12px',textShadow: '#ffffff 0px 0px 6px', }}> My passion for programming was sparked when I started learning about Computer Sciences، My Journey started with developing my skills in testing and developing programs and system which led me to building programs and running software project </h3>    

    </Card.Text>
<Alert variant="secondary" style={{marginTop:'122px',marginLeft:'28px'
 ,height:'0px',textAlign:'left',algin:'left' ,color:'black',backgroundColor:'black',border:'black'}}>
 
</Alert>
<a target='_blank'href="https://docs.google.com/document/d/1CL5N_haMwMDzeIlGb5tdcVFdqdXoc_tbsCUZlHRZfFA/edit">
  <Button variant="dark"style={{marginLeft:'-22px',marginTop:'-22px',fontSize:'15px',textShadow: '#ffffff 0px 0px 6px',width:'92px'}}>Downlad Resume</Button>
  </a>    <Carousel.Caption>
    </Carousel.Caption> 
  </Carousel.Item>

  <Carousel.Item>

    <Card.Text style={{color:'white',fontSize:'12px'}}>
         
         <p>
         - GA_software Engineering{' '}
         </p>
         <p>
         -CODED THREE WEBSITES USING HTML ,RUBY.{' '}
         </p>
         
         <p>
         -DESIGNED APPS AND WEBSITES {' '}
         </p>
         
         <p>
         -DEBUGGED AND MODIFIED SOFTWARE COMPONENTS.{' '}
         </p>
         
         <p>
         -WORKED CLOSELY WITH CLIENTS TO ESTABLISH PROBLEM SPECIFICATIONS AND SYSTEM DESIGNS.{' '}
         
         </p>
         <p>
         -WORKSHOP FOR BUILDING COULD FROM IBM {' '}
         </p>
         
         <p>
         -MEMBER AT (منصه العطاء الرقمي) {' '}
         </p>
         <p>
         
         -I TRAINED IN TECHNICAL SUPPORT AT IMAM UNIVERSITY{' '}
         </p>
         <p>
         - WORKSHOP FOR ARADOINO{' '}
         </p>
         
         
         <p>
         - WORKSHOP FOR CYBER MOBILE APPS {' '}
         </p>
         
         <p>
         -COURSE FOR AGILE {' '}
         </p>
         
         <p>
         -WORKSHOP SOCIAL MEDIA CYBER DEFENSE.{' '}
         </p>
               </Card.Text>   
    <Carousel.Caption>
    
                </Carousel.Caption>
  </Carousel.Item>

       <Carousel.Item>

    <Card.Text style={{color:'white',fontSize:'12px'}}>
         
         <p>
          1-Software Quality Assurance Testing bootcamp at (SDA) Saudi digital academy (internship) ,27 Sep -2021 to 17-Dec -2021 :many tools used to test software :manual and Automation test .{' '}
         </p>

          <p>
         -software engineering bootcamp at (GA) general assembly Software engineer For 4months full-time(16-june -12 sep 2019) : full_stack :backend & frontend developer and API ..{' '}
         </p>
            <p>
         3-software tester virtual internship program with Nlsql.com and SDA For  4months full-time (Sep 2021 - Dec 2021 ).{' '}
         </p>
               </Card.Text>   
    <Carousel.Caption>
  <Carousel.Item>
  <Card.Text style={{color:'white',fontSize:'16px'}}>

   <p style={{fontSize:'20px'}}> CORE SKILLS :</p>
  <p>
 - Java script
      </p>  
<p>
-Python
</p>

<p>
-Ruby on Rails
</p>


<p>-HTML , css</p>



<p>-C++,Java</p>


<p>-Database</p>



<p>-React.js</p>


<p>-MongoDB,sql</p>
<p>-jquery</p>
</Card.Text>



    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 
          </div>  
        );
    }
}

export default Resume;
