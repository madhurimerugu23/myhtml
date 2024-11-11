import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: {
        name: 'RICE',
        votes: 0,
      },
      option2: {
        name: 'MAIZE',
        votes: 0,
      },
      option3:{
        name:'chilli',
        votes:0,
      },
    };
  }

  handleVote(option) {
    this.setState(prevState => {
      if (option === 'RICE') {
        return {
          option1: {
            name: prevState.option1.name,
            votes: prevState.option1.votes + 1,
          },
          option2: prevState.option2,
        };
      } else if(option=='MAIZE'){
        return {
          option1: prevState.option1,
          option2: {
            name: prevState.option2.name,
            votes: prevState.option2.votes + 1,
          },
        };
      }
      else{
        return{
          option1:prevState.option1,
          option2:prevState.option2,
          option3:{
            name:prevState.option3.name,
            votes:prevState.option3.votes+1,
          }
         
        }
      }
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'green' }} className="App">
        <h1>Simple Voting System for framers what they cultivate in their land</h1>
        <h3>M.Madhuri
        <br></br>
        23255A0505</h3>
        <div className='options'>
          <h2>{this.state.option1.name}</h2>
          <p>Votes: {this.state.option1.votes}</p>
          <button onClick={() => this.handleVote('RICE')}>Vote for RICE</button>
        </div>
        
        <div className='options'>
          <h2>{this.state.option2.name}</h2>
          <p>Votes: {this.state.option2.votes}</p> 
          <button onClick={() => this.handleVote('MAIZE')}>Vote for Maize</button>
        </div>
        <div className='options'>
          <h2>{this.state.option2.name}</h2>
          <p>Votes: {this.state.option3.votes}</p> 
          <button onClick={() => this.handleVote('CHILLI')}>Vote for chilli</button>
        </div>
        
      </div>
    );
  }
}

export default App;