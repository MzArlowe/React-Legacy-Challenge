import React from 'react';
import {Container} from 'reactstrap';
import TaskIndex from './TaskIndex';

const ToDo = () => {
  return(
    <Container className="App">
     <br />
       <h1 className="App-intro"></h1>
       <hr />
       <ul>
         <li><h3>Input your task!</h3>
         </li>
         <TaskIndex />
       </ul>
       <hr />
     </Container>
  );
};

export default ToDo