import React, { Component } from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dog: {},
            dogPic: '',
        }
    };

    getDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    // dog: data, 
                    dogPic: data.message,
                })
            })
            .catch(error => console.log(error))
    };


    render() {
        return (
            <div>
                <h1>Picture of Dog</h1>
                <br />
                <button onClick={this.getDogPic}>Get New Image</button>
                <br />
                <img src={this.state.dogPic} alt="dog" />
            </div>
        )
    }
};