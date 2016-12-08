import React from 'react'
import ReactDOM from 'react-dom';
// creating component

const App = function () {
	return <div> <p> Hello World </p></div>;
}
TEST
// inserting it on the DOM 
ReactDOM .render(<App/>, document.querySelector('#container'));