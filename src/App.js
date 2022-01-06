import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Display from './Display';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Display />
                <Buttons />
            </div>
        );
    }
}
export default App;  