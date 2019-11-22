import React from 'react';
import NavBar from '../navbar/NavBar';
import SearchBar from '../search/SearchBar';
import IspList from '../isp/IspList';
import Isp from '../isp/Isp';
import Rating from '../isp/Rating';
import Description from '../isp/Description';

function Landing({props, clickEvent}) {
    return (
        <div>
            <NavBar />
                <div className="row">
                    <div className="col s7">                    
                        <br></br>
                        <SearchBar />
                        <IspList props={props} clickEvent={clickEvent}/>
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
                        <Isp props={props}/><br></br>
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

export default Landing;