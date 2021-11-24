import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentUserProfile } from '../../actions/profile';
import { loadUser } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoLocationSharp } from 'react-icons/io5';
import { RiDeleteBinLine, RiUserHeartLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { SiHey } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';

const Home = ({
	loadUser,
	getCurrentUserProfile,
	deleteAccount,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		loadUser();
		getCurrentUserProfile();
		console.log(profile);
	}, [getCurrentUserProfile, loadUser]);

	return (
		<div className="container">
			<p className="text-primary welcome">
				<SiHey /> Welcome, {user && user.name}!
			</p>
			<Fragment>
				{profile !== null ? (
					<Fragment>
						<div className='user-container profile'>
							<div className='user-profile'>
								<img src={user.avatar} alt="" className="round-img" />
							</div>
							<div>
								<h3 className='text-primary my-profile-card'>Nickname: {profile.nickname}</h3>
								<p className='text-color my-profile-card'>
									<AiOutlinePhone /> {profile.phoneNumber}
								</p>
								<p className='text-color my-profile-card'>
									{profile.city && (
										<span>
											<IoLocationSharp />
											{profile.city}
										</span>
									)}
								</p>
								<p className='text-color my-profile-card'>
									<RiUserHeartLine /> {profile.status}
								</p>
								<p className='text-color my-profile-card'>
									<BsGenderAmbiguous /> {profile.gender}
								</p>
							</div>
						</div>

						<Link to="/edit-profile" className="btn">
							<FiEdit /> Edit Profile
						</Link>
						<button className="btn delete-btn" onClick={() => deleteAccount()}>
							<RiDeleteBinLine />
							Delete Account
						</button>
					</Fragment>
				) : (
					<Fragment>
						<Link to="/create-profile" className="btn">
							<IoAddCircleOutline />
							Create Profile
						</Link>
						<button className="btn delete-btn" onClick={() => deleteAccount()}>
							<RiDeleteBinLine />
							Delete Account
						</button>
					</Fragment>
				)}
			</Fragment>
		</div>
	);
};

Home.propTypes = {
	loadUser: PropTypes.func.isRequired,
	getCurrentUserProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, {
	loadUser,
	getCurrentUserProfile,
	deleteAccount,
})(Home);