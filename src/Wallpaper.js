import React from "react";
import firebase from "firebase/app";

class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            all_theme_list: [],
            loading: true
        }
    }
    componentDidMount() {
        firebase
            .firestore()
            .collection("all_theme_list")
            .get()
            .then(snapshot => {
                const new_data_array = snapshot.docs.map(doc => {
                    const data = doc.data();
                    data["id"] = doc.id;
                    return data;
                });
                this.setState({ all_theme_list: new_data_array, loading: false });
            });
    }

    render() {
        return (this.state.loading ? <h1>Loading...</h1> :
            <div className="all-songs">
                <h1 className="all-songs-heading">
                    All Wallpaper
                </h1>
                <div className="all-songs-list">
                    {this.state.all_theme_list.map((item, index) => {
                        return (
                            <div className={this.props.currentMusicSelection === index ? 'selected-song' : ''} key={index}>
                                {item.wp_name}
                            </div>
                        )
                    })}
                    <div className="instruction-all-songs">
                        Use "<i className="fas fa-backward"></i>" and "<i className="fas fa-forward"></i>" buttons to navigate.
                    </div>
                </div>

            </div>
        );
    }
}




export default Wallpaper;