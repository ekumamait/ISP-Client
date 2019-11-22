import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../../presentational/landing/Landing';
import { getAllIsp, getSingleIsp } from '../../../actions/IspActions';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {        
        this.props.getSingleIsp(event);
    }

    componentDidMount() {
        this.props.getAllIsp();
    }

    render() {
        const clickEvent = {
            handleClick: this.handleClick,
        }
        return (
            <Landing props={this.props} clickEvent={clickEvent} />
        );
    }
}

LandingPage.propTypes = {
    getSingleIsp: PropTypes.object.isRequired,
    getAllIsp: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
      isp: state.isp.isp,
      singleIsp: state.isp.singleIsp.data,
      errors: state.errors
    };
  };


export default connect(
    mapStateToProps,
    { getAllIsp, getSingleIsp },
  )(LandingPage);