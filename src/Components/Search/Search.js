import React from 'react';
import SearchIndex from './SearchIndex';
import { Container } from 'reactstrap';
 
const Search = () => {
   return (
     <Container className="App">
     <br />
       <h1 className="App-intro">
     Searching for a Term: 
       </h1>
       <hr />
       <ul>
         <li>
           Search Here
           {<SearchIndex />}
         </li>
       </ul>
       <hr />
     </Container>
   );

}
 
export default Search;
