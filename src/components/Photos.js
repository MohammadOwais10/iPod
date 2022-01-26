import React from "react";
import '../css/Photos.css';
import firebase from "firebase/app";
import ZoomImage from "./ZoomImage";

class Photos extends React.Component {
    constructor() {
        super();
        this.state = {
            all_photos_list: [],
            loading: true
        }
    }
    componentDidMount() {
        firebase
            .firestore()
            .collection("all_photos_list")
            .get()
            .then(snapshot => {
                const new_data_array = snapshot.docs.map(doc => {
                    const data = doc.data();
                    data["id"] = doc.id;
                    return data;
                });
                this.setState({ all_photos_list: new_data_array, loading: false });
            });
    }

    render() {
        if (this.props.photoIndex !== -1) {
            return <ZoomImage
                photoIndex={this.props.photoIndex}
                Photos={this.state.all_photos_list}
                currentlyScreen={this.props.currentlyScreen}
            />;
        }
        return (this.state.loading ? <h1>Loading...</h1> :
            <div className="all-photos">
                <h1 className="all-photos-heading">
                    All Photos
                </h1>
                <div className="all-photos-list">
                    {this.state.all_photos_list.map((item, index) => {
                        return (
                            <div className={this.props.currentPhotoSelection === index ? 'selected-photos' : ''} key={index}>
                                <img  src={item.photo_img}></img>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="instruction-all-photos">
                        Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" buttons to navigate.
                        Zoom In Photo ok on "Select" Button
                    </div>
            </div>
        );
    }


}

export default Photos;