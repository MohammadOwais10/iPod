import React from "react";
import '../css/Gallery.css';
import galleryImage from "../assets/images/galleryImage.png"

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