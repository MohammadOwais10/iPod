import React from 'react';
import albumImage from "../src/assets/images/musicImage.jpg"

class Albums extends React.Component {
    render() {
        return (
            <div className="display-album">
            <img  src={albumImage} alt="Album Image" />
                <h1>Albums</h1> 
            </div>
        )
    }
}

export default Albums; 