import React from 'react';
import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';
// import { FaUser } from 'react-icons/fa';
import { RiLogoutCircleFill, RiAccountCircleFill, RiUserSearchFill } from 'react-icons/ri';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthLinks = (props) => {
    return (
        <div>
           <ul>
                <li> 
                    <Link to='/posts'>
                        <AiFillEdit /> Posts
                    </Link>
                </li>
                <li> 
                    <Link to="/" onClick={() => props.logout()}> 
                        <RiLogoutCircleFill /> Log out
                    </Link>
                </li>
                <li> 
                    <Link to="/account"> 
                        <RiAccountCircleFill /> My account 
                    </Link>
                </li>
                <li> 
                    <Link to="/profile"> 
                        <RiUserSearchFill /> Discover people 
                    </Link>
                </li>
            </ul> 
        </div>
    )
}

AuthLinks.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AuthLinks);
