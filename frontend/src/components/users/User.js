import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';

const User = ({
	profile: { user, nickname, city, phoneNumber, gender, status },
}) => {
	return (
		user && (
			<div className='user-container'>
				<div className='avatar-container'>
					<img src={user.avatar} alt="" className="round-img" />
				</div>
				<div>
					<h2 className='text-primary'>{user.name}</h2>
					<p className='text-color'>
						<AiOutlinePhone /> {phoneNumber}
					</p>
					<p className='text-color'>
						{city && (
							<span>
								<IoLocationSharp />
								{city}
							</span>
						)}
					</p>
				</div>
			</div>
		)
	);
};

User.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default User;