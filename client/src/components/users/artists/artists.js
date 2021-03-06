import React, { Component } from "react";
// import './artists.css';

class Artists extends Component {
    constructor() {
        super();
        this.state = {
            artists: []
        }
    }

    componentDidMount() {
        fetch("/api/artists")
            .then(res => res.json())
            .then(artists => this.setState({artists},
                () => console.log("artist's fetched..", artists)));
    }

    render() {
        return (
            <div>
                <h2>Artists</h2>
                <ul>
                    {this.state.artists.map(artist => 
                        <li key = {artist.id}>
                            { artist.firstName }, { artist.lastName }
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Artists;
