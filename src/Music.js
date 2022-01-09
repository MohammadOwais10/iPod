import React from "react";
import firebase from "firebase/app";

class Music extends React.Component {
    constructor() {
        super();
        this.state = {
            audioURL: ''
        }
    }
    
    UNSAFE_componentWillUnmount() {
        firebase.firestore().collection(" all_songs_list").get()
            .then((ans) => {
                this.setState({
                    audioURL: ans
                })
            })
    }

    render() {
        return (
            <div className="display-music">
                <h1>Music</h1>
                <div className="music-icon">
                    <i class="fas fa-music"></i>
                </div>
            </div>
        )
    }
}
export default Music;