import React from 'react';

class MusicPlayer extends React.Component {
    componentDidMount() {
        this.props.currentlyOnPlayMusicScreen();
        this.props.playPauseButtonClicked();
    }
    componentWillUnmount() {
        this.props.currentlyOnPlayMusicScreen();
    }
    render() {
        const { songIndex, Songs } = this.props;
        return (
            <div className="display-music">
                <h2>{Songs[songIndex].name}</h2> {/* fetch name from firebase */}
                <div className="song-image">
                    <img src={Songs[songIndex].song_images} alt="song item"></img>  {/* fetch image from firebase */}
                </div>
                <div className='player'>
                    <audio controls="seeking" className="audio" src={Songs[songIndex].url}></audio>  {/* fetch audio song from firebase */}
                </div>
            </div>
        );
    }
};

export default MusicPlayer;