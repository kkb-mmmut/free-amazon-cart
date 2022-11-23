import React from 'react';
import './App.css'; 
export default class rainyApp extends React.Component {
  constructor(){
    super();
    this.state={
      rain:'false'
    }
  }
  
  render(){
  return (
    <>
    <div className="App">
      <header className="App-header"> 
        <p>
          <h1>Is today is raining? {this.state.rain}</h1>
        </p> 
      </header>
    </div>
    </>
  );
};
}

//export default rainyApp;
