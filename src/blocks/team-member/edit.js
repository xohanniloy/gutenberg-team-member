/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
// const { Fragment } = wp.element;
import { Fragment, useEffect } from '@wordpress/element';

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

import ControlStyle from './controlStyle';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		style,
		myImageUrl,
		title,
		titleTag,
		designation,
		description,
		icons,

		uniqueId,
		blockStyle,
		titleColor,
		titleBgColor,
		titleHoverColor,
		descriptionColor,
		designationHoverColor,
		iconColor,
		svgColor,
		svgHoverColor,
		iconBgNormalColor,
		iconHoverColor,
		iconBgHoverColor,
		contentWrapperBg,
		contentBgColor,
		boxBgHoverColor,
		textAlign,
		itemBgHoverColor,
		itemBgOverlayColor,
		items,
		containerWidth,
		titleTypography,
		descTypography,
		borderSettings,
		borderIcon,
		boxShadow,
		boxShadowIcon,
		nameAlign,
		designationAlign,
		iconAlign,
		itemNormalBg,
		itemGradientBg,
		itemGradientHoverBg,
		wrapperBgColor,
		mainWrapperBgColor,
		wrapperBorder,
		boxShadowWrapper,
		hideOnDesktop,
		hideOnTablet,
		hideOnMobile,
		zIndex,
		additionalClass,
		id,
		customCSS,
		wrapperGradientBg,
		imageUrl,
		bgPosition,
		bgAttachment,
		bgRepeat,
		bgSize,
	} = attributes;
	return (
		<Fragment>
			<ControlStyle attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: `${uniqueId} ${style}`,
				})}
			>
				<div className="wiztm-team-member">
					<img
						className="wiztm-team-image"
						src={
							myImageUrl ||
							'https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g'
						}
						// src="https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g"
						alt="Team Member Image"
					/>
					<div className="wiztm-team-info">
						<RichText
							tagName={titleTag}
							value={title}
							onChange={(value) =>
								setAttributes({ title: value })
							}
							placeholder="Enter title"
							className="wiztm-team-name"
						/>
						<RichText
							tagName="p"
							value={designation}
							onChange={(value) =>
								setAttributes({ designation: value })
							}
							placeholder="Enter title"
							className="wiztm-team-role"
						/>
						<RichText
							tagName="p"
							value={description}
							onChange={(value) =>
								setAttributes({ description: value })
							}
							placeholder="Enter title"
							className="wiztm-team-bio"
						/>
						<div className="wiztm-team-social">
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
