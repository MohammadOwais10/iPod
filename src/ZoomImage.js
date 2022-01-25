import React from 'react';

class ZoomImage extends React.Component {
    render() {
        const { photoIndex, Photos } = this.props;
        return (
            <div className="display-music">
                <div className="zoom-photo">
                    <img src={Photos[photoIndex].wp_image} alt="song item"></img>
                </div>
                <div className="instruction-zoom-photos">
                        Use "<i className="fas fa-backward"></i>" buttons to back.
                    </div>
            </div>
        );
    }
};

export default ZoomImage;