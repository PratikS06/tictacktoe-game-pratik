import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Icon from "./components/Icon";

import {Card, CardBody, Container, Button, Col, Row} from 'react-scripts'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Icon name = "circle"/>
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
