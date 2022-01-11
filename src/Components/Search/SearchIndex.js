import React, { Component } from 'react';
import {Input} from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
   this.state = {
     searchObjects: [],
     searchTerm: '',
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }
 handleChange(event) {
   this.setState({
      searchTerm: event.target.value
   })
 }

  searchFunction() {
    let searchObjects = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
    this.setState({
      searchObjects 
    });
  }

 render() {
    return (
     <div>
       <br />
       <Input placeholder='Search Here' type="text" value={this.state.searchTerm} onChange={this.handleChange} />
       <br />
       <button onClick={this.searchFunction}>Search</button>
        <ul>
          {this.state.searchObjects.map((thing) => {
            return <li>{thing}</li>
          })}
        </ul>
      </div>
    );
  }
}

// Language: javascript
// Path: RedBadge\WD-classComponents-Challenges\src\Components\Search\SearchIndex.js
// Compare this snippet from RedBadge\WD-classComponents-Challenges\src\Components\Dogs\Dogs.js:

// export SearchIndex;

  // constructor (Input);
  //   super(props);
  //   this.state = {
  //     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
  //   };
  // }

  // function searchFunction() {
  //   const searchTerm = document.getElementById('search-input').value;
  //   const searchResults = this.state.things.filter(thing => thing.toLowerCase().includes(searchTerm.toLowerCase()));
  //   this.setState({
  //     searchResults: searchResults
  //   });
  // };
  //   return (
  //     <div className="main">
  //       <div className="mainDiv">
  //         <br />
  //         <h3>Search</h3>
  //         <br />
  //         <Input type="text" name="search" id="search" placeholder="Search" />
  //         <br />
  //         <button onClick={searchFunction}>Search</button>
  //         <br />
  //         <ul>
  //           {this.state.things.map(thing => {
  //             return <li>{thing}</li>
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //   );

    // export default SearchIndex;
