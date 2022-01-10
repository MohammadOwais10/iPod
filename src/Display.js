import React from 'react'
import Menu from './Menu'
import Gallery from './Gallery'
import Games from './Games'
import Music from './Music'
import Setting from './Setting'
/***For songs section ********/
import Songs from './Songs';
import Artists from './Albums';
import Albums from './Artists';

class Display extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="display-container">
                <Menu 
                   selectedOption={this.props.selectedOption}
                   optionsInMenu={this.props.optionsInMenu}
                />
                {this.props.showPage === 0 && this.props.optionsInMenu.length === 4 ? <Gallery /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 4 ? <Games /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 4 ? <Music /> : ''}
                {this.props.showPage === 3 && this.props.optionsInMenu.length === 4 ? <Setting /> : ''} 

                {this.props.showPage === 0 && this.props.optionsInMenu.length === 3 ? <Songs
                playPauseButtonClicked={this.props.playPauseButtonClicked}
                /> : ''}
                {this.props.showPage === 1 && this.props.optionsInMenu.length === 3 ? <Albums /> : ''}
                {this.props.showPage === 2 && this.props.optionsInMenu.length === 3 ? <Artists /> : ''}
            </div>
        );
    }
}

export default Display;