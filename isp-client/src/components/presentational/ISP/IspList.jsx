import React, { Component } from 'react';
import Airtel from "../../../assets/Airtel.png";
import './IspList.scss';


class IspList extends Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    {this.props.isp.map(item => (
                        <li className="collection-item avatar">
                            <img src={Airtel} alt="Airtel" className="circle"></img>
                            <span className="title">{item.name}</span>
                            <a className="secondary-content"><i className="material-icons">grade</i></a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IspList;