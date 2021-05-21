import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Character extends Component {
    static propTypes = {
        people: PropTypes.shape({
            results: PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        }).isRequired
    }

    render() {
        const {name, url} = this.props.people;
        const urlConvert = url.match("[0-9]+")
        return (
            <center>
                <a href={urlConvert}>{name}</a>
            </center>
            )
    }
}
export default Character;