import React from 'react';
import artitsImage from "../src/assets/images/artistsImage.jpg"

class Artists extends React.Component {
    render() {
        return (
            <div className="display-artists">
            <img  src={artitsImage} alt="Artists Image" />
                <h1>Artists</h1> 
            </div>
        )
    }
}

export default Artists; 