import Character from './Character';
import React from 'react';

class List extends React.Component {
    state = {
        characters: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        const apiUrl = 'https://swapi.dev/api/people/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((characters) => this.setState({characters, loading: false}))
            .catch((error) => this.setState({error: true, loading: false}));
    }

    render() {
        const {loading, characters, error} = this.state
        let content;

        if (characters) {
            content = (
                <div className="character-list">
                    {characters.results.map((a, index) => {
                        return <Character key={index} people={a} />
                    })}
                </div>
            )
        }
        return (
            <div className="container">
                <center><h1>The Characters of Star Wars</h1></center>
                {loading && <center><h3>Loading...</h3></center>}
                {error && <center><h3>Error. Please try again</h3></center>}
                {content}
            </div>
        )
    }
}

export default List;