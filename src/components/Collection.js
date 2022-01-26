import React from "react";
import '../css/Collection.css';
import collectionImage from "../assets/images/galleryImage.png"

class Collection extends React.Component {
    render () {
        return (
            <div className="display-collection">
                 <img  src={collectionImage} alt="Collection Image" />
                <h1>Collection</h1>
            </div>
        )
    }
}

export default Collection;