import React from "react";
import './App.scss';
import Form from './Components/Form';
import Card from "./Components/Card";

function App() {
  return (
    <div className="container">
      <h1 className="mb-3 pt-5 fw-bolder fs-1">Checkout</h1>
      <div className="d-flex flex-column-reverse flex-md-row justify-content-md-between">
        <div className="col-md-6 col-lg-5">
          <Form />
        </div>
        <div className="cardx">
          <Card />          
        </div>
      </div>      
      <footer>
          <p className='text-center mt-5'>created by <a href="https://bit.ly/jaypee-github">Jaypee</a> - devChallenges.io</p>
        </footer>
    </div>
  );
}

export default App;
