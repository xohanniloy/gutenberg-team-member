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
import apiFetch from '@wordpress/api-fetch';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	TextControl,
	Button,
	ToggleControl,
	Dashicon,
	TextareaControl,
	GradientPicker,
	__experimentalElevation as Elevation,
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

const {
	ResRangleControl,
	ColorControl,
	BackgroundControl,
	TabPanelControl,
	IconPicker,
	MyTypographyControl,
	CustomBorderControl,
	BoxShadowControl,
	Alignment,
	ResDimensionControl
} = Controls;
const {
	CUSTOM_CONTAINER_WIDTH,
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
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

import objAttributes from './attributes'

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
		containerWidth,
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
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	const addItem = () => {
		const newItems = [
			...items,
			{
				title: 'Service Title',
				description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.',
				chooseMedia: 'icon',
				icon: 'gear',
				imageUrl: null,
				lottieUrl: 'https://lottie.host/embed/f53a8d50-a3b9-4bc7-a663-d1691d635923/uYxWHxmCR1.json',
				svgContent: '',
				boxLink: '#',
				showLink: false,
				newTab: false
			},
		];
		setAttributes({ items: newItems });
	};

	const updateItemText = (index, field, newText) => {
		const newItems = [...items];
		newItems[index][field] = newText;
		setAttributes({ items: newItems });
		if (field === 'chooseMedia') {
			setAttributes({ currentMedia: newText });
		}
	};
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};
	const removeItem = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setAttributes({ items: newItems });
	};

	const [expandedPanels, setExpandedPanels] = useState({});
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
	const stylesTitle = [
		'style-10',
		'style-13'
	];
	    const { editPost } = useDispatch('core/editor');

		const applyCustomCSS = (css) => {
			const styleElement = document.getElementById(
				'custom-css-block-styles'
			);

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
		const mediaOptions = [
        { value: 'icon', label: 'Icon' },
        { value: 'image', label: 'Image' },
        { value: 'svg', label: 'SVG' },
        { value: 'lottie', label: 'Lottie' }
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
									<PanelBody
										title={__(
											'Layout Style',
											'bwdssb-service-showcase'
										)}
										initialOpen={true}
									>
										<SelectControl
											label={__(
												'Select Layout Style',
												'bwdssb-service-showcase'
											)}
											value={style}
											options={SelectStyle}
											onChange={(size) =>
												setAttributes({ style: size })
											}
										/>
										<SelectControl
											label={__(
												'Container Width',
												'bwdssb-service-showcase'
											)}
											value={containerWidth}
											options={[
												{
													value: 'container',
													label: 'Container',
												},
												{
													value: 'full-width',
													label: 'Full Width',
												},
												{
													value: 'custom-width',
													label: 'Custom',
												},
											]}
											onChange={(value) =>
												setAttributes({
													containerWidth: value,
												})
											}
										/>
										{containerWidth === 'custom-width' ? (
											<ResRangleControl
												label={__(
													'Custom Container Width',
													'bwdssb-service-showcase'
												)}
												controlName={
													CUSTOM_CONTAINER_WIDTH
												}
												objAttrs={objAttrs}
												noUnits={true}
												min={1}
												max={5000}
											/>
										) : (
											''
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Column Settings',
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<ResRangleControl
											label={__(
												'Column Number',
												'bwdssb-service-showcase'
											)}
											controlName={GRID_COLUMNS}
											objAttrs={objAttrs}
											noUnits={true}
											min={1}
											max={5}
										/>
										<ResRangleControl
											label={__(
												'Column Gap',
												'bwdssb-service-showcase'
											)}
											controlName={GRID_GAP}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={100}
										/>
										<ResRangleControl
											label={__(
												'Row Gap',
												'bwdssb-service-showcase'
											)}
											controlName={ROW_GAP}
											objAttrs={objAttrs}
											noUnits={false}
											min={0}
											max={100}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Service Content',
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
										className={`${
											expandedPanels
												? 'parent-panelbody'
												: ''
										}`}
									>
										<Fragment>
											{items &&
												items.map((item, index) => (
													<div
														key={index}
														className="bwdssb-service-showcase-container"
													>
														<PanelBody
															title={__(
																'Service Item',
																'bwdssb-service-showcase'
															)}
															initialOpen={false}
															onToggle={() => {
																setExpandedPanels(
																	{
																		...expandedPanels,
																		[index]:
																			!expandedPanels[
																				index
																			],
																	}
																);
															}}
															className={`${
																expandedPanels
																	? 'child-panelbody'
																	: ''
															}`}
														>
															 <SelectControl
																label={__('Choose Media', 'bwdssb-service-showcase')}
																value={item.chooseMedia}
																options={mediaOptions}
																onChange={(value) => updateItemText(index, 'chooseMedia', value)}
															/>
															 {item.chooseMedia === 'icon' && (
																<IconPicker
																	label={__('Icon', 'bwdssb-service-showcase')}
																	selectedIcon={item.icon} 
																	changeIcon={(newIcon) => updateItemText(index, 'icon', newIcon)}
																/>
															)}
															{item.chooseMedia === 'image' && (
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(
																		newImage
																	) =>
																		updateItem(
																			index,
																			'imageUrl',
																			newImage
																		)
																	}
																	allowedTypes={[
																		'image',
																	]}
																	value={
																		item.imageUrl
																			? item
																					.imageUrl
																					.id
																			: ''
																	}
																	render={({
																		open,
																	}) => (
																		<div className="service-image-control">
																			{item.imageUrl ? (
																				<div className="service-image-preview-container">
																					<Button
																						className="service-image-preview-wrapper"
																						onClick={
																							open
																						}
																					>
																						<img
																							src={
																								item
																									.imageUrl
																									.url
																							}
																							alt={
																								item.text1
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
																							updateItem(
																								index,
																								'imageUrl',
																								null
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
																							'bwdssb-team-member'
																						)}
																					</span>
																				</Button>
																			)}
																		</div>
																	)}
																/>
															</MediaUploadCheck>
															)}
															 {item.chooseMedia === 'svg' && (
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		apiFetch({ url: media.url, parse: false })
																			.then(response => response.text())
																			.then(svg => {
																				updateItem(index, 'svgContent', svg);
																			});
																	}}
																	allowedTypes={['image/svg+xml']}
																	render={({ open }) => (
																		<div className="service-image-control">
																			{item.svgContent ? (
																				<div className="service-image-preview-container">
																					<Button
																						className="service-image-preview-wrapper"
																						onClick={open}
																					>
																						<div
																							className="svg-preview"
																							dangerouslySetInnerHTML={{ __html: item.svgContent }}
																						/>
																						<span className="service-edit-icon">
																							<i className="dashicons dashicons-edit"></i>
																						</span>
																					</Button>
																					<Button
																						className="service-close-icon"
																						onClick={() => updateItem(index, 'svgContent', '')}
																					>
																						<i className="dashicons dashicons-dismiss"></i>
																					</Button>
																				</div>
																			) : (
																				<Button className="service-placeholder-image" onClick={open}>
																					<img src={placeholderImageUrl} alt="Placeholder" />
																					<span>
																						{__('Click to Upload SVG', 'bwdssb-service-showcase')}
																					</span>
																				</Button>
																			)}
																		</div>
																	)}
																/>
															</MediaUploadCheck>
															)}
															{item.chooseMedia === 'lottie' && (
																<TextControl
																	label={__(
																		'Lottie Animation URL',
																		'bwdssb-service-showcase'
																	)}
																	value={item.lottieUrl}
																	onChange={(newValue) => updateItemText(index, 'lottieUrl', newValue)}
																/>
															)}
															<TextControl
																label={__(
																	'Title',
																	'bwdssb-service-showcase'
																)}
																value={
																	item.title
																}
																onChange={(
																	newText
																) =>
																	updateItemText(
																		index,
																		'title',
																		newText
																	)
																}
																placeholder={__(
																	'Write service title',
																	'bwdssb-service-showcase'
																)}
															/>
															<SelectControl
																label={__(
																	'Title Tag',
																	'bwdssb-service-showcase'
																)}
																value={titleTag}
																options={
																	SelectedTag
																}
																onChange={(
																	value
																) =>
																	setAttributes(
																		{
																			titleTag:
																				value,
																		}
																	)
																}
															/>
															<TextareaControl
																label={__(
																	'Description',
																	'bwdssb-service-showcase'
																)}
																value={
																	item.description
																}
																onChange={(
																	newText
																) =>
																	updateItemText(
																		index,
																		'description',
																		newText
																	)
																}
																placeholder={__(
																	'Write service member description',
																	'bwdssb-service-showcase'
																)}
															/>
															<ToggleControl
																label={__(
																	'Enable Box Link',
																	'bwdssb-service-showcase'
																)}
																className="bwd-toggle-control"
																checked={
																	item.showLink
																}
																onChange={(
																	newVal
																) => {
																	updateItemText(
																		index,
																		'showLink',
																		newVal
																	);
																}}
															/>
															{item.showLink && (
															<>
																<TextControl
																	label={__(
																		'Box Link',
																		'bwdssb-service-showcase'
																	)}
																	value={item.boxLink}
																	onChange={(newValue) => updateItemText(index, 'boxLink', newValue)}
																	placeholder={__(
																		'place your link',
																		'bwdssb-service-showcase'
																	)}
																/>
																<ToggleControl
																	label={__(
																		'Open in New Tab',
																		'bwdssb-team-member'
																	)}
																	className="bwd-toggle-control"
																	checked={
																		item.newTab
																	}
																	onChange={(
																		newVal
																	) => {
																		updateItemText(
																			index,
																			'newTab',
																			newVal
																		);
																	}}
																/>
															</>

															)}
														</PanelBody>
														<div className="service-trash-icon">
															<Button
																className="service-remove-item"
																onClick={() =>
																	removeItem(
																		index
																	)
																}
															>
																<Dashicon icon="trash" />
															</Button>
														</div>
													</div>
												))}
											<Button
												className="service-add-item"
												onClick={addItem}
											>
												<Dashicon icon="plus" />
												{__(
													'Add Item',
													'bwdssb-service-showcase'
												)}
												<Elevation
													active={1}
													focus={5}
													hover={7}
													value={5}
												/>
											</Button>
										</Fragment>
									</PanelBody>
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
										title={__('Title', 'bwdssb-service-showcase')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Color',
												'bwdssb-service-showcase'
											)}
											color={titleColor}
											colorName="titleColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'bwdssb-service-showcase'
											)}
											color={titleHoverColor}
											colorName="titleHoverColor"
											onChange={setAttributes}
										/>
										{stylesTitle.includes(style) && (
										<ColorControl
											label={__(
												'Background Color',
												'bwdssb-service-showcase'
											)}
											color={titleBgColor}
											colorName="titleBgColor"
											onChange={setAttributes}
										/>
										)}
										<ResRangleControl
											label={__(
												'Font Size',
												'bwdssb-service-showcase'
											)}
											controlName={TITLE_FONT_SIZE}
											objAttrs={objAttrs}
											noUnits={false}
											min={1}
											max={100}
										/>
										<MyTypographyControl
											label={__(
												'Typography',
												'bwdssb-service-showcase'
											)}
											typography={titleTypography}
											onChange={(value) => {
												setAttributes({
													titleTypography: value,
												});
											}}
											attribute={attributes}
											setAttributes={setAttributes}
										/>
										<CardDivider />
										<Alignment
											label={__(
												'Alignment',
												'bdt-review-blocks'
											)}
											attribute={nameAlign}
											attributeName="nameAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
										<ResRangleControl
											label={__(
												'Margin Top',
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Color',
												'bwdssb-service-showcase'
											)}
											color={descriptionColor}
											colorName="descriptionColor"
											onChange={setAttributes}
										/>
										<ColorControl
											label={__(
												'Hover Color',
												'bwdssb-service-showcase'
											)}
											color={designationHoverColor}
											colorName="designationHoverColor"
											onChange={setAttributes}
										/>
										<ResRangleControl
											label={__(
												'Font Size',
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
												'bdt-review-blocks'
											)}
											attribute={designationAlign}
											attributeName="designationAlign"
											setAttributes={setAttributes}
											options={aligns}
										/>
									</PanelBody>
									{
										currentMedia === 'icon' && (
										<PanelBody
											title={__('Icon', 'bwdssb-service-showcase')}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Color',
													'bwdssb-service-showcase'
												)}
												color={iconColor}
												colorName="iconColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Color',
													'bwdssb-service-showcase'
												)}
												color={iconHoverColor}
												colorName="iconHoverColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Icon Size',
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon: newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'bdt-review-blocks'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>

										)
									}
									{
										currentMedia === 'image' && (
										<PanelBody
											title={__('Image', 'bwdssb-service-showcase')}
											initialOpen={false}
										>
											<ResRangleControl
												label={__(
													'Image Size',
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Image Round Size',
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon: newSettings,
													})
												}
											/>
										</PanelBody>

										)
									}
									{
										currentMedia === 'svg' && (
										<PanelBody
											title={__('SVG', 'bwdssb-service-showcase')}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Color',
													'bwdssb-service-showcase'
												)}
												color={svgColor}
												colorName="svgColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Color',
													'bwdssb-service-showcase'
												)}
												color={svgHoverColor}
												colorName="svgHoverColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'SVG Size',
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon: newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'bdt-review-blocks'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>

										)
									}
									{
										currentMedia === 'lottie' && (
										<PanelBody
											title={__('Lottie', 'bwdssb-service-showcase')}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgNormalColor}
												colorName="iconBgNormalColor"
												onChange={setAttributes}
											/>
											<ColorControl
												label={__(
													'Hover Background Color',
													'bwdssb-service-showcase'
												)}
												color={iconBgHoverColor}
												colorName="iconBgHoverColor"
												onChange={setAttributes}
											/>
											<ResRangleControl
												label={__(
													'Lottie Round Size',
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
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
													'bwdssb-service-showcase'
												)}
												values={boxShadowIcon}
												onChange={(newSettings) =>
													setAttributes({
														boxShadowIcon: newSettings,
													})
												}
											/>
											<Alignment
												label={__(
													'Alignment',
													'bdt-review-blocks'
												)}
												attribute={iconAlign}
												attributeName="iconAlign"
												setAttributes={setAttributes}
												options={aligns}
											/>
										</PanelBody>

										)
									}
									{stylesToShowPanelFor.includes(style) && (
										<PanelBody
											title={__(
												'Content Wrapper',
												'bwdssb-service-showcase'
											)}
											initialOpen={false}
										>
											<ColorControl
												label={__(
													'Background Color',
													'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
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
																	'bwdssb-service-showcase'
																)}
																color={itemNormalBg}
																colorName="itemNormalBg"
																onChange={setAttributes}
															/>
															<p className="bwd-custom-label">{__(
																	'Gradient Color',
																	'bwdssb-service-showcase'
																)}</p>
															<GradientPicker
																label= {__(
																	'Gradient Color',
																	'bwdssb-service-showcase'
																)}
																value={
																	itemGradientBg
																}
																onChange={(
																	currentGradient
																) =>
																	setAttributes({
																		itemGradientBg:
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
																	'bwdssb-service-showcase'
																)}
																color={itemBgHoverColor}
																colorName="itemBgHoverColor"
																onChange={setAttributes}
															/>
															<p className="bwd-custom-label">{__(
																	'Gradient Color',
																	'bwdssb-service-showcase'
																)}</p>
															<GradientPicker
																label= {__(
																	'Gradient Color',
																	'bwdssb-service-showcase'
																)}
																value={
																	itemGradientHoverBg
																}
																onChange={(
																	currentGradient
																) =>
																	setAttributes({
																		itemGradientHoverBg:
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
														
														</>
													),
												},
											]}
										/>
										<CustomBorderControl
											label={__(
												'Border',
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<ResDimensionControl
											label={__(
												'Margin',
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<ResDimensionControl
											label={__(
												'Padding',
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<CustomBorderControl
											label={__(
												'Border',
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<TextControl
											help={__(
												'Set z-index for the section',
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Hide On Desktop',
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
												'bwdssb-service-showcase'
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
											'bwdssb-service-showcase'
										)}
										initialOpen={false}
									>
										<TextareaControl
											value={customCSS}
											onChange={handleInputChange}
											placeholder={__(
												'.service-title { font-size: 15px; }',
												'bwdssb-service-showcase'
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
