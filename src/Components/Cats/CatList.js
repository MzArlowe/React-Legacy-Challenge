import React from 'react';

const CatList = (props) =>{
 return (
   <div className="main">
      <div className="mainDiv">
        <br />
        <h3>Cat Breeds</h3>
        <br />
        {props.cats.map(cat => <li>{cat}</li>)}
      </div>
    </div>
  );
}
 
export default CatList;
