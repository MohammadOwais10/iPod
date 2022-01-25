import React from "react";
import themeImage from "../src/assets/images/theme.png"

class Theme extends React.Component {
    render () {
        return (
            <div className="display-setting">
                <img  src={themeImage} alt="Setting Image" />
                <h1>Theme</h1>
            </div>
        )
    }
}

export default Theme;