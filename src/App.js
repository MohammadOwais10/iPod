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
        this.changeAngle = 0; //temp_change_in_angle
        this.selectItem = 0;  //temp_selected
        this.state = {
            options: ['Gallery','Games', 'Music', 'Setting'],
            changeAngle: 0,
            selected: 0,
            showPage: -1
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
        this.menuButtonClicked();
        this.setState({
            showPage: this.state.selected
        });
    }

    render() {
        return (
            <div className="App">
                <Display
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                />
            </div>
        );
    }
}
export default App;  