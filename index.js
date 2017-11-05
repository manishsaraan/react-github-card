import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import axios from 'axios';

const Card  = (props) => {
  return(
    <div style={{margin:'1em'}}>
      <img width="75" src={props.avatar_url} />
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
		let input = this.state.userName;
		axios.get(`https://api.github.com/users/${input}`)
		 .then(resp => {
		 	   this.props.onSubmit(resp.data); 
               this.setState({userName : ''});
		 });	
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
           {props.cards.map(card => <Card {...card} key={card.id}/>)}
          </div>
		);
};
class App extends React.Component{
	addNewCard = (cardInfo) => {
         this.setState(prevState => ({
         	 cards : prevState.cards.concat(cardInfo)
         }))
	};
	state = {
        cards:[]
	}
	 render(){
	 	return(
	 		<div>
              <Form onSubmit = {this.addNewCard}/>
              <CardList cards = {this.state.cards}/>
            </div>
	 		);
	 }
}
ReactDOM.render(<App/>,document.getElementById('container'))