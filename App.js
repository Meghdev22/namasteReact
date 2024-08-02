// import react from node modules

import React from 'react';
import ReactDOM from 'react-dom';

// create html element using reactjs

const parent = React.createElement(
    "div", 
    {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
            React.createElement("h1", {}, "I am h1 tag Hi, Hello, How are you?"),
            React.createElement("h2", {}, "I am h2 tag")
        ]),
    React.createElement("div", {id:"child2"}, [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag, Hello, I'm fine! What about you?")
        ]),
    ]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);