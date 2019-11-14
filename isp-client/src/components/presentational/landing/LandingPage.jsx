import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import SearchBar from '../search/SearchBar';
import IspList from '../ISP/IspList';
import Isp from '../ISP/Isp';
import Rating from '../ISP/Rating';
import Description from '../ISP/Description';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="row">
                    
                    <div class="col s7">                    
                        <i className="material-icons">home</i>
                        <br></br>
                        <SearchBar />
                        <IspList />
                        <a  href="http://google.com" class="waves-effect waves-light btn-large"><i className="material-icons">sort</i>Sort by</a>
                        <div>
                            <label>
                                <input class="with-gap" name="group3" type="radio" checked />
                                <span>Price</span>
                            </label>
                            <label>
                                <input class="with-gap" name="group3" type="radio" checked />
                                <span>Rating</span>
                            </label>
                        </div>
                    </div>
                    <div class="col s5">
                        <p>
                        <Isp /><br></br>
                        </p>
                        <p>
                        <Rating /><br></br>
                        </p>
                        <Description />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;