import React from 'react';
import {Container} from 'reactstrap';
import DogIndex from './DogIndex';
 
const Dogs = () => {

  return (
    <Container className="App">
      <br />
      <h1 className="App-intro">
        Dog of the Day:
      </h1>
      <hr/>
      <ul>
        <li>Link to API: <a href="https://dog.ceo/dog-api/">here</a></li>
        <DogIndex />
      </ul>
      <hr />
    </Container>
  );

}
 
export default Dogs;
