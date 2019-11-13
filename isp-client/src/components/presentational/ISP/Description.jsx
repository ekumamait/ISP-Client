import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div>
                <p>
                    Our internet plans are now available at never before prices.
                    Let say you’re building a simple PHP web application, 
                    you have three PHP scripts: index.php for the home page, 
                    users.php for displaying all users and user.php for displaying 
                    a specific user.Of course in a real PHP web application 
                    you’ll have a more html markups, some CSS, JavaScript 
                    and Databases but for this example we’ll keep it simple just to demonstrate the DRY principle.
                </p>
                    <a class="waves-effect waves-light btn-large"><i className="material-icons">link</i>Link</a>
                    <a class="waves-effect waves-light btn-large"><i className="material-icons">share</i>share</a>
                    <a class="waves-effect waves-light btn-large"><i className="material-icons">cloud_download</i>Download</a>
            </div>
        );
    }
}

export default Description;