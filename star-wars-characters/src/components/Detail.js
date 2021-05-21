import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
    static propTypes = {
        character: PropTypes.shape({
            name: PropTypes.string.isRequired,
            height: PropTypes.string.isRequired,
            hair_color: PropTypes.string.isRequired,
            eye_color: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
        })
    }

    state = {
        character: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        const apiUrl = 'https://swapi.dev/api/people/'+this.props.id;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((character) => this.setState({character, loading: false}))
            .catch((error) => this.setState({error: true, loading: false}));
    }    

    render() {
        const {loading, character, error} = this.state
        let content;

        if (character) {
            content = (
                <center>
                    <h1>{character.name}</h1>
                    <h3>Height: {character.height}</h3>
                    <h3>Hair Color: {character.hair_color}</h3>
                    <h3>Eye Color: {character.eye_color}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <a href="/"><button>Go Back</button></a>
                </center>
            );
        }
        return (
            <div className="container">
                {loading && <center><h3>Loading...</h3></center>}
                {error && <center><h3>Error. Please try again</h3></center>}
                {content} 
            </div>
        ) 

    }
}
export default Detail;