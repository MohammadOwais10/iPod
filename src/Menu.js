import React from "react";
import ItemList from "./ItemList";

class Menu extends React.Component {
    render () {
        return (
            <div className="display-menu">
                <div className="logo">
                <h1>OSM iPod</h1>
                </div>
                <ItemList/>
            </div>
        )
    }
}
export default Menu;