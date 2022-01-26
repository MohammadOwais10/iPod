import React from "react";
import '../css/Menu.css';
import ItemList from "./ItemList";

class Menu extends React.Component {
    render () {
        const {selectedOption}=this.props;
        return (
            <div className="display-menu">
                <div className="logo">
                <h1>iPod Menu</h1>
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