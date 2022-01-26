import React from 'react'
import '../css/Display.css';
/*****Main-Menu***********/
import Menu from './Menu'
import Gallery from './Gallery'
import Games from './Games'
import Music from './Music'
import Setting from './Setting'
/*********Music*************/
import AllSongs from './AllSongs';
import Artists from './Albums';
import Albums from './Artists';
/********Gallery*************/
import Photos  from './Photos';
import Collection from './Collection'

class Display extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props.optionsInMenu);
        return (
            <div className="display-container">
                <Menu 
                   selectedOption={this.props.selectedOption}
                   optionsInMenu={this.props.optionsInMenu}
                />
                {/****************  Main Menu List Selection *****************************/}
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Games 
                currentlyScreen={this.props.currentlyScreen}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 4 ? <Gallery /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Music /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''} 

                {/****************  Music Menu List Selection *****************************/} 
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <AllSongs
                currentMusicSelection={this.props.currentMusicSelection}
                songIndex={this.props.songIndex}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
                currentlyScreen={this.props.currentlyScreen}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? <Artists /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? <Albums /> : ''}

                {/****************  Gallery Menu List Selection ****************************/}
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 2 ? <Photos 
                currentPhotoSelection={this.props.currentPhotoSelection}
                photoIndex={this.props.photoIndex}
                currentlyScreen={this.props.currentlyScreen}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 2 ? <Collection /> : ''}
            </div>
        );
    }
}

export default Display;