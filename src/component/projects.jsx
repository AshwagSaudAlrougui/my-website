import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'
import {Alert,ListGroup,CardDeck, Button,Accordion,CardGroup,Card,Container, Row,Col,Image} from 'react-bootstrap';
class Projects extends Component {
    constructor(props) {
        super(props);
		

        this.state = {  };
    }
  
    

    render() {
        return (
          <div className='projects-section' id ='projects'>
          <CardDeck style={{color:'black',height:'12px',marginTop:'-612px',fontSize:'17px'}}>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>   <a target="_blank" href="https://github.com/ASSROUGUI/NWSecurity/tree/master/NWSecurity">Project | 01 -Encryption and Decryption messages</a> </Card.Title>
      <Card.Text > 
      I used hash to Encryption messages and Decryption messages
   
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="tictactoe.jpeg" />
    <Card.Body>
      <Card.Title> <a target="_blank" href="https://github.com/ASSROUGUI/TicTacToe_project1">Project | 02 -Tic Tac Toe project</a>  </Card.Title>
      <Card.Text>
      I built a interactive website by using html_css_javascript for two users to play  Tic Tac Toe
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
  <Card.Img variant="top" src="movie.jpeg" />
    <Card.Body>
      <Card.Title> <a target="_blank" href="https://github.com/ASSROUGUI/Movies_Rating">Project | 03 -movies review </a> </Card.Title>
      <Card.Text>
      ​I built website by using ruby on rails for upload and watch movies and review and rating the movies        
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  
    <Card.Body>
      <Card.Title> <a target='_blank'href="https://github.com/ASSROUGUI/blackboard_web/tree/master">Project | 04 -blackboard web software project </a> </Card.Title>
      <Card.Text>
      blackboard website where teachers can upload the lessons file and student can download it and solve home work then send it back to teachers        
      </Card.Text>
    </Card.Body>
   
  </Card>  <Card>
    <Card.Img variant="top" src="story.jpeg" />
    <Card.Body>
      <Card.Title> <a target='_blank' href="https://github.com/AlkhaldiAzzam/aaa">Project | 06  Endless </a> </Card.Title>
      <Card.Text>
      The website is for a story has many scenes and each scene has two path that takes you to a new scene and so on. 
      </Card.Text>
    </Card.Body>
   
  </Card>  
</CardDeck>

          </div>  
        );
    }
}

export default Projects;