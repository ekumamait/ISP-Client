import React, { Component } from 'react';
import lorem from "../../../assets/lorem.jpeg";
import './Isp.scss';

function Isp({props}) {    
    return (
        <div>
            <div className="col s12 m7">

                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={lorem}></img>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">network_wifi
                                    </i>Max speed: | {props.singleIsp ? props.singleIsp.max_speed: '500mbps'}</a><br></br>
                                </div>
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">phone
                                    </i>Phone: | {props.singleIsp? props.singleIsp.contact_no: '+254705999231'}</a><br></br>
                                </div>
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">mail
                                    </i>Email: | {props.singleIsp? props.singleIsp.email: 'email@gmail.com'}</a><br></br>
                                </div>
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">monetization_on
                                    </i>Min.Plan: | {props.singleIsp? props.singleIsp.lowest_price: '450/-'}</a><br></br>
                                </div>
                            </div>
                            <div className="card-action">
                                <a href="#">Airtel</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Isp;
