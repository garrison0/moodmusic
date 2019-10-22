import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import selfportrait from './itsme.jpg';

function BioText(props) {
  return <div className="rcorners">
      <p> 
        My name is Garrison <br/><br/>

        I wear a few different hats, some of which are "Software Developer" and "Audio Engineer." <br/><br/>
        
        I'm also chasing the music dream, sort've. <br/><br/>
        
        This site is meant to compartmentalize some of my interests, both for me and (potentially) for you. <br/><br/>

        Feel free to vaccuum.
      </p> 
    </div>;
}

class Bio extends React.Component {
  render() {
    return (
      <div className="bioBox">
        <Container> 
          <Row>
            <Col sm={8}>
              <BioText />
            </Col>
            <Col sm={3} className="ml-4 mt-3 pt-5">
              <Image src={selfportrait} roundedCircle fluid />
              <p className="socialLinks">Skills: Many</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(
  <Bio />,
  document.getElementById('root')
);
