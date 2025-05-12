/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
// const { Fragment } = wp.element;
import { Fragment } from '@wordpress/element';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import './style.scss';
// import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
// Edit Function
export default function Edit({ attributes, setAttributes }) {
	const { style, myImageUrl } = attributes;
	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: `${style}`,
				})}
			>
				
				<div className="team-member-1">
					
					<img
						className="member-image-1"
						src={myImageUrl}
						// src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
						alt="img"
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
