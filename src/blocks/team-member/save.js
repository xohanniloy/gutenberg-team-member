/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import iconLib from '../../options/icons';
// import { Fragment } from 'react/jsx-runtime';
import { Fragment } from '@wordpress/element';

export default function save({ attributes }) {
	const { style, myImageUrl, title, titleTag, designation, description, icons } =
		attributes;
	return (
		<Fragment>
			<div
				{...useBlockProps.save({
					className: `${style}`,
				})}
			>
				<div className="team-member-1">
					<img
						className="member-image-1"
						src={
							myImageUrl ||
							'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'
						}
						// src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
						alt="Team Member Image"
					/>
					<div className="member-info-1">
						<RichText.Content
							tagName={titleTag}
							value={title}
							className="member-name-1"
						/>
						<RichText.Content
							tagName="p"
							value={designation}
							className="member-role-1"
						/>
						<RichText.Content
							tagName="p"
							value={description}
							className="member-bio-1"
						/>
						<div className="social-links-1">
							{/* <a
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
							</a> */}
							{icons &&
								icons.length > 0 &&
								icons.map((iconItem, index) => (
									<a href="#" key={index}>
										{iconLib[iconItem.icons] || null}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
