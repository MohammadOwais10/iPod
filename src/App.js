import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Display from './Display';
import ZingTouch from 'zingtouch';
import 'lodash';

class App extends React.Component {
    constructor() {
        super();
        this.changeAngle = 0; 
        this.selectItem = 0;
        this.state = {
            options: ['Games', 'Music', 'Gallery', 'Setting'],
            musicItem: ['Songs', 'Artists', 'Albums'],
            generalMenu: ['Games', 'Music', 'Gallery', 'Setting'],
            changeAngle: 0,
            selected: 0,
            showPage: -1,
            songSelection: 0,
            songsIndex: -1,
            nowPlaying: false,
        }
    }

    componentDidMount() {
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) => {
            let dist = event.detail.distanceFromLast;
            this.changeAngle += dist;
            if (this.changeAngle > 60) {
                this.selectItem++;
                this.selectItem = this.selectItem % this.state.options.length;
                this.setState({
                    selected: this.selectItem
                });

                this.changeAngle = 0;
            }
            else if (this.changeAngle < -60) {
                this.selectItem--;
                if (this.selectItem === -1)
                    this.selectItem = this.state.options.length - 1;
                this.selectItem = this.selectItem % this.state.options.length;
                this.setState({
                    selected: this.selectItem
                });
                this.changeAngle = 0;
            }
        });
    }

    menuButtonClicked = () => {
        let displayMenuClassList = document.getElementsByClassName('display-menu')[0].classList;
        if (displayMenuClassList.contains('width-50')) {
            displayMenuClassList.remove('width-50');//hide menu
        }
        else {
            displayMenuClassList.add('width-50');//show menu
        }
    }

    selectButtonClicked = () => {
        if (this.state.selected === 1 && this.state.options.length === 4) {
            this.setState({
                options: this.state.musicItem,
                selected: 0,
                showPage: -1,//0
                songsIndex: -1,//we dont want to play any song
            }
            );
            this.selectItem = 0;
            return;
        }
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {
            if (this.state.options.length === 3) {    //for music section
                if (this.state.showPage === 0) {        //for songs page
                    if (this.state.songsIndex === -1) {  //not on music page
                        this.setState({
                            songsIndex: this.state.songSelection,   //for selection ofsong to play 
                        });
                        this.selectItem = 0;
                        return;
                    }
                }
            }
        }

        this.setState({
            showPage: this.state.selected,
            songsIndex: -1,         // song not play
            selected: 0,
        });
        this.selectItem = 0;
        this.menuButtonClicked();
    }


    leftButtonClicked = () => { 
        if (this.state.nowPlaying) {       //if i am on the play music screen
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {        //if the menu is not present on the display
                if (this.state.songsIndex === 0) {          //here i can switch to next song
                    this.setState({
                        songsIndex: 5
                    });
                    return;
                }
                if (this.state.songsIndex !== -1) {
                    this.setState({
                        songsIndex: this.state.songsIndex - 1
                    });
                    return;//----
                }
            }
        }

        if (this.state.options.length === 3 && document.getElementsByClassName('display-menu')[0].classList.contains('width-50'))//if the menu is open and it is on the songs page only then if the left button clicked, menu will be changed to general options
            this.setState({
                    options: this.state.generalMenu,
                    songsIndex: -1,
                    // selected: 0
                }
            );
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {     //side menu is not visible
            if (this.state.options.length === 3) {             // in music section
                if (this.state.showPage === 0) {              // in songs page
                    if (this.state.songSelection === 0)      
                        this.setState({
                            songSelection: 5,
                            songsIndex: -1
                        });
                    else
                        this.setState({
                            songSelection: this.state.songSelection - 1,
                            songsIndex: -1
                        });
                    }
                }
            }
        }

    rightButtonClicked = () => {
        if (this.state.nowPlaying) {            //if on the play music screen
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {       //if the menu is not present on the display
                if (this.state.songsIndex === 5) {   //here i can switch to next song
                    this.setState({
                        songsIndex: 0
                    });
                    return;
                }
                if (this.state.songsIndex !== -1) {
                    this.setState({
                        songsIndex: this.state.songsIndex + 1
                    });
                    return;
                }
            }
        }
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {    //side menu is not visible
            if (this.state.options.length === 3) {                          //in music section
                if (this.state.showPage === 0) {                            //in songs page
                    if (this.state.songSelection === 5)                     //If at playing the music at 5th index then I will reduce the index to 0 on next right button click.
                        this.setState({
                            songSelection: 0
                        });
                    else
                        this.setState({
                            songSelection: this.state.songSelection + 1
                        });
                }
            }
        }
    }

    currentlyOnPlayMusicScreen = () => {
        if (this.state.nowPlaying) {
            this.setState({
                nowPlaying: false
            });
        }
        else
            this.setState({
                nowPlaying: true
            });
    }

    playPauseButtonClicked = () => {
        if (document.getElementsByClassName('audio')[0] !== undefined) {
            if (document.getElementsByClassName('audio')[0].paused) {
                (document.getElementsByClassName('audio')[0].play());
                return;
            }
            (document.getElementsByClassName('audio')[0].pause());
        }
    }


    render() {
        return (
            <div className="App">
                <Display
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                    optionsInMenu={this.state.options}
                    currentMusicSelection={this.state.songSelection}
                    songIndex={this.state.songsIndex}
                    playPauseButtonClicked={this.playPauseButtonClicked}
                    currentlyOnPlayMusicScreen={this.currentlyOnPlayMusicScreen}
                    musicItem={this.state.musicItem}
                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                    playPauseButtonClicked={this.playPauseButtonClicked}
                    leftButtonClicked={this.leftButtonClicked}
                    rightButtonClicked={this.rightButtonClicked}
                />
            </div>
        );
    }
}
export default App;  