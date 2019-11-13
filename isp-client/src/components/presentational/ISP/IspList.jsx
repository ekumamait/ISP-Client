import React, { Component } from 'react';
import Airtel from "../../../assets/Airtel.png";
import Glo from "../../../assets/Glo.jpeg";
import MTN from "../../../assets/MTN.jpeg";
import Orange from "../../../assets/Orange.png";


class IspList extends Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src={Airtel} alt="" className="circle"></img>
                        <span className="title">Airtel</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={MTN} alt="" className="circle"></img>
                        <span className="title">MTN</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={Orange} alt="" className="circle"></img>
                        <span className="title">Orange</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={Glo} alt="" className="circle"></img>
                        <span className="title">GLO</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default IspList;