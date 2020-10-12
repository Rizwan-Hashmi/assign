import React from 'react';
import './App.css';
import Student from './student';

function App() {
  return  (
    <div className="App">

     <h1>Stastics of score card</h1>

     <br/><hr/>
     <h1>Science</h1>
      <Student totalA="40" totalB="12" totalC="4" totalF="1"/>

      <br/><hr/>
      <h1>Maths</h1>
      <Student totalA="30" totalB="10" totalC="0" totalF="6"/>

      <br/><hr/>
      <h1>Geography</h1>
      <Student totalA="35" totalB="1" totalC="3" totalF="2"/>


  </div>

  );
}
  export default App;