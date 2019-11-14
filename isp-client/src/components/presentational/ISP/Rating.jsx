import React, { Component } from 'react';
import './Rating.scss';

class Rating extends Component {
    render() {
        return (
            <div className="about">
                <a class="waves-effect waves-light btn-large">Rating:</a>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star_border</i>
            </div>
        );
    }
}

export default Rating;