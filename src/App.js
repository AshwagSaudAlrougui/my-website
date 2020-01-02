import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from "./component/navbar.jsx";
import Section from './component/Section'
import dummyText from "./DummyText";
import Rusme from './component/Resume'
import WOW from 'wowjs'
import Typical from 'react-typical'
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
import Projects from './component/projects';
import Contact from './component/contact';
import Main from './component/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: 'test'
    }
  
  }
 
  componentDidMount(){
new WOW.WOW().init();
  }
  render() {
    return (

    <div className="App">
        <Navbar />
        <Main
          title="Main"
          subtitle={dummyText}
          dark={false}
          id="main"
        />
     
        <Rusme
       
          subtitle={dummyText}
          dark={true}
          id="rusme"
        />
        
        <Projects
          title="projects"
          subtitle={dummyText}
          dark={true}
          id="projects"
        />
        <Contact
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="contact"
        />
       
       
      </div>
   
    
    );
  }
}

export default App;



