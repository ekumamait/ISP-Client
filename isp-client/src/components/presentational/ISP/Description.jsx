import React from 'react';
import './Description.scss';

function Description({props}) {
    return (
        <div>
                <p className="move">
                    {props.singleIsp? props.singleIsp.description: ' Our internet plans are now available at never before prices.'}
                </p>
                    <a className="waves-effect waves-light btn-large"><i className="material-icons">link</i>Link</a>
                    <a className="waves-effect waves-light btn-large"><i className="material-icons">share</i>share</a>
                    <a className="waves-effect waves-light btn-large"><i className="material-icons">cloud_download</i>Download</a>
        </div>
    );
}

export default Description;