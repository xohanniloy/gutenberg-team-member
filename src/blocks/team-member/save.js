/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
// import icons from '../../options/icons';
// import { Fragment } from 'react/jsx-runtime';
import { Fragment } from '@wordpress/element';

export default function save({attributes}) {
	const {style} = attributes;
	return (
		<Fragment>
			<div {...useBlockProps.save({
				className: `${style}`,
			})}>
				<div className="team-member-1">
					<img
						className="member-image-1"
						src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
						alt="Team Member"
					/>
					<div className="member-info-1">
						<h3 className="member-name-1">Alex Johnson</h3>
						<p className="member-role-1">Product Designer</p>
						<p className="member-bio-1">
							Alex brings over 8 years of experience in creating
							intuitive user interfaces and seamless product
							experiences.
						</p>
						<div className="social-links-1">
							<a
								href="https://bestwpdeveloper.com/"
								className="social-link-1"
							>
								<i className="fa-brands fa-twitter"></i>
							</a>
							<a
								href="https://bestwpdeveloper.com/"
								className="social-link-1"
							>
								<i className="fa-brands fa-linkedin-in"></i>
							</a>
							<a
								href="https://bestwpdeveloper.com/"
								className="social-link-1"
							>
								<i className="fa-brands fa-github"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
