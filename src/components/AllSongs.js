import React from 'react';
import '../css/AllSongs.css';
import firebase from "firebase/app";
import MusicPlayer from './MusicPlayer';

class AllSongs extends React.Component {
    constructor() {
        super();
        this.state = {
            all_songs_list: [],
            loading: true
        }
    }
    componentDidMount() {
        /*****FetCH-Data-From-Firebase***********/
        firebase
            .firestore()
            .collection("all_songs_list")
            .get()
            .then(snapshot => {
                const new_data_array = snapshot.docs.map(doc => {
                    const data = doc.data();
                    data["id"] = doc.id;
                    return data;
                });
                this.setState({ all_songs_list: new_data_array, loading: false });
            });
    }
    /*******render the song lists***********/
    render() {
        if (this.props.songIndex !== -1) {
            return <MusicPlayer
                songIndex={this.props.songIndex}
                Songs={this.state.all_songs_list}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
                currentlyScreen={this.props.currentlyScreen}
            />;
        }
        return (this.state.loading ? <h1>Loading...</h1> :
            <div className="all-songs">
                <h1 className="all-songs-heading">
                    All Songs
                </h1>
                <div className="all-songs-list">
                    {this.state.all_songs_list.map((item, index) => {
                        return (
                            <div className={this.props.currentMusicSelection === index ? 'selected-song' : ''} key={index}>
                                {item.name}    {/* fetch name from firebase */}
                            </div>
                        )
                    })}
                    <div className="instruction-all-songs">
                        Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" Buttons to Navigate.
                       <br/> Click on "select" Buton to Play
                    </div>
                </div>
            </div>
        );
    }
}

export default AllSongs; 