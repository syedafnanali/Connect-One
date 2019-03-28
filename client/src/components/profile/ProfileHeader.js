import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
	render() {
		const { profile } = this.props;

		// const { profile } = this.props;

		// Get first name
		const firstName = profile.user.name.trim().split(' ')[0];

		// Skill List
		const skills = profile.skills.map((skill, index) => (
			<div key={index} className="p-3">
				<i class="fa fa-check" />
				{skill}
			</div>
		));
		return (
			<div className="row">
				<div className="col-md-6 mt-3">
					<div className="card card-body bg-dark text-white mb-3">
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<img className="rounded-circle" src={profile.user.avatar} alt="" />
							</div>
						</div>
						<div className="text-center">
							<h1 className="display-4 text-center">{profile.user.name}</h1>
							<p className="lead text-center">
								{profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
							</p>
							{isEmpty(profile.location) ? null : <p>{profile.location}</p>}
							<p>
								{isEmpty(profile.website) ? null : (
									<a className="text-white p-2" href={profile.website} target="_blank">
										<i className="fas fa-globe fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.twitter) ? null : (
									<a className="text-white p-2" href={profile.social.twitter} target="_blank">
										<i className="fab fa-twitter fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.facebook) ? null : (
									<a className="text-white p-2" href={profile.social.facebook} target="_blank">
										<i className="fab fa-facebook fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.linkedin) ? null : (
									<a className="text-white p-2" href={profile.social.linkedin} target="_blank">
										<i className="fab fa-linkedin fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.youtube) ? null : (
									<a className="text-white p-2" href={profile.social.youtube} target="_blank">
										<i className="fab fa-youtube fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.instagram) ? null : (
									<a className="text-white p-2" href={profile.social.instagram} target="_blank">
										<i className="fab fa-instagram fa-2x" />
									</a>
								)}
							</p>
						</div>
					</div>
				</div>
				{/* BIO SECTION */}
				<div className="col-md-6 m-auto" style={{ height: '300px', boxShadow: '5px 5px 5px rgb(171,171,171)' }}>
					<div className="card card-body bg-light mb-3 mt-3">
						<h3 className="text-center text-info">{firstName}'s Bio</h3>
						<p className="lead text-center">
							{isEmpty(profile.bio) ? (
								<span>{firstName} does not have a bio</span>
							) : (
								<span>{profile.bio}</span>
							)}
						</p>
						<hr />
						<h3 className="text-center text-info">Skill Set</h3>
						<div className="row text-center">
							<div className="d-flex flex-wrap justify-content-center align-items-center text-center">
								{skills}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileHeader;
