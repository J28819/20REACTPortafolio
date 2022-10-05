
import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../img/iot.png';
import logo2 from '../img/iot2.png';
import passgen from '../img/Passgen.png';
import quizmultopt from '../img/quizmultopt.png';
import weather from '../img/weather.png';
import work from '../img/WorkDayScheduler.png';
import socialnetmongo from '../img/SocialNetMongo.png';
import reactportfolio from '../img/20ReactPortfolio.png';
import CardGroup from 'react-bootstrap/CardGroup';

function Portafolio() {
  return (
    <Col   xs={12} md={10}>
    <br></br>
    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={passgen} />
        <Card.Body>
          <Card.Title style={{ color: 'blueviolet'}}>Password Generator</Card.Title>
          <Card.Text>
          This Password Generator has a catalog of what type of diferent data they could add in the way the system can be expanded in the future for more charachters or lenguages.
The user have to press the button "Generate Password" then select the number of characters desired between 8 and 128, after tnat they will receive different confirms to add different types of data such as Numbers, LowerCase Letters, Upper Case Leters or Symbols that are in the actual catalog stored in the variable ##confirmsMsg.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="https://github.com/J28819/03PassGenIML">
          <small className="text-muted">click here for more info...</small>
          </a>
        </Card.Footer>
      </Card>

      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={quizmultopt} />
        <Card.Body>
          <Card.Title style={{ color: 'blueviolet'}}>04QuizMulOpt</Card.Title>
          <Card.Text>
          This Quiz has multiple options, and use a JSON Object to customize the questions its also use local storage to record and shows the last Highest Scores. The questions are shuffled in the way every time the page is loaded it will be randomize the questions.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="https://github.com/J28819/04QuizMulOpt">
          <small className="text-muted">click here for more info...</small>
          </a>  
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>

    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={weather} />
        <Card.Body>
          <Card.Title>06WheaterApp</Card.Title>
          <Card.Text>
          This Application display the weather by City and Forecast next 4 days
It has a search bar with Autocomplete provided by TeleportAPI
it display the Weather using OpenWeatehr API
it has a localStorage to record the last 5 places visited and it loads in automatic the last one everytime the page is loaded
display the Icon about the weather in the top main card
Display Forecast with pictures that indicates whether the conditions are favorable, moderate, or severe
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://j28819.github.io/06WheaterApp/">
          <small className="text-muted">click here for more info...</small>
          </a> 
        </Card.Footer>
      </Card>

      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={work} />
        <Card.Body>
          <Card.Title>05-GTBScheduler</Card.Title>
          <Card.Text>
          Work Scheduler as To-Do List, write your activities and plan your day.
Press the Plus Button to add one more row.
Time overdue change the color for Past, Present and Future
Information is autogeneretaed by JSOn Objects.
Page is responsive to be adjusted in automatic for movile devices
Future Implementation add more days and storage them in Local.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://j28819.github.io/05-GTBScheduler/">
          <small className="text-muted">click here for more info...</small>
          </a> 
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={socialnetmongo} />
        <Card.Body>
          <Card.Title>18SocialNetAPI</Card.Title>
          <Card.Text>
          Social Network API for MongoDB and test it with Insomnia. 
add users and thoughts using REST communication and MongoDB Models 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://github.com/J28819/18SocialNetAPI">
          <small className="text-muted">click here for more info...</small>
          </a> 
        </Card.Footer>
      </Card>

      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={reactportfolio} />
        <Card.Body>
          <Card.Title>20REACTPortfolio</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="https://github.com/J28819/20REACTPortfolio">
          <small className="text-muted">click here for more info...</small>
          </a> 
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    </Col>
    
  );
}

export default Portafolio;