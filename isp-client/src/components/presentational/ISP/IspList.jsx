import React from 'react';
import Airtel from "../../../assets/Airtel.png";

function IspList({props, clickEvent}) {
    return (
        <div>
            <ul className="collection">
                {props.isp.map(item => (
                    <li className="collection-item avatar" key={item._id} id={item._id} onClick={() => clickEvent.handleClick(item._id)}>
                        <img src={Airtel} alt="Airtel" className="circle"></img>
                        <span className="title">{item.name}</span>
                        <a className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IspList;
