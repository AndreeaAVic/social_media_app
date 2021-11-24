import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

const HomeActions = (props) => {
	return (
		<div>
			<Link to="/edit-profile" className="btn">
				<FaUserCircle /> Edit Profile
			</Link>
			<button className="btn">
				<RiDeleteBinLine />
				Delete Account
			</button>
		</div>
	);
};

HomeActions.propTypes = {};

export default HomeActions;