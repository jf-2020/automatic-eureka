import React, { useEffect, useState } from 'react';

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
} */

function App() {
	const [health, setHealth] = useState('');

	useEffect(() => {
		fetch('http://localhost:5000/api/health')
			.then(res => res.json())
			.then(data => setHealth(data.status));
	}, []);

	return (
		<div>
			<h1>PERN Stack Spa</h1>
			<p>Backend Status: {health}</p>
		</div>
	);
}

export default App;
