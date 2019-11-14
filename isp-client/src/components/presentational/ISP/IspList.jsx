import React, { Component } from 'react';
import Airtel from "../../../assets/Airtel.png";
import Glo from "../../../assets/Glo.jpeg";
import MTN from "../../../assets/MTN.jpeg";
import Orange from "../../../assets/Orange.png";
import './IspList.scss';


class IspList extends Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src={Airtel} alt="Airtel" className="circle"></img>
                        <span className="title">Airtel</span>
                        <a className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={MTN} alt="MTN" className="circle"></img>
                        <span className="title">MTN</span>
                        <a className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={Orange} alt="Orange" className="circle"></img>
                        <span className="title">Orange</span>
                        <a className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                        <img src={Glo} alt="Glo" className="circle"></img>
                        <span className="title">GLO</span>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default IspList;