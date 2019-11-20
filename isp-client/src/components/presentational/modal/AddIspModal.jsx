import React, { Component } from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import './AddIspModal.scss';
import cancel from "../../../assets/cancel.svg";

class AddIspModal extends Component {
    componentDidMount(){
        M.Modal.init(this.Modal);
    }
    render() {
        return (
            <div>
                <button className="btn-floating btn-large waves-effect waves-light btn modal-trigger" href="#modal1" 
                data-target="modal1"><i className="material-icons">add</i></button>
                <div 
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                id="modal1" className="modal">
                    <div className="modal-content">
                        <div className="title">
                            <h4>Add ISP: Company Details</h4>
                            <button className="terminate" >
                            <img src={cancel}/>
                            </button>
                        </div>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input 
                                    id="icon_account_circle" 
                                    type="text" 
                                    className="validate"
                                    name="name"
                                    value={this.props.name}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_account_circle">Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">monetization_on</i>
                                    <input 
                                    id="icon_monetization_on" 
                                    type="text" 
                                    className="validate"
                                    name="lowest_price"
                                    value={this.props.lowest_price}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_monetization_on">Lowest Price</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">star</i>
                                    <input 
                                    id="icon_star" 
                                    type="text" 
                                    className="validate"
                                    name="rating"
                                    value={this.props.rating}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_star">Rating</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">network_wifi</i>
                                    <input 
                                    id="icon_network_wifi" 
                                    type="text" 
                                    className="validate"
                                    name="max_speed"
                                    value={this.props.max_speed}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_network_wifi">Max Speed</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">description</i>
                                    <input 
                                    id="icon_description" 
                                    type="text" 
                                    className="validate"
                                    name="description"
                                    value={this.props.description}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_description">Description</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">phone</i>
                                    <input 
                                    id="icon_phone" 
                                    type="text" 
                                    className="validate"
                                    name="contact_no"
                                    value={this.props.contact_no}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_phone">Contact No</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input 
                                    id="icon_email" 
                                    type="email" 
                                    className="validate"
                                    name="email"
                                    value={this.props.email}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">link</i>
                                    <input 
                                    id="icon_link" 
                                    type="text" 
                                    className="validate"
                                    name="url"
                                    value={this.props.url}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_link">Url</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">image</i>
                                    <input 
                                    id="icon_image" 
                                    type="text" 
                                    className="validate"
                                    name="image"
                                    value={this.props.image}
                                    onChange={this.props.onChange}
                                    />
                                    <label for="icon_image">Image</label>
                                </div>
                                <div>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div classNmae="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-red btn-large red">Cancel</a>
                        <a href="#!" onClick={this.props.onSubmit} className="modal-close waves-effect waves-green btn-large">Submit</a>
                    </div>
            </div>
          </div>
        );
    }
}

export default AddIspModal;