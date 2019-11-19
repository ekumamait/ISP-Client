import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createIsp } from '../../../actions/IspActions';
import PropTypes from 'prop-types';
import AddIspModal from '../../presentational/modal/AddIspModal';

class IspModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lowest_price: '',
            rating: '',
            max_speed: '',
            description: '',
            contact_no: '',
            email: '',
            image: '',
            url: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const ispData = {
            name: this.state.name,
            lowest_price: this.state.lowest_price,
            rating: this.state.rating,
            max_speed: this.state.max_speed,
            description: this.state.description,
            contact_no: this.state.contact_no,
            email: this.state.email,
            image: this.state.image,
            url: this.state.url
          };
          this.props.createIsp(ispData);
    }

    render() {
        const {
            name,
            lowest_price,
            rating,
            max_speed,
            description,
            contact_no,
            email,
            image,
            url
        } = this.state;
        const props = {
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            name,
            lowest_price,
            rating,
            max_speed,
            description,
            contact_no,
            email,
            image,
            url
        }
        return (
            <AddIspModal {...props} />
        );
    }
}

IspModal.propTypes = {
    errors: PropTypes.object.isRequired,
    createIsp: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
      errors: state.errors
    };
  };

export default connect(
    mapStateToProps,
    { createIsp },
  )(IspModal);
