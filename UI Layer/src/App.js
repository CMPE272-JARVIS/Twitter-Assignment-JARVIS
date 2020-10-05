import React from 'react';

import NavigationBar from './Components/NavigationBar';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'
import WelcomeTwitter from "./Components/WelcomeTwitter";
import Footer  from "./Components/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import RetrieveTweet from './Components/RetrieveTweet';
import CreateTweet from './Components/CreateTweet';
import DeleteTweet from './Components/DeleteTweet';
/**
*
*
* @author Mamatha Guntu
* 
*/
function App() {
  const marginTop = {
    marginTop: '40px'
  }

  return (
   <Router>
    <NavigationBar/>
    <Container>
      <Row>
        <Col lg = {12} style = {marginTop}>
        <Switch>
          <Route path="/" exact component={WelcomeTwitter} />
          <Route path="/create" exact component={CreateTweet} />
          <Route path="/retrieve" exact component={RetrieveTweet} />
          <Route path="/delete" exact component={DeleteTweet} />
        </Switch>
          
        </Col>
      </Row>
    </Container>
    <Footer />
    </Router>
    
  );
}

export default App;
