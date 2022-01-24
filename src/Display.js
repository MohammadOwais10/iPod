import React from 'react'
import Menu from './Menu'
import Gallery from './Gallery'
import Games from './Games'
import Music from './Music'
import Setting from './Setting'
import Songs from './Songs';
import Artists from './Albums';
import Albums from './Artists';
import Wallpaper from './Wallpaper';
import Theme from './Theme';


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
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Games /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 4 ? <Music /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Gallery /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''} 

                {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <Songs
                currentMusicSelection={this.props.currentMusicSelection}
                songIndex={this.props.songIndex}
                playPauseButtonClicked={this.props.playPauseButtonClicked}
                currentlyOnPlayMusicScreen={this.props.currentlyOnPlayMusicScreen}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? <Artists /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? <Albums /> : ''}

                {this.props.showPage === 0 && this.props.optionsInMenu.length === 2 ? <Wallpaper 
                currentWallpaperSelection={this.props.currentWallpaperSelection}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 2 ? <Theme /> : ''}
            </div>
        );
    }
}

export default Display;