import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="">
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button type="primary">ceshi</Button>
    </div>
  );
}

export default App;
