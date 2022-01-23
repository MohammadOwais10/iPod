import React from "react";
import settingImage from "../src/assets/images/settingImage.png"


class Theme extends React.Component {
    render () {
        return (
            <div className="display-setting">
                <img  src={settingImage} alt="Setting Image" />
                <h1>Wallpaper</h1>
            </div>
        )
    }
}
export default Theme;