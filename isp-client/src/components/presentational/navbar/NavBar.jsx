import React, { Component } from 'react';
import './NavBar.scss';
import AddIspModal from '../modal/AddIspModal';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <div class="brand-logo">ISP HackerEarth <span>- searching ISP made easy!</span></div>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><AddIspModal /></li>
                                <li><a class="waves-effect waves-light btn-large">Total ISP: 09 | API Hits: 748</a></li>
                            </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;