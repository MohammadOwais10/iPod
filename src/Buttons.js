import React from 'react'

const Buttons=(props)=>
{
    return (
        <div className="buttons-container">
            <button className="buttons-center">
                <h2>Select</h2>
            </button>
            <button className="button-menu">
                <i class="fas fa-bars"></i>
            </button>
            <button className="button-left">
                <i class="fas fa-backward"></i>
            </button>
            <button className="button-right">
                <i class="fas fa-forward"></i>
            </button>
            <button className="button-play-pause">
                <i class="fas fa-play"></i> /<i class="fas fa-pause"></i>
            </button>
        </div>

    );
}

export default Buttons; 