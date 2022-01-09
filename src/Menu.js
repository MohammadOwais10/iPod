import React from "react";
import ItemList from "./ItemList";

class Menu extends React.Component {
    render () {
        const {selectedOption}=this.props;
        return (
            <div className="display-menu">
                <div className="logo">
                <h1>OSM iPod</h1>
                </div>
               
                <ItemList
                    optionsInMenu={this.props.optionsInMenu}
                    selectedOption={selectedOption}
                />

            </div>
        )
    }
}
export default Menu;