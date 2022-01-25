import React from "react";
import settingImage from "../src/assets/images/settingImage.png"

class Collection extends React.Component {
    render () {
        return (
            <div className="display-setting">
                 <img  src={settingImage} alt="Setting Image" />
                <h1>Collection</h1>
            </div>
        )
    }
}

export default Collection;