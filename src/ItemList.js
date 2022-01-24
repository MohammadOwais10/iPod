import React from "react";

class ItemList extends React.Component {
    render() {
        const { optionsInMenu } = this.props;
        return (
            <React.Fragment> {
                optionsInMenu.map((item, index) => {
                    return (
                        <div className={this.props.selectedOption === index ? 'selected' : ''} key={index}>
                            <p>{item}</p>
                        </div>
                    )
                })
            }
            
            </React.Fragment>
        )
    }
}

export default ItemList;