import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import VisitorsLinks from './VisitorsLinks';
import AuthLinks from './AuthLinks';
import { connect } from 'react-redux';
import books from '../../images/books.png';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1 className="logo">
                    <img className="bookImg" src={books} alt="books" />
                    <Link to='/'>shareBook</Link>
                </h1>
                { props.auth.isAuthenticated ? <AuthLinks /> : <VisitorsLinks /> } 
            </nav>
        </div>
    )
};

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, {})(Navbar);
