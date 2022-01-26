import React from 'react';
import '../css/ZoomImage.css';

class ZoomImage extends React.Component {
    componentDidMount() {
        this.props.currentlyScreen();
    }
    componentWillUnmount() {
        this.props.currentlyScreen();
    }
    render() {
        const { photoIndex, Photos } = this.props;
        return (
            <div className="display-zoom-photo">
                <div className="zoom-photo">
                    <img src={Photos[photoIndex].photo_img} alt="song item"></img>
                </div>
                <div className="instruction-zoom-photos">
                        Use "<i className="fas fa-backward"></i>" Button to go Back.
                    </div>
            </div>
        );
    }
};

export default ZoomImage;