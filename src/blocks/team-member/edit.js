/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
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
import iconLib from '../../options/icons';
// Edit Function
export default function Edit({ attributes, setAttributes }) {
	const {
		style,
		myImageUrl,
		title,
		titleTag,
		designation,
		description,
		icons,
	} = attributes;
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
						src={
							myImageUrl ||
							'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'
						}
						// src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
						alt="Team Member Image"
					/>
					<div className="member-info-1">
						<RichText
							tagName={titleTag}
							value={title}
							onChange={(value) =>
								setAttributes({ title: value })
							}
							placeholder="Enter title"
							className="member-name-1"
						/>
						<RichText
							tagName="p"
							value={designation}
							onChange={(value) =>
								setAttributes({ designation: value })
							}
							placeholder="Enter title"
							className="member-role-1"
						/>
						<RichText
							tagName="p"
							value={description}
							onChange={(value) =>
								setAttributes({ description: value })
							}
							placeholder="Enter title"
							className="member-bio-1"
						/>
						<div className="social-links-1">
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
