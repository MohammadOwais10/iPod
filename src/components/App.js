import React from 'react';
import '../css/App.css';
import Buttons from './Buttons';
import Display from './Display';
import ZingTouch from 'zingtouch';

class App extends React.Component {
    constructor() {
        super();
        this.changeAngle = 0; 
        this.selectItem = 0;
        this.state = {
            options: ['Games', 'Gallery', 'Music', 'Setting'],
            musicItem: ['AllSongs','Albums', 'Artists'],
            generalMenu: ['Games','Gallery','Music', 'Setting'],
            galleryItem:['Photos','Collection'],
            changeAngle: 0,
            selected: 0,
            showPage: -1,
            songSelection: 0,
            songsIndex: -1,
            nowPlaying: false,
            photoSelection:0,
            photoIndex:-1,
        }
    }
 
    /**********Button-Rotate-Functions(ZingTouch)******************************************/
    componentDidMount(){
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) => {
            let dist = event.detail.distanceFromLast;
            this.changeAngle += dist;
            if (this.changeAngle > 60) {        //it move clock-wise
                this.selectItem++;
                this.selectItem = this.selectItem % this.state.options.length;
                this.setState({
                    selected: this.selectItem
                });
                this.changeAngle = 0;
            }
            else if (this.changeAngle < -60) {    //it move anti-clock-wise
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

    /**********Menu-Button-Click-Functions*******************************************/ 
    menuButtonClicked = () => {
        let displayMenuClassList = document.getElementsByClassName('display-menu')[0].classList;
        if (displayMenuClassList.contains('width-50')) { 
            displayMenuClassList.remove('width-50');   /****It hide the side menu****/
        }
        else {
            displayMenuClassList.add('width-50');  /****It show anotherwise side menu****/
        }
        
        /*If we at inside at any section, when we click it return back at menu*/      
         if((displayMenuClassList.contains('width-50') && this.state.options.length === 3) || (displayMenuClassList.contains('width-50') && this.state.options.length === 2) || (displayMenuClassList.contains('width-50') && this.state.options.length === 4)) {
            this.setState({
                options:this.state.generalMenu,
                showPage:-1,
                songIndex:-1,
                selected:0,
                photoIndex:-1,
            });
        }
    }

    /**********Center-Button-Click-Fuctions*********************************************/
    selectButtonClicked = () => {
        /***if we at play music player screen or Zoom Image  screen and the side bar is hidden, when we click it then "select" button nothing happen ****/
        if(this.state.nowPlaying&&!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {
            return;
        }
        /**if at Albums or Artits Screen, when we click it then "select" button nothing happen****/
        if((this.state.showPage === 1 && this.state.optionsInMenu.length === 3) || (this.state.showPage === 2 && this.state.optionsInMenu.length === 3)){
            return;
        }
        /**if at Setting or Collection Screen, when we click it then "select" button nothing happen**/
        if((this.state.showPage === 3 && this.state.optionsInMenu.length === 4 ) || (this.state.showPage === 1 && this.state.optionsInMenu.length === 2)){
            return;
        }

        /*this part use for open music section menu **/
        if (this.state.selected === 2 && this.state.options.length === 4) {
            this.setState({
                options: this.state.musicItem,
                selected: 0,
                showPage: -1,
                songsIndex: -1,
            });
            this.selectItem = 0;
            return;
        }
        /**this part use select music from song index list**/
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {
            if (this.state.options.length === 3 ) {    //at music section
                if (this.state.showPage === 0) {        //at songs page
                    if (this.state.songsIndex === -1) {  //not on music page
                        this.setState({
                            songsIndex: this.state.songSelection,  //for selection of song to play 
                        });
                        this.selectItem = 0;
                        return;
                    }
                }
            }
        }
        /***this part use for open gallery section menu****/
        if (this.state.selected === 1 && this.state.options.length === 4) {
            this.setState({
                options: this.state.galleryItem,
                selected: 0,
                showPage: -1,
              //  photoIndex: -1,
            }
            );
            this.selectItem = 0;
            return;
        }
        /*****this part use select photo from gallery index list*****/
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {
            if (this.state.options.length === 2 ) {    //at gallery section
                if (this.state.showPage === 0) {        //at photo page                
                   if (this.state.photoIndex === -1) {
                    this.setState({
                            photoIndex: this.state.photoSelection,   //for selection of photo
                        });
                        this.selectItem = 0;
                        return;
                    }
                }
            }
        }
        this.setState({
            showPage: this.state.selected,
            songsIndex: -1,
            selected: 0,
        });
        this.selectItem = 0;
        this.menuButtonClicked();
    }

    /*****************Left-Button-Fuctions**************************************************/
    leftButtonClicked = () => { 
        /***At Playing Music Screen for change song in left side or previous***/
        if (this.state.nowPlaying) { 
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) { //if side menu is not present on the display
                if (this.state.songsIndex === 0) {    //it use switch to next song
                    this.setState({
                        songsIndex: 5
                    });
                    return;
                }
                if (this.state.songsIndex !== -1) {
                    this.setState({
                        songsIndex: this.state.songsIndex - 1
                    });
                    return;
                }
            }
        }
        /******For song section curser*********/
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {    //side menu is not visible
            if (this.state.options.length === 3) {             // at music section
                if (this.state.showPage === 0) {              // at songs page
                    if (this.state.songSelection === 0)       // at first song of index
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
            /******For Photo section curser*********/
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {    //side menu is not visible
                if (this.state.options.length === 2) {             // at gallery section
                    if (this.state.showPage === 0) {              // at photo page
                        if (this.state.photoSelection === 0)      
                            this.setState({
                                photoSelection: 5,
                                photoIndex: -1,
                            });
                        else
                            this.setState({
                                photoSelection: this.state.photoSelection - 1,
                                photoIndex: -1,
                        });
                    }
                }
            }
    }

    /****************Right-Buton-Functions***********************************************/
    rightButtonClicked = () => {
        /***At Playing Music Screen for change song in right side or next***/
        if (this.state.nowPlaying) {         
            if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {  //if the menu is not present on the display
                if (this.state.songsIndex === 5) {   //it use switch to next song
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
        /****For song section curser******/
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {    //side menu is not visible
            if (this.state.options.length === 3) {                          //at music section
                if (this.state.showPage === 0) {                            //at songs page
                    if (this.state.songSelection === 5)                     //If at playing the music at 5th index then it reduce index to 0 on next right button click.
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
        /******For Photo section curser*********/
        if (!document.getElementsByClassName('display-menu')[0].classList.contains('width-50')) {    //side menu is not visible
            if (this.state.options.length === 2) {            //at gallery section
                if (this.state.showPage === 0) {              //at photo page
                    if (this.state.photoSelection === 5)  
                        this.setState({
                            photoSelection: 0
                        });
                    else
                        this.setState({
                            photoSelection: this.state.photoSelection + 1
                        });
                }
            }
        }
    }

    /*************It use stop music when we are not at music player section*****************/
    currentlyScreen = () => { 
        let wheelcolor=document.getElementsByClassName('buttons-container')[0].classList;
        if (this.state.nowPlaying) {
            this.setState({
                nowPlaying: false          //when we not on music player it stop the song
            });
            wheelcolor.remove("colored"); //when we not on music player it remove wheel animation
        }
        else{
            this.setState({
                nowPlaying: true
            });
            if(this.props.showPage === 2 && this.props.optionsInMenu.length === 4) { //when we at music player and song Screen ,then it add wheel animation 
            wheelcolor.add("colored");
            }
        }          
    }

    /***************Play-Pause-Button-For-Song*********************************************/
    playPauseButtonClicked = () => {
        let wheelcolor=document.getElementsByClassName('buttons-container')[0].classList;
        if (document.getElementsByClassName('audio')[0] !== undefined) {
            if (document.getElementsByClassName('audio')[0].paused) {  //if paused song
                (document.getElementsByClassName('audio')[0].play());  //it play the song
                wheelcolor.add("colored");                             //add wheel color
                return;
            }
            else {
            (document.getElementsByClassName('audio')[0].pause());  //it pause the song
            wheelcolor.remove("colored");                           //remove wheel color
            }
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
                    currentlyScreen={this.currentlyScreen}
                    musicItem={this.state.musicItem}
                    currentPhotoSelection={this.state.photoSelection}
                    photoIndex={this.state.photoIndex}
                />
                <Buttons
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