import React from "react";
import '../css/Games.css';
import gameImage from "../assets/images/gamesImage.PNG"

class Games extends React.Component {
    componentDidMount() {
        this.props.currentlyScreen();
    }
    componentWillUnmount() {
        this.props.currentlyScreen();
    }
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