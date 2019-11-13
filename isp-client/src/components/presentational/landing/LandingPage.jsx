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
                        <a href="#!" className="secondary-content"><i className="material-icons">home</i></a>
                        (one-half)
                        <SearchBar />
                        <IspList />
                        <a class="waves-effect waves-light btn-large"><i className="material-icons">sort</i>Sort by</a>
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
                        <div>
                        <Isp /><br></br>
                        </div>
                        <div>
                        <Rating /><br></br>
                        </div>
                        <Description />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;