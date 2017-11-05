import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';


const Card  = (props) => {
  return(
    <div style={{margin:'1em'}}>
      <img src="http://placehold.it/67" />
      <div style={{display:'inline-block',marginLeft:'10px'}}>
        <div style={{fontSize:'20px',fontWeight:'bold'}}>name here</div>
        <div>company name here</div>
      </div>
    </div>
  );
};

ReactDOM.render(<Card/>,document.getElementById('container'))