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
 
 handleChange = (event) => {
   this.setState({
      searchTerm: event.target.value
   })
 }

  searchFunction = () =>{
    let searchObjects = this.state.things.filter(thing => thing.includes(this.state.searchTerm));
    this.setState({
      searchObjects 
    });
  }

 render() {
    return (
     <div className="main">
       <div className="mainDiv">
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
      </div>
    );
  }
}