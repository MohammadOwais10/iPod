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
            options: ['Gallery','Games', 'Music', 'Setting'],
            musicItem:['Songs', 'Albums','Artists'],
            changeAngle: 0,
            selected: 0,
            showPage: -1,
            songSelection: 0, 
            songIndex: -1,
            nowPlaying:false, 
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
            if(this.state.selected===1 && this.state.options.length === 4) {
                  this.setState({
                        options: this.state.musicItem,
                        selected:0,
                        showPage: -1,//0
                        songIndex: -1,//we dont want to play any song
                    }
                  );
                  this.selectItem = 0;
                  return;
                }
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {
              if (this.state.options.length === 3) {    //for music section
                if (this.state.showPage === 0) {        //for songs page
                    if (this.state.songIndex === -1) {  //not on music page
                        this.setState ({
                            songIndex: this.state.songSelection,   //for selection ofsong to play 
                        });
                        this.selectItem = 0;
                        return;
                    }
                }
            }
        }
        
        this.setState({
            showPage: this.state.selected,
            songIndex: -1,         // song not play
            selected: 0,
        });
        this.selectItem = 0;
        this.menuButtonClicked();
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
                    songIndex={this.state.songIndex}
                    playPauseButtonClicked={this.playPauseButtonClicked}
                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                    playPauseButtonClicked={this.playPauseButtonClicked}
                />
            </div>
        );
    }
}
export default App;  