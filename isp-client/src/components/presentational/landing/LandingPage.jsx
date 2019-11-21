import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import SearchBar from '../search/SearchBar';
import IspList from '../../container/isp/ispList';
import Isp from '../isp/Isp';
import Rating from '../isp/Rating';
import Description from '../isp/Description';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="row">
                    <div className="col s7">                    
                        <br></br>
                        <SearchBar />
                        <IspList />
                        <a  href="http://google.com" className="waves-effect waves-light btn-large">
                            <i className="material-icons">sort</i>Sort by
                        </a>
                        <div>
                            <label>
                                <input className="with-gap" name="group3" type="radio" checked />
                                <span>Price</span>
                            </label>
                            <label>
                                <input className="with-gap" name="group3" type="radio" checked />
                                <span>Rating</span>
                            </label>
                        </div>
                    </div>
                    <div className="col s5">
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