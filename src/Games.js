import React from "react";
import gameImage from "../src/assets/images/gamesImage.PNG"

class Games extends React.Component {
    render () {
        return (
            <div className="display-games">
            <img  src={gameImage} alt="Game Image" />
                <h1>Games</h1> 
            </div>
        )
    }
}

export default Games;