import React, { Component } from 'react';
import './NavBar.scss';
import IspModal from '../../container/modal/IspModal';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div className="brand-logo">ISP HackerEarth <span>- searching ISP made easy!</span></div>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><IspModal /></li>
                                <li><a className="waves-effect waves-light btn-large">Total ISP: 09 | API Hits: 748</a></li>
                            </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;