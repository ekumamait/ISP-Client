import React, { Component } from 'react';
import lorem from "../../../assets/lorem.jpeg";

class Isp extends Component {
    render() {
        return (
            <div>
                <div class="col s12 m7">
                    <div class="card horizontal">
                        <div class="card-image">
                            <img src={lorem}></img>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">network_wifi</i> Max speed: 500mbps</a><br></br>
                                </div>
                                <div>
                                    <a href="#!" className="secondary-content"><i className="material-icons">phone</i> +254705999231</a>
                                </div>
                                <a href="#!" className="secondary-content"><i className="material-icons">mail</i> 123@mail.com</a>
                                <a href="#!" className="secondary-content"><i className="material-icons">monetization_on</i> Min. Plan: 450/-</a>
                            </div>
                            <div class="card-action">
                                <a href="#">Airtel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Isp;