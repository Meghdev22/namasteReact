import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX - HTML like or XML like syntax
const root = ReactDOM.createRoot(document.getElementById("root"));

// Component Composition
const Title = () =>{
    return (<h1 id="heading">Namaste React using JSX</h1>);
}; 

const number = 1000;

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>Hello React Functional Component {number}</h1>
        {Title()}
    </div>
);

root.render(<HeadingComponent />);