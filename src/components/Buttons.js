import React from 'react';
import '../css/Buttons.css';

const Buttons = (props) => {
    return (
        <div className="buttons-container">
            <button className="buttons-center"
                onClick={props.selectButtonClicked}>
                <h2>Select</h2>
            </button>
            <button className="button-menu"
                onClick={props.menuButtonClicked}>
                <i className="fas fa-bars"></i>
            </button>
            <button className="button-left"
            onClick={props.leftButtonClicked}>
                <i className="fas fa-backward"></i>
            </button>
            <button className="button-right" 
            onClick={props.rightButtonClicked}>
                <i className="fas fa-forward"></i>
            </button>
            <button className="button-play-pause" 
            onClick={props.playPauseButtonClicked}>
                <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
            </button>
        </div>
    );
}

export default Buttons; 