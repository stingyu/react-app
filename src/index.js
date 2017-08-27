import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root2')
);
ReactDOM.render(
    <p>This is my first react app</p>,
    document.getElementsByClassName('description')[0]
)
registerServiceWorker();
