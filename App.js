//import logo from './logo.svg';
import './App.css';
import React from 'react';
class HelloWorld extends React.Component {

  render() {
  
  const continents = ['Africa','America','Asia','Australia','Europe'];
  
  const helloContinents = Array.from(continents, c => `Hello ${c}!`);
  
  const message = helloContinents.join(' ');
  
  return (
  
  <div title="Outer div">
  
  <h1>{message}</h1>
  
  </div>
  
  );
  
  }
  
  }
  export default HelloWorld
  const element = <HelloWorld />;

  
   