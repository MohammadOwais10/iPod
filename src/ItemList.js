import React from "react";
import Gallery from "./Gallery";
import Games from "./Games";
import Music from "./Music";
import Setting from "./Setting";

class ItemList extends React.Component {
    render () {
        return ( 
            <div className="list">
            <Gallery/>
            <Games/>
            <Music/>
            <Setting/>
        </div>
        )
    }
}
export default ItemList;