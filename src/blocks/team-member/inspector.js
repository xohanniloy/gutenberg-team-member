/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	CardDivider,
	TextControl,
	Button,
	ToggleControl,
	TextareaControl,
	GradientPicker,
	Panel,
	BaseControl,
	ColorPicker,
} from '@wordpress/components';
const { Fragment, useState, useEffect } = wp.element;
const { useDispatch } = wp.data;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import aligns from '../../options/align';
import SelectedTag from '../../options/select-tag';
import SelectStyle from '../../options/selected-style';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';
import iconLib from '../../options/icons';

const {
	ResRangleControl,
	ColorControl,
	BackgroundControl,
	TabPanelControl,
	MyTypographyControl,
	CustomBorderControl,
	BoxShadowControl,
	Alignment,
	ResDimensionControl,
	IconPicker,
} = Controls;
const {
	ICON_SIZE,
	SVG_SIZE,
	IMAGE_SIZE,
	TITLE_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_ROUND_SIZE,
	ICON_BORDER_RADIUS_TOP,
	ICON_BORDER_RADIUS_RIGHT,
	ICON_BORDER_RADIUS_BOTTOM,
	ICON_BORDER_RADIUS_LEFT,
	TITLE_MARGIN_TOP,
	TITLE_MARGIN_BOTTOM,
	ITEM_BORDER_RADIUS_TOP,
	ITEM_BORDER_RADIUS_RIGHT,
	ITEM_BORDER_RADIUS_BOTTOM,
	ITEM_BORDER_RADIUS_LEFT,
	ITEM_PADDING_TOP,
	ITEM_PADDING_RIGHT,
	ITEM_PADDING_BOTTOM,
	ITEM_PADDING_LEFT,
	WRAPPER_PADDING_BOTTOM,
	WRAPPER_PADDING_LEFT,
	WRAPPER_PADDING_RIGHT,
	WRAPPER_PADDING_TOP,
	WRAPPER_MARGIN_TOP,
	WRAPPER_MARGIN_RIGHT,
	WRAPPER_MARGIN_BOTTOM,
	WRAPPER_MARGIN_LEFT,
	WRAPPER_BORDER_RADIUS_TOP,
	WRAPPER_BORDER_RADIUS_RIGHT,
	WRAPPER_BORDER_RADIUS_BOTTOM,
	WRAPPER_BORDER_RADIUS_LEFT,
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		style,
		titleColor,
		titleHoverColor,
		descriptionColor,
		designationHoverColor,
		iconColor,
		svgColor,
		iconHoverColor,
		svgHoverColor,
		iconBgNormalColor,
		iconBgHoverColor,
		contentWrapperBg,
		itemBgHoverColor,
		items,
		currentMedia,
		titleBgColor,
		titleTag,
		titleTypography,
		descTypography,
		borderSettings,
		boxShadow,
		boxShadowIcon,
		nameAlign,
		designationAlign,
		iconAlign,
		itemNormalBg,
		itemGradientBg,
		itemGradientHoverBg,
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
		myImageUrl,
		MyImgId,
		MyImgalt,
		title,
		designation,
		description,
		icons,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};

	const [expandedPanels] = useState({});
	const stylesToShowPanelFor = [
		'style-3',
		'style-5',
		'style-7',
		'style-8',
		'style-9',
		'style-10',
		'style-11',
		'style-12',
		'style-13',
		'style-14',
		'style-15',
		'style-16',
		'style-17',
	];
	const stylesTitle = ['style-10', 'style-13'];
	const { editPost } = useDispatch('core/editor');

	const applyCustomCSS = (css) => {
		const styleElement = document.getElementById('custom-css-block-styles');

		if (styleElement) {
			styleElement.innerHTML = css;
		} else {
			const newStyleElement = document.createElement('style');
			newStyleElement.id = 'custom-css-block-styles';
			newStyleElement.innerHTML = css;
			document.head.appendChild(newStyleElement);
		}
	};

	const handleInputChange = (value) => {
		setAttributes({ customCSS: value });
		editPost({ meta: { 'custom-css': value } });
	};

	useEffect(() => {
		if (customCSS) {
			applyCustomCSS(customCSS);
		}
	}, [customCSS]);

	const iconBorderRadius = [
		ICON_BORDER_RADIUS_TOP,
		ICON_BORDER_RADIUS_RIGHT,
		ICON_BORDER_RADIUS_BOTTOM,
		ICON_BORDER_RADIUS_LEFT,
	];
	const itemBorderRadius = [
		ITEM_BORDER_RADIUS_TOP,
		ITEM_BORDER_RADIUS_RIGHT,
		ITEM_BORDER_RADIUS_BOTTOM,
		ITEM_BORDER_RADIUS_LEFT,
	];
	const itemPadding = [
		ITEM_PADDING_TOP,
		ITEM_PADDING_RIGHT,
		ITEM_PADDING_BOTTOM,
		ITEM_PADDING_LEFT,
	];
	const marginControl = [
		WRAPPER_MARGIN_TOP,
		WRAPPER_MARGIN_RIGHT,
		WRAPPER_MARGIN_BOTTOM,
		WRAPPER_MARGIN_LEFT,
	];
	const paddingControl = [
		WRAPPER_PADDING_TOP,
		WRAPPER_PADDING_RIGHT,
		WRAPPER_PADDING_BOTTOM,
		WRAPPER_PADDING_LEFT,
	];
	const wrapperBorderRadius = [
		WRAPPER_BORDER_RADIUS_TOP,
		WRAPPER_BORDER_RADIUS_RIGHT,
		WRAPPER_BORDER_RADIUS_BOTTOM,
		WRAPPER_BORDER_RADIUS_LEFT,
	];

	return (
		<InspectorControls>
			<Fragment>
				<TabPanelControl
					tabs={[
						{
							name: 'service_service_normal',
							title: 'Content',
							className: 'bwd-tab bwd-general',
							icon: 'edit',
							components: (
								<Fragment>
									<div className="bwdssb-team-container">
										<PanelBody
											title={__(
												'Layout Style',
												'wiztm-team-member'
											)}
											initialOpen={true}
										>
											<SelectControl
												label={__(
													'Select Layout Style',
													'wiztm-team-member'
												)}
												value={style}
												options={SelectStyle}
												onChange={(size) =>
													setAttributes({
														style: size,
													})
												}
											/>
											<PanelRow>
												<label className="components-truncate components-text components-input-control__label">
													Image
												</label>
											</PanelRow>
											<MediaUploadCheck>
												<MediaUpload
													label={__(
														'Upload Image',
														'wiztm-team-member'
													)}
													onSelect={(media) =>
														setAttributes({
															myImageUrl:
																media.url,
															MyImgId: media.id,
															MyImgalt:
																media.alt ||
																'image',
														})
													}
													allowedTypes={['image']}
													value={MyImgId}
													render={({ open }) => (
														<div className="wiztm-team-member-container">
															<div className="service-image-control">
																{myImageUrl ? (
																	<div className="service-image-preview-container">
																		<Button
																			className="service-image-preview-wrapper"
																			onClick={
																				open
																			}
																		>
																			<img
																				src={
																					myImageUrl
																				}
																				alt={
																					MyImgalt
																				}
																				className="service-image-preview"
																			/>
																			<span className="service-edit-icon">
																				<i className="dashicons dashicons-edit"></i>
																			</span>
																		</Button>
																		<Button
																			className="service-close-icon"
																			onClick={() =>
																				setAttributes(
																					{
																						myImageUrl:
																							'',
																						MyImgId:
																							'',
																						MyImgalt:
																							'',
																					}
																				)
																			}
																		>
																			<i className="dashicons dashicons-dismiss"></i>
																		</Button>
																	</div>
																) : (
																	<Button
																		className="service-placeholder-image"
																		onClick={
																			open
																		}
																	>
																		<img
																			src={
																				placeholderImageUrl
																			}
																			alt="Placeholder"
																		/>
																		<span>
																			{__(
																				'Click to Upload Image',
																				'wiztm-team-member'
																			)}
																		</span>
																	</Button>
																)}
															</div>
														</div>
													)}
												/>
											</MediaUploadCheck>
											<TextControl
												label={__(
													'Title',
													'wiztm-team-member'
												)}
												value={title}
												onChange={(title) =>
													setAttributes({ title })
												}
												placeholder={__(
													'Write service title',
													'wiztm-team-member'
												)}
											/>
											<SelectControl
												label={__(
													'Title Tag',
													'wiztm-team-member'
												)}
												value={titleTag}
												options={SelectedTag}
												onChange={(value) =>
													setAttributes({
														titleTag: value,
													})
												}
											/>
											<TextControl
												label={__(
													'Designation',
													'wiztm-team-member'
												)}
												value={designation}
												onChange={(value) =>
													setAttributes({
														designation: value,
													})
												}
												placeholder={__(
													'Write Designation',
													'wiztm-team-member'
												)}
											/>
											<TextareaControl
												label={__(
													'Description',
													'wiztm-team-member'
												)}
												value={description}
												onChange={(newText) =>
													setAttributes({
														description: newText,
													})
												}
												placeholder={__(
													'Write description',
													'wiztm-team-member'
												)}
											/>
											{icons &&
												icons.map((icon, index) => (
													<div
														key={index}
														className="wiztm-icons-repeater-item"
													>
														<PanelBody
															title={__(
																`Icon ${
																	index + 1
																}`,
																'wiztm-team-member'
															)}
															initialOpen={false}
														>
															<IconPicker
																label={__(
																	'Icon',
																	'bwdssb-service-showcase'
																)}
																selectedIcon={
																	icons[index]
																		.icons
																}
																changeIcon={(
																	newIcon
																) =>
																	setAttributes(
																		{
																			icons: icons.map(
																				(
																					icon,
																					i
																				) =>
																					i ===
																					index
																						? {
																								...icon,
																								icons: newIcon,
																						  }
																						: icon
																			),
																		}
																	)
																}
															/>
														</PanelBody>
													</div>
												))}

											<Button
												className="team-add-item"
												onClick={() =>
													setAttributes({
														icons: [
															...icons,
															{
																id:
																	icons.length +
																	1,
																icons: '',
															},
														],
													})
												}
											>
												<i className="fas fa-plus"></i>
												{__(
													'Add Icon',
													'wiztm-team-member'
												)}
											</Button>
										</PanelBody>
									</div>
								</Fragment>
							),
						},
						{
							name: 'service_service_hover',
							title: 'Style',
							className: 'bwd-tab bwd-style',
							icon: 'editor-code',
							components: (
								<Fragment>
									<PanelBody
										title={__('Title', 'wiztm-team-member')}
										initialOpen={false}
									>
										
										<ColorControl
											label={__(
												'Color',
												'wiztm-team-member'
											)}
											color={titleColor}
											colorName="titleColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'wiztm-team-member'
											)}
											color={titleHoverColor}
											colorName="titleHoverColor"
											onChange={setAttributes}
										/>
										{stylesTitle.includes(style) && (
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={titleBgColor}
												colorName="titleBgColor"
												onChange={setAttributes}
											/>
										)}
										<ResRangleControl
											label={__(
												'Font Size',
												'wiztm-team-member'
											)}
											controlName={TITLE_FONT_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<CardDivider />
										<Alignment
											label={__(
												'Alignment',
												'wiztm-team-member'
											)}
											attribute={nameAlign}
											attributeName="nameAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
										<ResRangleControl
											label={__(
												'Margin Top',
												'wiztm-team-member'
											)}
											controlName={TITLE_MARGIN_TOP}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<ResRangleControl
											label={__(
												'Margin Bottom',
												'wiztm-team-member'
											)}
											controlName={TITLE_MARGIN_BOTTOM}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Description',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Color',
												'wiztm-team-member'
											)}
											color={descriptionColor}
											colorName="descriptionColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'wiztm-team-member'
											)}
											color={designationHoverColor}
											colorName="designationHoverColor"
											onChange={setAttributes}
										/>
										<ResRangleControl
											label={__(
												'Font Size',
												'wiztm-team-member'
											)}
											controlName={DESG_FONT_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<MyTypographyControl
											label={__(
												'Typography',
												'wiztm-team-member'
											)}
											typography={descTypography}
											onChange={(newTypography) => {
												setAttributes({
													descTypography:
														newTypography,
												});
											}}
										/>
										<CardDivider />
										<Alignment
											label={__(
												'Alignment',
												'wiztm-team-member'
											)}
											attribute={designationAlign}
											attributeName="designationAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
									</PanelBody>
									{currentMedia === 'icon' && (
										<PanelBody
											title={__(
												'Icon',
												'wiztm-team-member'
											)}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Color',
													'wiztm-team-member'
												)}
												color={iconColor}
												colorName="iconColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Color',
													'wiztm-team-member'
												)}
												color={iconHoverColor}
												colorName="iconHoverColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'wiztm-team-member'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Icon Size',
													'wiztm-team-member'
												)}
												controlName={ICON_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={100}
											/>
											<ResRangleControl
												label={__(
													'Icon Round Size',
													'wiztm-team-member'
												)}
												controlName={ICON_ROUND_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={100}
											/>
											<ResDimensionControl
												label={__(
													'Border Radius',
													'wiztm-team-member'
												)}
												controlName={iconBorderRadius}
												objAttrs={objAttrs}
												noUnits={false}
												min={0}
												max={1000}
											/>
											<BoxShadowControl
												label={__(
													'Box Shadow',
													'wiztm-team-member'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon:
															newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'wiztm-team-member'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>
									)}
									{currentMedia === 'image' && (
										<PanelBody
											title={__(
												'Image',
												'wiztm-team-member'
											)}
											initialOpen={false}
										>
											<ResRangleControl
												label={__(
													'Image Size',
													'wiztm-team-member'
												)}
												controlName={IMAGE_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={300}
											/>
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'wiztm-team-member'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Image Round Size',
													'wiztm-team-member'
												)}
												controlName={ICON_ROUND_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={300}
											/>
											<ResDimensionControl
												label={__(
													'Border Radius',
													'wiztm-team-member'
												)}
												controlName={iconBorderRadius}
												objAttrs={objAttrs}
												noUnits={false}
												min={0}
												max={1000}
											/>
											<BoxShadowControl
												label={__(
													'Box Shadow',
													'wiztm-team-member'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon:
															newSettings,
													})
												}
											/>
										</PanelBody>
									)}
									{currentMedia === 'svg' && (
										<PanelBody
											title={__(
												'SVG',
												'wiztm-team-member'
											)}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Color',
													'wiztm-team-member'
												)}
												color={svgColor}
												colorName="svgColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Color',
													'wiztm-team-member'
												)}
												color={svgHoverColor}
												colorName="svgHoverColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'wiztm-team-member'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'SVG Size',
													'wiztm-team-member'
												)}
												controlName={SVG_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={200}
											/>
											<ResRangleControl
												label={__(
													'SVG Round Size',
													'wiztm-team-member'
												)}
												controlName={ICON_ROUND_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={300}
											/>
											<ResDimensionControl
												label={__(
													'Border Radius',
													'wiztm-team-member'
												)}
												controlName={iconBorderRadius}
												objAttrs={objAttrs}
												noUnits={false}
												min={0}
												max={1000}
											/>
											<BoxShadowControl
												label={__(
													'Box Shadow',
													'wiztm-team-member'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon:
															newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'wiztm-team-member'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>
									)}
									{currentMedia === 'lottie' && (
										<PanelBody
											title={__(
												'Lottie',
												'wiztm-team-member'
											)}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'wiztm-team-member'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Lottie Round Size',
													'wiztm-team-member'
												)}
												controlName={ICON_ROUND_SIZE}
												objAttrs={objAttrs}
												noUnits={false}
												min={1}
												max={100}
											/>
											<ResDimensionControl
												label={__(
													'Border Radius',
													'wiztm-team-member'
												)}
												controlName={iconBorderRadius}
												objAttrs={objAttrs}
												noUnits={false}
												min={0}
												max={1000}
											/>
											<BoxShadowControl
												label={__(
													'Box Shadow',
													'wiztm-team-member'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon:
															newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'wiztm-team-member'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>
									)}
									{stylesToShowPanelFor.includes(style) && (
										<PanelBody
											title={__(
												'Content Wrapper',
												'wiztm-team-member'
											)}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Background Color',
													'wiztm-team-member'
												)}
												color={contentWrapperBg}
												colorName="contentWrapperBg"
												onChange={setAttributes}
											/>
										</PanelBody>
									)}
									<PanelBody
										title={__(
											'Item Box',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<TabPanelControl
											tabs={[
												{
													name: 'service_service_normal',
													title: 'Normal',
													className:
														'bwd-tab bwd-general',
													components: (
														<>
															<ColorControl
																label={__(
																	'Background Color',
																	'wiztm-team-member'
																)}
																color={
																	itemNormalBg
																}
																colorName="itemNormalBg"
																onChange={
																	setAttributes
																}
															/>
															<p className="bwd-custom-label">
																{__(
																	'Gradient Color',
																	'wiztm-team-member'
																)}
															</p>
															<GradientPicker
																label={__(
																	'Gradient Color',
																	'wiztm-team-member'
																)}
																value={
																	itemGradientBg
																}
																onChange={(
																	currentGradient
																) =>
																	setAttributes(
																		{
																			itemGradientBg:
																				currentGradient,
																		}
																	)
																}
																gradients={[
																	{
																		name: 'JShine',
																		gradient:
																			'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
																		slug: 'jshine',
																	},
																	{
																		name: 'Moonlit Asteroid',
																		gradient:
																			'linear-gradient(to right, #134e5e, #71b280)',
																		slug: 'moonlit-asteroid',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(to right, #673ab7, #512da8)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #04dac4 0%, #dff0a2 100%)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #f97ef9 0%, #8127ce 100%)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #a288a6 0%, #db0963 100%)',
																		slug: 'rastafari',
																	},
																]}
															/>
														</>
													),
												},
												{
													name: 'service_service_hover',
													title: 'Hover',
													className:
														'bwd-tab bwd-style',
													components: (
														<>
															<ColorControl
																label={__(
																	'Background Color',
																	'wiztm-team-member'
																)}
																color={
																	itemBgHoverColor
																}
																colorName="itemBgHoverColor"
																onChange={
																	setAttributes
																}
															/>
															<p className="bwd-custom-label">
																{__(
																	'Gradient Color',
																	'wiztm-team-member'
																)}
															</p>
															<GradientPicker
																label={__(
																	'Gradient Color',
																	'wiztm-team-member'
																)}
																value={
																	itemGradientHoverBg
																}
																onChange={(
																	currentGradient
																) =>
																	setAttributes(
																		{
																			itemGradientHoverBg:
																				currentGradient,
																		}
																	)
																}
																gradients={[
																	{
																		name: 'JShine',
																		gradient:
																			'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
																		slug: 'jshine',
																	},
																	{
																		name: 'Moonlit Asteroid',
																		gradient:
																			'linear-gradient(to right, #134e5e, #71b280)',
																		slug: 'moonlit-asteroid',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(to right, #673ab7, #512da8)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #04dac4 0%, #dff0a2 100%)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #f97ef9 0%, #8127ce 100%)',
																		slug: 'rastafari',
																	},
																	{
																		name: 'Rastafarie',
																		gradient:
																			'linear-gradient(45deg, #a288a6 0%, #db0963 100%)',
																		slug: 'rastafari',
																	},
																]}
															/>
														</>
													),
												},
											]}
										/>
										<CustomBorderControl
											label={__(
												'Border',
												'wiztm-team-member'
											)}
											values={borderSettings}
											onChange={(newSettings) =>
												setAttributes({
													borderSettings: newSettings,
												})
											}
											setAttributes={setAttributes}
										/>
										<BoxShadowControl
											label={__(
												'Box Shadow',
												'wiztm-team-member'
											)}
											values={boxShadow}
											onChange={(value) =>
												setAttributes({
													boxShadow: value,
												})
											}
										/>
										<ResDimensionControl
											label={__(
												'Border Radius',
												'wiztm-team-member'
											)}
											controlName={itemBorderRadius}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
										<ResDimensionControl
											label={__(
												'Padding',
												'wiztm-team-member'
											)}
											controlName={itemPadding}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
								</Fragment>
							),
						},
						{
							name: 'service_service_advanced',
							title: 'Advanced',
							className: 'bwd-tab bwd-style',
							icon: 'admin-generic',
							components: (
								<Fragment>
									<PanelBody
										title={__(
											'Margin',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<ResDimensionControl
											label={__(
												'Margin',
												'wiztm-team-member'
											)}
											controlName={marginControl}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Padding',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<ResDimensionControl
											label={__(
												'Padding',
												'wiztm-team-member'
											)}
											controlName={paddingControl}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Background',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<TabPanelControl
											tabs={[
												{
													name: 'service_service_normal',
													title: 'Solid',
													className:
														'bwd-tab bwd-general',
													components: (
														<BackgroundControl
															attributes={
																attributes
															}
															setAttributes={
																setAttributes
															}
														/>
													),
												},
												{
													name: 'service_service_hover',
													title: 'Gradient',
													className:
														'bwd-tab bwd-style',
													components: (
														<GradientPicker
															value={
																wrapperGradientBg
															}
															onChange={(
																currentGradient
															) =>
																setAttributes({
																	wrapperGradientBg:
																		currentGradient,
																})
															}
															gradients={[
																{
																	name: 'JShine',
																	gradient:
																		'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
																	slug: 'jshine',
																},
																{
																	name: 'Moonlit Asteroid',
																	gradient:
																		'linear-gradient(to right, #134e5e, #71b280)',
																	slug: 'moonlit-asteroid',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(to right, #673ab7, #512da8)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #04dac4 0%, #dff0a2 100%)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #f97ef9 0%, #8127ce 100%)',
																	slug: 'rastafari',
																},
																{
																	name: 'Rastafarie',
																	gradient:
																		'linear-gradient(45deg, #a288a6 0%, #db0963 100%)',
																	slug: 'rastafari',
																},
															]}
														/>
													),
												},
											]}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Border & Shadow',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<CustomBorderControl
											label={__(
												'Border',
												'wiztm-team-member'
											)}
											values={wrapperBorder}
											onChange={(newSettings) =>
												setAttributes({
													wrapperBorder: newSettings,
												})
											}
											setAttributes={setAttributes}
										/>
										<BoxShadowControl
											label={__(
												'Box Shadow',
												'wiztm-team-member'
											)}
											values={boxShadowWrapper}
											onChange={(newSettings) =>
												setAttributes({
													boxShadowWrapper:
														newSettings,
												})
											}
										/>
										<ResDimensionControl
											label={__(
												'Border Radius',
												'wiztm-team-member'
											)}
											controlName={wrapperBorderRadius}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={1000}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Z-Index',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<TextControl
											help={__(
												'Set z-index for the section',
												'wiztm-team-member'
											)}
											value={zIndex}
											onChange={(value) =>
												setAttributes({
													zIndex: value,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Custom Attributes',
											'advanced-blog-post-block'
										)}
										initialOpen={false}
									>
										<TextControl
											label={__(
												'Add Wrapper Id',
												'advanced-blog-post-block'
											)}
											value={id}
											onChange={(value) =>
												setAttributes({
													id: value,
												})
											}
										/>
										<TextControl
											label={__(
												'Add Additional Class',
												'advanced-blog-post-block'
											)}
											help={__(
												'Separate multiple classes with spaces.',
												'advanced-blog-post-block'
											)}
											value={additionalClass}
											onChange={(value) =>
												setAttributes({
													additionalClass: value,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Responsive Control',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Hide On Desktop',
												'wiztm-team-member'
											)}
											className="bwd-toggle-control"
											checked={hideOnDesktop}
											onChange={() =>
												setAttributes({
													hideOnDesktop:
														!hideOnDesktop,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Hide On Tablet',
												'wiztm-team-member'
											)}
											className="bwd-toggle-control"
											checked={hideOnTablet}
											onChange={() =>
												setAttributes({
													hideOnTablet: !hideOnTablet,
												})
											}
										/>
										<ToggleControl
											label={__(
												'Hide On Mobile',
												'wiztm-team-member'
											)}
											className="bwd-toggle-control"
											checked={hideOnMobile}
											onChange={() =>
												setAttributes({
													hideOnMobile: !hideOnMobile,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Custom CSS',
											'wiztm-team-member'
										)}
										initialOpen={false}
									>
										<TextareaControl
											value={customCSS}
											onChange={handleInputChange}
											placeholder={__(
												'.service-title { font-size: 15px; }',
												'wiztm-team-member'
											)}
										/>
									</PanelBody>
								</Fragment>
							),
						},
					]}
				/>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
