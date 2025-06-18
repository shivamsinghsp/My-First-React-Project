// Importing the React Library and to create a variable in 
// functional component we use a hook "{useState}"
import React, { useState } from 'react';
// import shivam from '';


// Created a functional Component "Greeting", where props is the parameter.
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
// Main App Component 
function App() {
  return (
    <div style={{backgroundColor: '#ADD8E6',margin: '10px', padding: '10px', }}>
   
     <center><h1>React Demo by Shivam</h1>
        <img src ='/shivam.jpg' alt="Shivam Singh" style={{width:'150px', borderRadius: '30%',}}/>

      <Greeting name="Everyone" />
      <p>This is my first React WebPage.</p></center> 
      <b><p>Let me Introduce Myself first in this react journey.</p></b>
      <ul>
       
        <li>I am Shivam Singh</li>
        <li>I am a student of CSJM University.</li>
        <li>I am Java Developer.</li>
        <li>I am doing Intern at <b>AndroCoders</b> as a position of <b>MERN Developer</b>.</li>
      </ul>
    </div>
  );
}
//updates data to all the modules for future use.
export default App;


//  use versal to make your projects live. 
