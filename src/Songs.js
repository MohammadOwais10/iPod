import React from 'react';
import firebase from "firebase/app";
import PlayMusic from './PlayMusic';

class AllSongs extends React.Component {
    constructor() {
        super();
        this.state = {
            all_songs_list: [],
            loading: true
        }
    }
    componentDidMount() {
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

    render() {
        if (this.props.songIndex !== -1) {
            return <PlayMusic
                songIndex={this.props.songIndex}
                Songs={this.state.all_songs_list}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
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
                                {item.name}
                            </div>
                        )
                    })}
                    <div className="instruction-all-songs">
                        Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" buttons to navigate.
                    </div>
                </div>

            </div>
        );
    }
}

export default AllSongs; 