import React from 'react';
import logo from './logo.svg';

const inlineStyle={backgroundColor:'yellow'};

export default function () {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro" style={inlineStyle}>
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	);
}