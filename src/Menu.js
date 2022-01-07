import React from "react";
// import ItemList from "./ItemList";

class Menu extends React.Component {
    render () {
        const {selectedOption}=this.props;
        return (
            <div className="display-menu">
                <div className="logo">
                <h1>OSM iPod</h1>
                </div>
               
                <div className={selectedOption === 0 ? 'selected' : ''}>
                    <p>Gallery</p>
                </div>
                <div className={selectedOption === 1 ? 'selected' : ''}>
                    <p>Games</p>
                </div>
                <div className={selectedOption === 2 ? 'selected' : ''}>
                    <p>Music</p>
                </div>
                <div className={selectedOption === 3 ? 'selected' : ''}>
                    <p>Setting</p>
                </div>
            </div>
        )
    }
}
export default Menu;