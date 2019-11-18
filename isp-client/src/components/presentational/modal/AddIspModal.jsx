import React, { Component } from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import './AddIspModal.scss';

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
                        <h4>Add ISP</h4>
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_account_circle" type="text" class="validate"/>
                                    <label for="icon_account_circle">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">monetization_on</i>
                                    <input id="icon_monetization_on" type="text" class="validate"/>
                                    <label for="icon_monetization_on">Lowest Price</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">star</i>
                                    <input id="icon_star" type="text" class="validate"/>
                                    <label for="icon_star">Rating</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">network_wifi</i>
                                    <input id="icon_network_wifi" type="text" class="validate"/>
                                    <label for="icon_network_wifi">Max Speed</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">description</i>
                                    <input id="icon_description" type="text" class="validate"/>
                                    <label for="icon_description">Description</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_phone" type="text" class="validate"/>
                                    <label for="icon_phone">Contact No</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">email</i>
                                    <input id="icon_email" type="email" class="validate"/>
                                    <label for="icon_email">Email</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">link</i>
                                    <input id="icon_link" type="text" class="validate"/>
                                    <label for="icon_link">Url</label>
                                </div>
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">image</i>
                                    <input id="icon_image" type="text" class="validate"/>
                                    <label for="icon_image">Image</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div classNmae="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-red btn-large red">Cancel</a>
                        <a href="#!" className="modal-close waves-effect waves-green btn-large">Submit</a>
                    </div>
            </div>
          </div>
        );
    }
}

export default AddIspModal;