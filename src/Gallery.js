import React from "react";
import galleryImage from "../src/assets/images/galleryImage.png"

class Gallery extends React.Component {
    render () {
        return (
            <div className="display-gallery">
                <img  src={galleryImage} alt="Gallery Image" />
                <h1>Gallery</h1>
            </div>
        )
    }
}
export default Gallery;