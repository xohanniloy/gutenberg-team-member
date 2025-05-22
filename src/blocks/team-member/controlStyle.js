import { useEffect } from '@wordpress/element';
import * as Constants from './constants';
import { softMinifyCssStrings } from '../../helper/softminify';

const {
	CUSTOM_CONTAINER_WIDTH,
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	TITLE_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_SIZE,
	SVG_SIZE,
	ICON_ROUND_SIZE,
	IMAGE_SIZE,
	TITLE_MARGIN_TOP,
	TITLE_MARGIN_BOTTOM,
	ICON_BORDER_RADIUS_TOP,
	ICON_BORDER_RADIUS_RIGHT,
	ICON_BORDER_RADIUS_BOTTOM,
	ICON_BORDER_RADIUS_LEFT,
	ITEM_BORDER_RADIUS_TOP,
	ITEM_BORDER_RADIUS_RIGHT,
	ITEM_BORDER_RADIUS_BOTTOM,
	ITEM_BORDER_RADIUS_LEFT,
	ITEM_PADDING_TOP,
	ITEM_PADDING_RIGHT,
	ITEM_PADDING_BOTTOM,
	ITEM_PADDING_LEFT,
	WRAPPER_PADDING_BOTTOM,
	WRAPPER_PADDING_TOP,
	WRAPPER_PADDING_LEFT,
	WRAPPER_PADDING_RIGHT,
	WRAPPER_MARGIN_TOP,
	WRAPPER_MARGIN_RIGHT,
	WRAPPER_MARGIN_BOTTOM,
	WRAPPER_MARGIN_LEFT,
	WRAPPER_BORDER_RADIUS_TOP,
	WRAPPER_BORDER_RADIUS_RIGHT,
	WRAPPER_BORDER_RADIUS_BOTTOM,
	WRAPPER_BORDER_RADIUS_LEFT,
} = Constants;

function controlStyle({ attributes, setAttributes, clientId }) {
	const {
		
	style,

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
	const stylesToShowPanelFor = [
		'style-1',
		'style-3',
		'style-6',
		'style-7',
		'style-10',
		'style-11',
		'style-13',
		'style-16',
		'style-19',
	];
	const stylesTitle = ['style-10', 'style-13'];

	// Item Border Style
	const borderStyle =
		borderSettings.style !== 'none'
			? `${borderSettings.width}px ${borderSettings.style} ${borderSettings.color}`
			: '';
	const borderBlock =
		borderSettings.style !== 'none'
			? `
			.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item {
				border: ${borderStyle};
			}
			`
			: '';
	// Wrapper Border Style
	const wrapperBorderStyle =
		wrapperBorder.style !== 'none'
			? `${wrapperBorder.width}px ${wrapperBorder.style} ${wrapperBorder.color}`
			: '';
	const wrapperBorderBlock =
		wrapperBorder.style !== 'none'
			? `
			.${uniqueId} .bwdssb-service-item-wrapper {
				border: ${wrapperBorderStyle};
			}
			`
			: '';
	// Icon Box Shadow
	const iconShadowStyles = {
		'box-shadow':
			boxShadowIcon.shadowType !== 'none'
				? `${boxShadowIcon.offsetX}px ${boxShadowIcon.offsetY}px ${
						boxShadowIcon.blurRadius || 10
				  }px ${boxShadowIcon.spreadRadius || 0}px ${
						boxShadowIcon.color
				  } ${boxShadowIcon.shadowType}`
				: '',
	};
	// Icon Box Shadow
	const iconBoxShadow =
		boxShadowIcon.shadowType !== 'none'
			? `
			.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media {
				box-shadow: ${iconShadowStyles['box-shadow']};
			}
			`
			: '';
	// Item Box Shadow
	const shadowStyles = {
		'box-shadow':
			boxShadow.shadowType !== 'none'
				? `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${
						boxShadow.blurRadius || 10
				  }px ${boxShadow.spreadRadius || 0}px ${boxShadow.color} ${
						boxShadow.shadowType
				  }`
				: '',
	};
	const cssBlock =
		boxShadow.shadowType !== 'none'
			? `
			.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item {
				box-shadow: ${shadowStyles['box-shadow']};
			}
			`
			: '';
	// Wrapper Box Shadow
	const wrapperShadowStyles = {
		'box-shadow':
			boxShadowWrapper.shadowType !== 'none'
				? `${boxShadowWrapper.offsetX}px ${
						boxShadowWrapper.offsetY
				  }px ${boxShadowWrapper.blurRadius || 10}px ${
						boxShadowWrapper.spreadRadius || 0
				  }px ${boxShadowWrapper.color} ${boxShadowWrapper.shadowType}`
				: '',
	};
	const wrapperShadow =
		boxShadowWrapper.shadowType !== 'none'
			? `
			.${uniqueId} .bwdssb-service-item-wrapper {
				box-shadow: ${wrapperShadowStyles['box-shadow']};
			}
			`
			: '';

	// Title Typography
	const titleTypographyStyles = {
		'font-family': titleTypography.fontFamily,
		'font-weight': titleTypography.fontWeight,
		'font-style': titleTypography.fontStyle,
		'text-transform': titleTypography.textTransform,
		'line-height': titleTypography.lineHeight,
		'letter-spacing': titleTypography.letterSpacing,
		'word-spacing': titleTypography.wordSpacing,
	};
	const addPxIfNeeded = (value) => {
		if (typeof value === 'number') {
			return `${value}px`;
		}
		return value;
	};
	titleTypographyStyles['letter-spacing'] = addPxIfNeeded(
		titleTypographyStyles['letter-spacing']
	);
	titleTypographyStyles['word-spacing'] = addPxIfNeeded(
		titleTypographyStyles['word-spacing']
	);

	const mergedTypographyStyles = {
		...titleTypographyStyles,
	};
	const cssStyles = Object.keys(mergedTypographyStyles)
		.filter(
			(property) =>
				mergedTypographyStyles[property] !== undefined &&
				mergedTypographyStyles[property] !== ''
		)
		.map((property) => `${property}: ${mergedTypographyStyles[property]};`)
		.join(' ');
	const nameBlock =
		titleTypography.fontFamily ||
		titleTypography.fontWeight ||
		titleTypography.fontStyle ||
		titleTypography.textTransform ||
		titleTypography.lineHeight ||
		titleTypography.letterSpacing ||
		titleTypography.wordSpacing
			? `
		.${uniqueId} .wiztm-team-name {
			${cssStyles}
		}
  			`
			: '';

	// Designation Typography
	const descTypographyStyles = {
		'font-family': descTypography.fontFamily,
		'font-weight': descTypography.fontWeight,
		'font-style': descTypography.fontStyle,
		'text-transform': descTypography.textTransform,
		'letter-spacing': descTypography.letterSpacing,
		'word-spacing': descTypography.wordSpacing,
		'line-height': descTypography.lineHeight,
	};
	const addDesPxIfNeeded = (value) => {
		if (typeof value === 'number') {
			return `${value}px`;
		}
		return value;
	};

	descTypographyStyles['letter-spacing'] = addDesPxIfNeeded(
		descTypographyStyles['letter-spacing']
	);
	descTypographyStyles['word-spacing'] = addDesPxIfNeeded(
		descTypographyStyles['word-spacing']
	);
	const mergedDescTypographyStyles = {
		...descTypographyStyles,
	};
	const descStyles = Object.keys(mergedDescTypographyStyles)
		.filter(
			(property) =>
				mergedDescTypographyStyles[property] !== undefined &&
				mergedDescTypographyStyles[property] !== ''
		)
		.map(
			(property) =>
				`${property}: ${mergedDescTypographyStyles[property]};`
		)
		.join(' ');
	const desgBlock =
		descTypography.fontFamily ||
		descTypography.fontWeight ||
		descTypography.fontStyle ||
		descTypography.textTransform ||
		descTypography.lineHeight ||
		descTypography.letterSpacing ||
		descTypography.wordSpacing
			? `
		.${uniqueId} .bwdssb-service-item .bwdssb-content-wrap .bwdssb-service-designation {
			${descStyles}
		}
  			`
			: '';

	const updateItemText = (index, field, newText) => {
		const newItems = [...items];
		newItems[index][field] = newText;
		setAttributes({ items: newItems });
	};
	const imageStyle = {
		backgroundImage: imageUrl ? `url(${imageUrl})` : '',
	};

	// unique id
	useEffect(() => {
		setAttributes({
			uniqueId: `wiztm-team-blocks-${clientId.slice(0, 8)}`,
		});
	}, [clientId]);

	// function to convert object to css
	const convertToCss = (obj) => {
		let cssResult;
		Object.keys(obj).reduce((cssString, key) => {
			// change key to css property
			const cssProperty = key.replace(
				/[A-Z]/g,
				(match) => `-${match.toLowerCase()}`
			);
			cssResult = `${cssString}${cssProperty}:${obj[key]};`;
			return cssResult;
		}, '');
		return cssResult;
	};

	// Custom Container Width
	const deskContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}DeskRange`];
	const tabContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}TabRange`];
	const mobContainerWidth = attributes[`${CUSTOM_CONTAINER_WIDTH}MobRange`];
	const containerWidthUnit = attributes[`${CUSTOM_CONTAINER_WIDTH}Unit`];

	// Column Number
	const deskCols = attributes[`${GRID_COLUMNS}DeskRange`];
	const tabCols = attributes[`${GRID_COLUMNS}TabRange`];
	const mobCols = attributes[`${GRID_COLUMNS}MobRange`];
	// Grid Coloumn Gap
	const deskGap = attributes[`${GRID_GAP}DeskRange`];
	const tabGap = attributes[`${GRID_GAP}TabRange`];
	const mobGap = attributes[`${GRID_GAP}MobRange`];
	const gapUnit = attributes[`${GRID_GAP}Unit`];
	// Grid Row Gap
	const deskRowGap = attributes[`${ROW_GAP}DeskRange`];
	const tabRowGap = attributes[`${ROW_GAP}TabRange`];
	const mobRowGap = attributes[`${ROW_GAP}MobRange`];
	const gapRowUnit = attributes[`${ROW_GAP}Unit`];
	// Title Font Size
	const deskTitleFont = attributes[`${TITLE_FONT_SIZE}DeskRange`];
	const tabTitleFont = attributes[`${TITLE_FONT_SIZE}TabRange`];
	const mobTitleFont = attributes[`${TITLE_FONT_SIZE}MobRange`];
	const titleFontUnit = attributes[`${TITLE_FONT_SIZE}Unit`];
	// Title Margin Top
	const deskTitleMarginTop = attributes[`${TITLE_MARGIN_TOP}DeskRange`];
	const tabTitleMarginTop = attributes[`${TITLE_MARGIN_TOP}TabRange`];
	const mobTitleMarginTop = attributes[`${TITLE_MARGIN_TOP}MobRange`];
	const titleMarginTopUnit = attributes[`${TITLE_MARGIN_TOP}Unit`];
	// Name Margin Bottom
	const deskTitleMarginBottom = attributes[`${TITLE_MARGIN_BOTTOM}DeskRange`];
	const tabTitleMarginBottom = attributes[`${TITLE_MARGIN_BOTTOM}TabRange`];
	const mobTitleMarginBottom = attributes[`${TITLE_MARGIN_BOTTOM}MobRange`];
	const titleMarginBottomUnit = attributes[`${TITLE_MARGIN_BOTTOM}Unit`];
	// DESG Font Size
	const deskDesgFont = attributes[`${DESG_FONT_SIZE}DeskRange`];
	const tabDesgFont = attributes[`${DESG_FONT_SIZE}TabRange`];
	const mobDesgFont = attributes[`${DESG_FONT_SIZE}MobRange`];
	const desgFontUnit = attributes[`${DESG_FONT_SIZE}Unit`];
	// Icon Size
	const deskIconSize = attributes[`${ICON_SIZE}DeskRange`];
	const tabIconSize = attributes[`${ICON_SIZE}TabRange`];
	const mobIconSize = attributes[`${ICON_SIZE}MobRange`];
	const iconSizeUnit = attributes[`${ICON_SIZE}Unit`];
	// Svg Size
	const deskSvgSize = attributes[`${SVG_SIZE}DeskRange`];
	const tabSvgSize = attributes[`${SVG_SIZE}TabRange`];
	const mobSvgSize = attributes[`${SVG_SIZE}MobRange`];
	const svgSizeUnit = attributes[`${SVG_SIZE}Unit`];
	// Icon Round Size
	const deskIconRoundSize = attributes[`${ICON_ROUND_SIZE}DeskRange`];
	const tabIconRoundSize = attributes[`${ICON_ROUND_SIZE}TabRange`];
	const mobIconRoundSize = attributes[`${ICON_ROUND_SIZE}MobRange`];
	const iconRoundSizeUnit = attributes[`${ICON_ROUND_SIZE}Unit`];
	// Icon Border Radius Top
	const deskIconBorderRadiusTop =
		attributes[`${ICON_BORDER_RADIUS_TOP}DeskRange`];
	const tabIconBorderRadiusTop =
		attributes[`${ICON_BORDER_RADIUS_TOP}TabRange`];
	const mobIconBorderRadiusTop =
		attributes[`${ICON_BORDER_RADIUS_TOP}MobRange`];
	const iconBorderRadiusTopUnit = attributes[`${ICON_BORDER_RADIUS_TOP}Unit`];
	// Icon Border Radius Right
	const deskIconBorderRadiusRight =
		attributes[`${ICON_BORDER_RADIUS_RIGHT}DeskRange`];
	const tabIconBorderRadiusRight =
		attributes[`${ICON_BORDER_RADIUS_RIGHT}TabRange`];
	const mobIconBorderRadiusRight =
		attributes[`${ICON_BORDER_RADIUS_RIGHT}MobRange`];
	const iconBorderRadiusRightUnit =
		attributes[`${ICON_BORDER_RADIUS_RIGHT}Unit`];
	// Icon Border Radius Bottom
	const deskIconBorderRadiusBottom =
		attributes[`${ICON_BORDER_RADIUS_BOTTOM}DeskRange`];
	const tabIconBorderRadiusBottom =
		attributes[`${ICON_BORDER_RADIUS_BOTTOM}TabRange`];
	const mobIconBorderRadiusBottom =
		attributes[`${ICON_BORDER_RADIUS_BOTTOM}MobRange`];
	const iconBorderRadiusBottomUnit =
		attributes[`${ICON_BORDER_RADIUS_BOTTOM}Unit`];
	// Icon Border Radius Left
	const deskIconBorderRadiusLeft =
		attributes[`${ICON_BORDER_RADIUS_LEFT}DeskRange`];
	const tabIconBorderRadiusLeft =
		attributes[`${ICON_BORDER_RADIUS_LEFT}TabRange`];
	const mobIconBorderRadiusLeft =
		attributes[`${ICON_BORDER_RADIUS_LEFT}MobRange`];
	const iconBorderRadiusLeftUnit =
		attributes[`${ICON_BORDER_RADIUS_LEFT}Unit`];
	// Image Size
	const deskImageSize = attributes[`${IMAGE_SIZE}DeskRange`];
	const tabImageSize = attributes[`${IMAGE_SIZE}TabRange`];
	const mobImageSize = attributes[`${IMAGE_SIZE}MobRange`];
	const imageSizeUnit = attributes[`${IMAGE_SIZE}Unit`];
	// Item Padding Top
	const deskPaddingTop = attributes[`${ITEM_PADDING_TOP}DeskRange`];
	const tabPaddingTop = attributes[`${ITEM_PADDING_TOP}TabRange`];
	const mobPaddingTop = attributes[`${ITEM_PADDING_TOP}MobRange`];
	const paddingTopUnit = attributes[`${ITEM_PADDING_TOP}Unit`];
	// Item Padding Bottom
	const deskPaddingBottom = attributes[`${ITEM_PADDING_BOTTOM}DeskRange`];
	const tabPaddingBottom = attributes[`${ITEM_PADDING_BOTTOM}TabRange`];
	const mobPaddingBottom = attributes[`${ITEM_PADDING_BOTTOM}MobRange`];
	const paddingBottomUnit = attributes[`${ITEM_PADDING_BOTTOM}Unit`];
	// Item Padding Left
	const deskPaddingLeft = attributes[`${ITEM_PADDING_LEFT}DeskRange`];
	const tabPaddingLeft = attributes[`${ITEM_PADDING_LEFT}TabRange`];
	const mobPaddingLeft = attributes[`${ITEM_PADDING_LEFT}MobRange`];
	const paddingLeftUnit = attributes[`${ITEM_PADDING_LEFT}Unit`];
	// Item Padding Right
	const deskPaddingRight = attributes[`${ITEM_PADDING_RIGHT}DeskRange`];
	const tabPaddingRight = attributes[`${ITEM_PADDING_RIGHT}TabRange`];
	const mobPaddingRight = attributes[`${ITEM_PADDING_RIGHT}MobRange`];
	const paddingRightUnit = attributes[`${ITEM_PADDING_RIGHT}Unit`];
	// Item Border Radius Top
	const deskItemBorderRadiusTop =
		attributes[`${ITEM_BORDER_RADIUS_TOP}DeskRange`];
	const tabItemBorderRadiusTop =
		attributes[`${ITEM_BORDER_RADIUS_TOP}TabRange`];
	const mobItemBorderRadiusTop =
		attributes[`${ITEM_BORDER_RADIUS_TOP}MobRange`];
	const itemBorderRadiusTopUnit = attributes[`${ITEM_BORDER_RADIUS_TOP}Unit`];
	// Item Border Radius Bottom
	const deskItemBorderRadiusBottom =
		attributes[`${ITEM_BORDER_RADIUS_BOTTOM}DeskRange`];
	const tabItemBorderRadiusBottom =
		attributes[`${ITEM_BORDER_RADIUS_BOTTOM}TabRange`];
	const mobItemBorderRadiusBottom =
		attributes[`${ITEM_BORDER_RADIUS_BOTTOM}MobRange`];
	const itemBorderRadiusBottomUnit =
		attributes[`${ITEM_BORDER_RADIUS_BOTTOM}Unit`];
	// Item Border Radius Left
	const deskItemBorderRadiusLeft =
		attributes[`${ITEM_BORDER_RADIUS_LEFT}DeskRange`];
	const tabItemBorderRadiusLeft =
		attributes[`${ITEM_BORDER_RADIUS_LEFT}TabRange`];
	const mobItemBorderRadiusLeft =
		attributes[`${ITEM_BORDER_RADIUS_LEFT}MobRange`];
	const itemBorderRadiusLeftUnit =
		attributes[`${ITEM_BORDER_RADIUS_LEFT}Unit`];
	// Item Border Radius Right
	const deskItemBorderRadiusRight =
		attributes[`${ITEM_BORDER_RADIUS_RIGHT}DeskRange`];
	const tabItemBorderRadiusRight =
		attributes[`${ITEM_BORDER_RADIUS_RIGHT}TabRange`];
	const mobItemBorderRadiusRight =
		attributes[`${ITEM_BORDER_RADIUS_RIGHT}MobRange`];
	const itemBorderRadiusRightUnit =
		attributes[`${ITEM_BORDER_RADIUS_RIGHT}Unit`];
	// Wrapper Padding Top
	const deskWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}DeskRange`];
	const tabWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}TabRange`];
	const mobWrapperPaddingTop = attributes[`${WRAPPER_PADDING_TOP}MobRange`];
	const wrapperPaddingTopUnit = attributes[`${WRAPPER_PADDING_TOP}Unit`];
	// Wrapper Padding Bottom
	const deskWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}DeskRange`];
	const tabWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}TabRange`];
	const mobWrapperPaddingBottom =
		attributes[`${WRAPPER_PADDING_BOTTOM}MobRange`];
	const wrapperPaddingBottomUnit =
		attributes[`${WRAPPER_PADDING_BOTTOM}Unit`];
	// Wrapper Padding Left
	const deskWrapperPaddingLeft =
		attributes[`${WRAPPER_PADDING_LEFT}DeskRange`];
	const tabWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}TabRange`];
	const mobWrapperPaddingLeft = attributes[`${WRAPPER_PADDING_LEFT}MobRange`];
	const wrapperPaddingLeftUnit = attributes[`${WRAPPER_PADDING_LEFT}Unit`];
	// Wrapper Padding Right
	const deskWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}DeskRange`];
	const tabWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}TabRange`];
	const mobWrapperPaddingRight =
		attributes[`${WRAPPER_PADDING_RIGHT}MobRange`];
	const wrapperPaddingRightUnit = attributes[`${WRAPPER_PADDING_RIGHT}Unit`];
	// Wrapper Border Radius Top
	const deskWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}DeskRange`];
	const tabWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}TabRange`];
	const mobWrapperBorderRadiusTop =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}MobRange`];
	const wrapperBorderRadiusTopUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_TOP}Unit`];
	// Wrapper Border Radius Right
	const deskWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}DeskRange`];
	const tabWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}TabRange`];
	const mobWrapperBorderRadiusRight =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}MobRange`];
	const wrapperBorderRadiusRightUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_RIGHT}Unit`];
	// Wrapper Border Radius Bottom
	const deskWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}DeskRange`];
	const tabWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}TabRange`];
	const mobWrapperBorderRadiusBottom =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}MobRange`];
	const wrapperBorderRadiusBottomUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_BOTTOM}Unit`];
	// Wrapper Border Radius Left
	const deskWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}DeskRange`];
	const tabWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}TabRange`];
	const mobWrapperBorderRadiusLeft =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}MobRange`];
	const wrapperBorderRadiusLeftUnit =
		attributes[`${WRAPPER_BORDER_RADIUS_LEFT}Unit`];
	// Wrapper Margin Top
	const deskWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}DeskRange`];
	const tabWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}TabRange`];
	const mobWrapperMarginTop = attributes[`${WRAPPER_MARGIN_TOP}MobRange`];
	const wrapperMarginTopUnit = attributes[`${WRAPPER_MARGIN_TOP}Unit`];
	// Wrapper Margin Right
	const deskWrapperMarginRight =
		attributes[`${WRAPPER_MARGIN_RIGHT}DeskRange`];
	const tabWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}TabRange`];
	const mobWrapperMarginRight = attributes[`${WRAPPER_MARGIN_RIGHT}MobRange`];
	const wrapperMarginRightUnit = attributes[`${WRAPPER_MARGIN_RIGHT}Unit`];
	// Wrapper Margin Bottom
	const deskWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}DeskRange`];
	const tabWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}TabRange`];
	const mobWrapperMarginBottom =
		attributes[`${WRAPPER_MARGIN_BOTTOM}MobRange`];
	const wrapperMarginBottomUnit = attributes[`${WRAPPER_MARGIN_BOTTOM}Unit`];
	// Wrapper Margin Left
	const deskWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}DeskRange`];
	const tabWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}TabRange`];
	const mobWrapperMarginLeft = attributes[`${WRAPPER_MARGIN_LEFT}MobRange`];
	const wrapperMarginLeftUnit = attributes[`${WRAPPER_MARGIN_LEFT}Unit`];

	// Item Styles
	const itemDeskStyles = {
		...(deskPaddingTop !== undefined &&
			deskPaddingTop !== '' && {
				paddingTop: `${deskPaddingTop}${paddingTopUnit}`,
			}),
		...(deskPaddingBottom !== undefined &&
			deskPaddingBottom !== '' && {
				paddingBottom: `${deskPaddingBottom}${paddingBottomUnit}`,
			}),
		...(deskPaddingLeft !== undefined &&
			deskPaddingLeft !== '' && {
				paddingLeft: `${deskPaddingLeft}${paddingLeftUnit}`,
			}),
		...(deskPaddingRight !== undefined &&
			deskPaddingRight !== '' && {
				paddingRight: `${deskPaddingRight}${paddingRightUnit}`,
			}),
		...(deskItemBorderRadiusTop !== undefined &&
			deskItemBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${deskItemBorderRadiusTop}${itemBorderRadiusTopUnit}`,
			}),
		...(deskItemBorderRadiusRight !== undefined &&
			deskItemBorderRadiusRight !== '' && {
				borderTopRightRadius: `${deskItemBorderRadiusRight}${itemBorderRadiusRightUnit}`,
			}),
		...(deskItemBorderRadiusBottom !== undefined &&
			deskItemBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${deskItemBorderRadiusBottom}${itemBorderRadiusBottomUnit}`,
			}),
		...(deskItemBorderRadiusLeft !== undefined &&
			deskItemBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${deskItemBorderRadiusLeft}${itemBorderRadiusLeftUnit}`,
			}),
	};
	const itemTabStyles = {
		...(tabPaddingTop !== undefined &&
			tabPaddingTop !== '' && {
				paddingTop: `${tabPaddingTop}${paddingTopUnit}`,
			}),
		...(tabPaddingBottom !== undefined &&
			tabPaddingBottom !== '' && {
				paddingBottom: `${tabPaddingBottom}${paddingBottomUnit}`,
			}),
		...(tabPaddingLeft !== undefined &&
			tabPaddingLeft !== '' && {
				paddingLeft: `${tabPaddingLeft}${paddingLeftUnit}`,
			}),
		...(tabPaddingRight !== undefined &&
			tabPaddingRight !== '' && {
				paddingRight: `${tabPaddingRight}${paddingRightUnit}`,
			}),
		...(tabItemBorderRadiusTop !== undefined &&
			tabItemBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${tabItemBorderRadiusTop}${itemBorderRadiusTopUnit}`,
			}),
		...(tabItemBorderRadiusRight !== undefined &&
			tabItemBorderRadiusRight !== '' && {
				borderTopRightRadius: `${tabItemBorderRadiusRight}${itemBorderRadiusRightUnit}`,
			}),
		...(tabItemBorderRadiusBottom !== undefined &&
			tabItemBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${tabItemBorderRadiusBottom}${itemBorderRadiusBottomUnit}`,
			}),
		...(tabItemBorderRadiusLeft !== undefined &&
			tabItemBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${tabItemBorderRadiusLeft}${itemBorderRadiusLeftUnit}`,
			}),
	};
	const itemMobStyles = {
		...(mobPaddingTop !== undefined &&
			mobPaddingTop !== '' && {
				paddingTop: `${mobPaddingTop}${paddingTopUnit}`,
			}),
		...(mobPaddingBottom !== undefined &&
			mobPaddingBottom !== '' && {
				paddingBottom: `${mobPaddingBottom}${paddingBottomUnit}`,
			}),
		...(mobPaddingLeft !== undefined &&
			mobPaddingLeft !== '' && {
				paddingLeft: `${mobPaddingLeft}${paddingLeftUnit}`,
			}),
		...(mobPaddingRight !== undefined &&
			mobPaddingRight !== '' && {
				paddingRight: `${mobPaddingRight}${paddingRightUnit}`,
			}),
		...(mobItemBorderRadiusTop !== undefined &&
			mobItemBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${mobItemBorderRadiusTop}${itemBorderRadiusTopUnit}`,
			}),
		...(mobItemBorderRadiusRight !== undefined &&
			mobItemBorderRadiusRight !== '' && {
				borderTopRightRadius: `${mobItemBorderRadiusRight}${itemBorderRadiusRightUnit}`,
			}),
		...(mobItemBorderRadiusBottom !== undefined &&
			mobItemBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${mobItemBorderRadiusBottom}${itemBorderRadiusBottomUnit}`,
			}),
		...(mobItemBorderRadiusLeft !== undefined &&
			mobItemBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${mobItemBorderRadiusLeft}${itemBorderRadiusLeftUnit}`,
			}),
	};
	// Wrapper Style
	const wrapperDeskStyles = {
		...(deskWrapperPaddingTop !== undefined &&
			deskWrapperPaddingTop !== '' && {
				paddingTop: `${deskWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(deskWrapperPaddingBottom !== undefined &&
			deskWrapperPaddingBottom !== '' && {
				paddingBottom: `${deskWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(deskWrapperPaddingLeft !== undefined &&
			deskWrapperPaddingLeft !== '' && {
				paddingLeft: `${deskWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(deskWrapperPaddingRight !== undefined &&
			deskWrapperPaddingRight !== '' && {
				paddingRight: `${deskWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(deskWrapperMarginTop !== undefined &&
			deskWrapperMarginTop !== '' && {
				marginTop: `${deskWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
		...(deskWrapperMarginRight !== undefined &&
			deskWrapperMarginRight !== '' && {
				marginRight: `${deskWrapperMarginRight}${wrapperMarginRightUnit}`,
			}),
		...(deskWrapperMarginBottom !== undefined &&
			deskWrapperMarginBottom !== '' && {
				marginBottom: `${deskWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(deskWrapperMarginLeft !== undefined &&
			deskWrapperMarginLeft !== '' && {
				marginLeft: `${deskWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(deskWrapperBorderRadiusTop !== undefined &&
			deskWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${deskWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(deskWrapperBorderRadiusRight !== undefined &&
			deskWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${deskWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(deskWrapperBorderRadiusBottom !== undefined &&
			deskWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${deskWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(deskWrapperBorderRadiusLeft !== undefined &&
			deskWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${deskWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
		...(wrapperBgColor !== undefined &&
			wrapperBgColor !== '' && {
				background: `${wrapperBgColor}`,
			}),
		...(wrapperGradientBg !== undefined &&
			wrapperGradientBg !== '' && {
				background: `${wrapperGradientBg}`,
			}),
		...(bgPosition !== undefined &&
			bgPosition !== '' && {
				backgroundPosition: `${bgPosition}`,
			}),
		...(bgAttachment !== undefined &&
			bgAttachment !== '' && {
				backgroundAttachment: `${bgAttachment}`,
			}),
		...(bgRepeat !== undefined &&
			bgRepeat !== '' && {
				backgroundRepeat: `${bgRepeat}`,
			}),
		...(bgSize !== undefined &&
			bgSize !== '' && {
				backgroundSize: `${bgSize}`,
			}),
		...(zIndex !== undefined &&
			zIndex !== '' && {
				zIndex: `${zIndex}`,
			}),
	};
	const wrapperTabStyles = {
		...(tabWrapperPaddingTop !== undefined &&
			tabWrapperPaddingTop !== '' && {
				paddingTop: `${tabWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(tabWrapperPaddingBottom !== undefined &&
			tabWrapperPaddingBottom !== '' && {
				paddingBottom: `${tabWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(tabWrapperPaddingLeft !== undefined &&
			tabWrapperPaddingLeft !== '' && {
				paddingLeft: `${tabWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(tabWrapperPaddingRight !== undefined &&
			tabWrapperPaddingRight !== '' && {
				paddingRight: `${tabWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(tabWrapperMarginTop !== undefined &&
			tabWrapperMarginTop !== '' && {
				marginTop: `${tabWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
		...(tabWrapperMarginBottom !== undefined &&
			tabWrapperMarginBottom !== '' && {
				marginBottom: `${tabWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(tabWrapperMarginLeft !== undefined &&
			tabWrapperMarginLeft !== '' && {
				marginLeft: `${tabWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(tabWrapperMarginRight !== undefined &&
			tabWrapperMarginRight !== '' && {
				marginRight: `${tabWrapperMarginRight}${wrapperMarginRightUnit}`,
			}),
		...(tabWrapperBorderRadiusTop !== undefined &&
			tabWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${tabWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(tabWrapperBorderRadiusRight !== undefined &&
			tabWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${tabWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(tabWrapperBorderRadiusBottom !== undefined &&
			tabWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${tabWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(tabWrapperBorderRadiusLeft !== undefined &&
			tabWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${tabWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
	};
	const wrapperMobStyles = {
		...(mobWrapperPaddingTop !== undefined &&
			mobWrapperPaddingTop !== '' && {
				paddingTop: `${mobWrapperPaddingTop}${wrapperPaddingTopUnit}`,
			}),
		...(mobWrapperPaddingBottom !== undefined &&
			mobWrapperPaddingBottom !== '' && {
				paddingBottom: `${mobWrapperPaddingBottom}${wrapperPaddingBottomUnit}`,
			}),
		...(mobWrapperPaddingLeft !== undefined &&
			mobWrapperPaddingLeft !== '' && {
				paddingLeft: `${mobWrapperPaddingLeft}${wrapperPaddingLeftUnit}`,
			}),
		...(mobWrapperPaddingRight !== undefined &&
			mobWrapperPaddingRight !== '' && {
				paddingRight: `${mobWrapperPaddingRight}${wrapperPaddingRightUnit}`,
			}),
		...(mobWrapperMarginTop !== undefined &&
			mobWrapperMarginTop !== '' && {
				marginTop: `${mobWrapperMarginTop}${wrapperMarginTopUnit}`,
			}),
		...(mobWrapperMarginBottom !== undefined &&
			mobWrapperMarginBottom !== '' && {
				marginBottom: `${mobWrapperMarginBottom}${wrapperMarginBottomUnit}`,
			}),
		...(mobWrapperMarginLeft !== undefined &&
			mobWrapperMarginLeft !== '' && {
				marginLeft: `${mobWrapperMarginLeft}${wrapperMarginLeftUnit}`,
			}),
		...(mobWrapperMarginRight !== undefined &&
			mobWrapperMarginRight !== '' && {
				marginRight: `${mobWrapperMarginRight}${wrapperMarginRightUnit}`,
			}),
		...(mobWrapperBorderRadiusTop !== undefined &&
			mobWrapperBorderRadiusTop !== '' && {
				borderTopLeftRadius: `${mobWrapperBorderRadiusTop}${wrapperBorderRadiusTopUnit}`,
			}),
		...(mobWrapperBorderRadiusRight !== undefined &&
			mobWrapperBorderRadiusRight !== '' && {
				borderTopRightRadius: `${mobWrapperBorderRadiusRight}${wrapperBorderRadiusRightUnit}`,
			}),
		...(mobWrapperBorderRadiusBottom !== undefined &&
			mobWrapperBorderRadiusBottom !== '' && {
				borderBottomRightRadius: `${mobWrapperBorderRadiusBottom}${wrapperBorderRadiusBottomUnit}`,
			}),
		...(mobWrapperBorderRadiusLeft !== undefined &&
			mobWrapperBorderRadiusLeft !== '' && {
				borderBottomLeftRadius: `${mobWrapperBorderRadiusLeft}${wrapperBorderRadiusLeftUnit}`,
			}),
	};
	const responsiveDesktopCSS = `
            .${uniqueId}.wp-block.wp-block-wiztm-team-member {
                opacity: ${hideOnDesktop ? '0.4' : '1'};
                display: ${hideOnDesktop ? 'block' : 'inherit'};
            }
            .${uniqueId}.wp-block-wiztm-team-member {
                display: ${hideOnDesktop ? 'none' : 'inherit'};
            }
        `;
	const responsiveTabCSS = `
            .${uniqueId}.wp-block.wp-block-wiztm-team-member {
                opacity: ${hideOnTablet ? '0.4' : '1'};
                display: ${hideOnTablet ? 'block' : 'inherit'};
            }
            .${uniqueId}.wp-block-wiztm-team-member {
                display: ${hideOnTablet ? 'none' : 'inherit'};
            }
        `;
	const responsiveMobileCSS = `
            .${uniqueId}.wp-block.wp-block-wiztm-team-member {
                opacity: ${hideOnMobile ? '0.4' : '1'};
                display: ${hideOnMobile ? 'block' : 'inherit'};
            }
            .${uniqueId}.wp-block-wiztm-team-member {
                display: ${hideOnMobile ? 'none' : 'inherit'};
            }
        `;
	const deskStyles = `

	
		${
			Object.keys(itemDeskStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item { ${convertToCss(
						itemDeskStyles
				  )}}`
				: ' '
		}
		${
			Object.keys(wrapperDeskStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper { ${convertToCss(
						wrapperDeskStyles
				  )}}`
				: ' '
		}
		${
			itemBgHoverColor !== undefined && itemBgHoverColor !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item:hover {
				background: ${itemBgHoverColor};
			}`
				: ' '
		}
		${
			itemBgOverlayColor !== undefined && itemBgOverlayColor !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item.bwdssb-overlay::before,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item.bwdssb-overlay::after,
					.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-content-wrap.bwdssb-overlay::before,
					.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-content-wrap.bwdssb-overlay::after {
				background: ${itemBgOverlayColor};
			}`
				: ' '
		}
		${
			deskTitleFont !== undefined && deskTitleFont !== ''
				? `.${uniqueId} .wiztm-team-name {
					font-size: ${deskTitleFont}${titleFontUnit};
				}`
				: ' '
		}		
		 ${nameBlock}
	
		
		
		${
			titleColor !== undefined && titleColor !== ''
				? `.${uniqueId} .wiztm-team-name {
				color: ${titleColor};
			}`
				: ' '
		}
		${
			stylesTitle.includes(style)
				? `.${uniqueId} .wiztm-team-name {
				background: ${titleBgColor};
			}`
				: ' '
		}
		${responsiveDesktopCSS}
		${
			titleHoverColor !== undefined && titleHoverColor !== ''
				? `.${uniqueId} .wiztm-team-name:hover {
				color: ${titleHoverColor};
			}`
				: ' '
		}
		${
			nameAlign !== undefined && nameAlign !== ''
				? `.${uniqueId} .wiztm-team-name {
				text-align: ${nameAlign};
			}`
				: ' '
		}
		${
			deskTitleMarginTop !== undefined && deskTitleMarginTop !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-top: ${deskTitleMarginTop}${titleMarginTopUnit};
			}`
				: ' '
		}
		${
			deskTitleMarginBottom !== undefined && deskTitleMarginBottom !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-bottom: ${deskTitleMarginBottom}${titleMarginBottomUnit};
			}`
				: ' '
		}
		${
			descriptionColor !== undefined && descriptionColor !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-description {
				color: ${descriptionColor};
			}`
				: ' '
		}
		${
			designationHoverColor !== undefined && designationHoverColor !== ''
				? `.${uniqueId} .bwdssb-service-item:hover .content-wrap .service-description {
				color: ${designationHoverColor};
			}`
				: ' '
		}
		${
			deskDesgFont !== undefined && deskDesgFont !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-description {
				font-size: ${deskDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		
		${desgBlock}
		${
			designationAlign !== undefined && designationAlign !== ''
				? `.${uniqueId} .bwdssb-service-item .bwdssb-service-designation {
				text-align: ${designationAlign};
			}`
				: ' '
		}
		${
			iconColor !== undefined && iconColor !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon{
				color: ${iconColor};
			}`
				: ' '
		}
		${
			svgColor !== undefined && svgColor !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media svg{
				fill: ${svgColor};
			}`
				: ' '
		}
		${
			svgHoverColor !== undefined && svgHoverColor !== ''
				? `.${uniqueId} .bwdssb-service-item:hover .content-wrap .service-icon-media svg{
				fill: ${svgHoverColor};
			}`
				: ' '
		}
		${
			iconHoverColor !== undefined && iconHoverColor !== ''
				? `.${uniqueId} .bwdssb-service-item:hover .content-wrap .service-icon {
				color: ${iconHoverColor};
			}`
				: ' '
		}
		${
			deskIconSize !== undefined && deskIconSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon {
				font-size: ${deskIconSize}${iconSizeUnit};
			}`
				: ' '
		}
		${
			deskSvgSize !== undefined && deskSvgSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media svg {
				width: ${deskSvgSize}${svgSizeUnit};
				height: ${deskSvgSize}${svgSizeUnit};
			}`
				: ' '
		}
		${
			iconBgNormalColor !== undefined && iconBgNormalColor !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media, 
				.${uniqueId}.style-15 .bwdssb-service-item .content-wrap .service-icon-media::before, 
				.${uniqueId}.style-15 .bwdssb-service-item .content-wrap .service-icon-media::after{
				background: ${iconBgNormalColor};
			}`
				: ' '
		}
		${
			iconBgHoverColor !== undefined && iconBgHoverColor !== ''
				? `.${uniqueId} .bwdssb-service-item:hover .content-wrap .service-icon-media{
				background: ${iconBgHoverColor};
			}`
				: ' '
		}
		${
			contentWrapperBg !== undefined && contentWrapperBg !== ''
				? `.${uniqueId}.style-3 .bwdssb-service-item::after,
				.${uniqueId}.style-5 .bwdssb-service-item::after,
				.${uniqueId}.style-7 .bwdssb-service-item::after,
				.${uniqueId}.style-8 .bwdssb-service-item .content-wrap,
				.${uniqueId}.style-9 .bwdssb-service-item::before,
				.${uniqueId}.style-10 .bwdssb-service-item::before,
				.${uniqueId}.style-11 .bwdssb-service-item::after,
				.${uniqueId}.style-12 .bwdssb-service-item::before,
				.${uniqueId}.style-13 .bwdssb-service-item::before,
				.${uniqueId}.style-14 .bwdssb-service-item::before,
				.${uniqueId}.style-15 .bwdssb-service-item::before,
				.${uniqueId}.style-16 .bwdssb-service-item,
				.${uniqueId}.style-17 .bwdssb-service-item::before,
				.${uniqueId}.style-17 .bwdssb-service-item::after {
				background: ${contentWrapperBg};
			}`
				: ' '
		}
		${
			itemNormalBg !== undefined && itemNormalBg !== ''
				? `.${uniqueId}.style-1 .bwdssb-service-item,
				.${uniqueId}.style-2 .bwdssb-service-item,
				.${uniqueId}.style-5 .bwdssb-service-item::before,
				.${uniqueId}.style-7 .bwdssb-service-item::before,
				.${uniqueId}.style-9 .bwdssb-service-item,
				.${uniqueId}.style-10 .bwdssb-service-item,
				.${uniqueId}.style-11 .bwdssb-service-item::before,
				.${uniqueId}.style-12 .bwdssb-service-item::after,
				.${uniqueId}.style-13 .bwdssb-service-item::after,
				.${uniqueId}.style-14 .bwdssb-service-item,
				.${uniqueId}.style-15 .bwdssb-service-item::after,
				.${uniqueId}.style-16 .bwdssb-service-item::before,
				.${uniqueId}.style-16 .bwdssb-service-item .content-wrap .service-icon-media::before, 
				.${uniqueId}.style-16 .bwdssb-service-item .content-wrap .service-icon-media::after{
				background: ${itemNormalBg};
			}`
				: ' '
		}
		${
			itemGradientBg !== undefined && itemGradientBg !== ''
				? `.${uniqueId}.style-3 .bwdssb-service-item::before,
				.${uniqueId}.style-3 .bwdssb-service-item .content-wrap::before,
				.${uniqueId}.style-6 .bwdssb-service-item,
				.${uniqueId}.style-8 .bwdssb-service-item::before{
				background: ${itemGradientBg};
			}`
				: ' '
		}
		${
			itemGradientHoverBg !== undefined && itemGradientHoverBg !== ''
				? `.${uniqueId}.style-1 .bwdssb-service-item:hover::before,
				.${uniqueId}.style-2 .bwdssb-service-item:hover::after {
				background: ${itemGradientHoverBg};
			}`
				: ' '
		}
		${
			deskIconRoundSize !== undefined && deskIconRoundSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media{
				width: ${deskIconRoundSize}${iconRoundSizeUnit};
				height: ${deskIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${`.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
		   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border: ${borderIcon.width}px ${borderIcon.style} ${borderIcon.color}
			}`}
		
		${
			deskIconBorderRadiusTop !== undefined &&
			deskIconBorderRadiusTop !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media {
				border-top-left-radius: ${deskIconBorderRadiusTop}${iconBorderRadiusTopUnit};
			}`
				: ' '
		}
		${
			deskIconBorderRadiusRight !== undefined &&
			deskIconBorderRadiusRight !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media {
				border-top-right-radius: ${deskIconBorderRadiusRight}${iconBorderRadiusRightUnit};
			}`
				: ' '
		}
		${
			deskIconBorderRadiusBottom !== undefined &&
			deskIconBorderRadiusBottom !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media {
				border-bottom-right-radius: ${deskIconBorderRadiusBottom}${iconBorderRadiusBottomUnit};
			}`
				: ' '
		}
		${
			deskIconBorderRadiusLeft !== undefined &&
			deskIconBorderRadiusLeft !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media {
				border-bottom-left-radius: ${deskIconBorderRadiusLeft}${iconBorderRadiusLeftUnit};
			}`
				: ' '
		}
		${
			iconAlign !== undefined && iconAlign !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .content-wrap {
				justify-content: ${iconAlign};
			}`
				: ' '
		}
		${iconBoxShadow}
		${
			deskImageSize !== undefined && deskImageSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media img {
				width: ${deskImageSize}${imageSizeUnit};
				height: ${deskImageSize}${imageSizeUnit};
			}`
				: ' '
		}
		
		${
			stylesToShowPanelFor.includes(style)
				? `.${uniqueId} .bwdssb-service-item .bwdssb-content-wrap {
				background: ${contentBgColor};
			}`
				: ''
		}

		${
			boxBgHoverColor !== undefined && boxBgHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-service-member-item:hover {
				background: ${boxBgHoverColor};
			}`
				: ''
		}
		${
			boxBgHoverColor !== undefined && boxBgHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-service-member-item:hover {
				background: ${boxBgHoverColor};
			}`
				: ''
		}
		
		${cssBlock}
		${borderBlock}
		${wrapperBorderBlock}
		${wrapperShadow}
		${
			mainWrapperBgColor !== undefined && mainWrapperBgColor !== ''
				? `.${uniqueId}.wp-block-wiztm-team-member {
				background: ${mainWrapperBgColor};
			}`
				: ' '
		}
		${
			zIndex !== undefined && zIndex !== ''
				? `.${uniqueId}.wp-block-wiztm-team-member {
				z-index: ${zIndex};
			}`
				: ' '
		}
		
    
		${customCSS}
		
	`;
	const tabStyles = `
		${
			tabContainerWidth !== undefined && tabContainerWidth !== ''
				? `.${uniqueId}.wp-block-wiztm-team-member.custom-width {
						max-width: ${tabContainerWidth}${containerWidthUnit}
					}`
				: ' '
		}
		${responsiveTabCSS}
		${
			tabCols !== undefined && tabCols !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-template-columns: repeat(${tabCols}, 1fr);
					}`
				: ' '
		}
		${
			tabGap !== undefined && tabGap !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-column-gap: ${tabGap}${gapUnit};
					}`
				: ' '
		}
		${
			tabRowGap !== undefined && tabRowGap !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-row-gap: ${tabRowGap}${gapRowUnit};
					}`
				: ' '
		}
		${
			Object.keys(itemTabStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item{${convertToCss(
						itemTabStyles
				  )}}`
				: ' '
		}
		${
			Object.keys(wrapperTabStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper { ${convertToCss(
						wrapperTabStyles
				  )}}`
				: ' '
		}
		${
			tabTitleFont !== undefined && tabTitleFont !== ''
				? `.${uniqueId} .wiztm-team-name {
					font-size: ${tabTitleFont}${titleFontUnit};
				}`
				: ' '
		}
		${
			tabTitleMarginTop !== undefined && tabTitleMarginTop !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-top: ${tabTitleMarginTop}${titleMarginTopUnit};
			}`
				: ' '
		}
		${
			tabTitleMarginBottom !== undefined && tabTitleMarginBottom !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-bottom: ${tabTitleMarginBottom}${titleMarginBottomUnit};
			}`
				: ' '
		}
		${
			tabDesgFont !== undefined && tabDesgFont !== ''
				? `.${uniqueId} .bwdssb-service-designation {
				font-size: ${tabDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		${
			tabImageSize !== undefined && tabImageSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media img {
				width: ${tabImageSize}${imageSizeUnit};
				height: ${tabImageSize}${imageSizeUnit};
			}`
				: ' '
		}
		${
			tabSvgSize !== undefined && tabSvgSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media svg {
				width: ${tabSvgSize}${svgSizeUnit};
				height: ${tabSvgSize}${svgSizeUnit};
			}`
				: ' '
		}
		${
			tabIconRoundSize !== undefined && tabIconRoundSize !== ''
				? `.${uniqueId} .wp-block-bdt-service-member-item .bdt-hover-content .bdt-social-share a {
				width: ${tabIconRoundSize}${iconRoundSizeUnit};
				height: ${tabIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${
			tabIconBorderRadiusTop !== undefined &&
			tabIconBorderRadiusTop !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-top-left-radius: ${tabIconBorderRadiusTop}${iconBorderRadiusTopUnit};
			}`
				: ' '
		}
		${
			tabIconBorderRadiusRight !== undefined &&
			tabIconBorderRadiusRight !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-top-right-radius: ${tabIconBorderRadiusRight}${iconBorderRadiusRightUnit};
			}`
				: ' '
		}
		${
			tabIconBorderRadiusBottom !== undefined &&
			tabIconBorderRadiusBottom !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-bottom-right-radius: ${tabIconBorderRadiusBottom}${iconBorderRadiusBottomUnit};
			}`
				: ' '
		}
		${
			tabIconBorderRadiusLeft !== undefined &&
			tabIconBorderRadiusLeft !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-bottom-left-radius: ${tabIconBorderRadiusLeft}${iconBorderRadiusLeftUnit};
			}`
				: ' '
		}
	`;
	const mobStyles = `
		${
			mobContainerWidth !== undefined && mobContainerWidth !== ''
				? `.${uniqueId}.wp-block-wiztm-team-member.custom-width {
						max-width: ${mobContainerWidth}${containerWidthUnit}
					}`
				: ' '
		}
		${responsiveMobileCSS}
		${
			mobCols !== undefined && mobCols !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-template-columns: repeat(${mobCols}, 1fr);
					}`
				: ' '
		}
		${
			mobGap !== undefined && mobGap !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-column-gap: ${mobGap}${gapUnit};
					}`
				: ' '
		}
		${
			mobRowGap !== undefined && mobRowGap !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper {
						grid-row-gap: ${mobRowGap}${gapRowUnit};
					}`
				: ' '
		}
		${
			Object.keys(itemMobStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item {${convertToCss(
						itemMobStyles
				  )}}`
				: ' '
		}
		${
			Object.keys(wrapperMobStyles).length > 0
				? `.${uniqueId} .bwdssb-service-item-wrapper {${convertToCss(
						wrapperMobStyles
				  )}}`
				: ' '
		}
		${
			mobTitleFont !== undefined && mobTitleFont !== ''
				? `.${uniqueId} .wiztm-team-name {
					font-size: ${mobTitleFont}${titleFontUnit};
				}`
				: ' '
		}
		${
			mobTitleMarginTop !== undefined && mobTitleMarginTop !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-top: ${mobTitleMarginTop}${titleMarginTopUnit};
			}`
				: ' '
		}
		${
			mobTitleMarginBottom !== undefined && mobTitleMarginBottom !== ''
				? `.${uniqueId} .wiztm-team-name {
				margin-bottom: ${mobTitleMarginBottom}${titleMarginBottomUnit};
			}`
				: ' '
		}
		${
			mobDesgFont !== undefined && mobDesgFont !== ''
				? `.${uniqueId} .bwdssb-service-designation {
				font-size: ${mobDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		${
			mobImageSize !== undefined && mobImageSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media img {
				width: ${mobImageSize}${imageSizeUnit};
				height: ${mobImageSize}${imageSizeUnit};
			}`
				: ' '
		}
		${
			mobSvgSize !== undefined && mobSvgSize !== ''
				? `.${uniqueId} .bwdssb-service-item .content-wrap .service-icon-media svg {
				width: ${mobSvgSize}${svgSizeUnit};
				height: ${mobSvgSize}${svgSizeUnit};
			}`
				: ' '
		}
		${
			mobIconRoundSize !== undefined && mobIconRoundSize !== ''
				? `.${uniqueId} .wp-block-bdt-service-member-item .bdt-hover-content .bdt-social-share a {
				width: ${mobIconRoundSize}${iconRoundSizeUnit};
				height: ${mobIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${
			mobIconBorderRadiusTop !== undefined &&
			mobIconBorderRadiusTop !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-top-left-radius: ${mobIconBorderRadiusTop}${iconBorderRadiusTopUnit};
			}`
				: ' '
		}
		${
			mobIconBorderRadiusRight !== undefined &&
			mobIconBorderRadiusRight !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item.${uniqueItemId} .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item.${uniqueItemId} .bwdssb-social-icon .icon-bg {
				border-top-right-radius: ${mobIconBorderRadiusRight}${iconBorderRadiusRightUnit};
			}`
				: ' '
		}
		${
			mobIconBorderRadiusBottom !== undefined &&
			mobIconBorderRadiusBottom !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-bottom-right-radius: ${mobIconBorderRadiusBottom}${iconBorderRadiusBottomUnit};
			}`
				: ' '
		}
		${
			mobIconBorderRadiusLeft !== undefined &&
			mobIconBorderRadiusLeft !== ''
				? `.${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-item,
				   .${uniqueId} .bwdssb-service-item-wrapper .bwdssb-service-item .bwdssb-social-icon .icon-bg {
				border-bottom-left-radius: ${mobIconBorderRadiusLeft}${iconBorderRadiusLeftUnit};
			}`
				: ' '
		}
	`;
	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);
	return(
        <style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
    );
}

export default controlStyle;
