import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IspList from '../../presentational/isp/IspList';
import { getAllIsp } from '../../../actions/IspActions';

class ispList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllIsp();
    }

    render() {
        return (
            <IspList {...this.props}/>
        );
    }
}

ispList.propTypes = {
    getAllIsp: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
      isp: state.isp.isp,
      errors: state.errors
    };
  };

export default connect(
    mapStateToProps,
    { getAllIsp },
  )(ispList);