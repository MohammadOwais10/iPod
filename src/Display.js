import React from 'react'
import Menu from './Menu'
import Gallery from './Gallery'
import Games from './Games'
import Music from './Music'
import Setting from './Setting'

class Display extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="display-container">
                <Menu selectedOption={this.props.selectedOption} />
                {this.props.showPage === 0 ? <Gallery /> : ''}
                {this.props.showPage === 1 ? <Games /> : ''}
                {this.props.showPage === 2 ? <Music /> : ''}
                {this.props.showPage === 3 ? <Setting /> : ''} 
            </div>
        );
    }
}

export default Display;