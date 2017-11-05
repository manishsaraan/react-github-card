import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';


const Card  = (props) => {
  return(
    <div style={{margin:'1em'}}>
      <img width="75" src={props.avatar} />
      <div style={{display:'inline-block',marginLeft:'10px'}}>
        <div style={{fontSize:'20px',fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

class Form extends React.Component {
	state = {userName : ''};
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Event: Form submit;',this.state.userName);
	}
	 render(){
	 	return(
               <form onSubmit={this.handleSubmit}>
               	 <input 
               	 value = {this.state.userName}
               	 onChange = {(event) => this.setState({
               	 	 userName : event.target.value
               	 })}
                 ref={(input) => {this.userNameInput = input}}
               	 type="text" placeholder="Github Username"/>
               	 <button type="submit">Add Card</button>
               </form>
	 		)
	 }
}
const CardList = (props) => {
	return (
          <div>          
           {props.cards.map(card => <Card {...card}/>)}
          </div>
		);
};
class App extends React.Component{
	state = {
        cards:[{
				 name : "manishsaraan",
				 company : "N/A" ,
				 avatar : "https://avatars2.githubusercontent.com/u/19797340?v=4"
			            },
			            {
				 name : "manishsaraan",
				 company : "N/A" ,
				 avatar : "https://avatars2.githubusercontent.com/u/19797340?v=4"
			            },{
				 name : "manishsaraan",
				 company : "N/A" ,
				 avatar : "https://avatars2.githubusercontent.com/u/19797340?v=4"
            }]
	}
	 render(){
	 	return(
	 		<div>
              <Form/>
              <CardList cards = {this.state.cards}/>
            </div>
	 		);
	 }
}
ReactDOM.render(<App/>,document.getElementById('container'))