import * as constants from './constants';
import * as generators from '../../generators';


const { generateResRangleControlAttributes } = generators;

const {
	CUSTOM_CONTAINER_WIDTH,
	TITLE_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_SIZE,
	SVG_SIZE,
	ICON_ROUND_SIZE,
	BORDER_WIDTH,
	IMAGE_SIZE,
	ICON_BORDER_RADIUS,
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
	WRAPPER_BORDER_RADIUS,
	WRAPPER_PADDING_BOTTOM,
	WRAPPER_PADDING_TOP,
	WRAPPER_PADDING_LEFT,
	WRAPPER_PADDING_RIGHT,
	WRAPPER_MARGIN_TOP,
	WRAPPER_MARGIN_BOTTOM,
	WRAPPER_MARGIN_LEFT,
	WRAPPER_MARGIN_RIGHT,
	WRAPPER_BORDER_RADIUS_TOP,
	WRAPPER_BORDER_RADIUS_RIGHT,
	WRAPPER_BORDER_RADIUS_BOTTOM,
	WRAPPER_BORDER_RADIUS_LEFT,
} = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	style: {
		type: 'string',
		default: 'style-1',
	},
	blockStyle: {
		type: 'object',
	},
	myImageUrl: {
		type: 'string',
	},
	MyImgId: {
		type: 'number',
	},
	MyImgalt: {
		type: 'string',
	},
	title: {
		type: 'string',
		default: 'Team Member',
	},
	currentMedia: {
		type: 'string', 
		default: 'icon',
	},
	containerWidth: {
		type: 'string',
		default: 'container',
	},
	titleTag: {
		type: 'string',
		default: 'h2',
	},
	designation: {
		type: 'string',
		default: 'Product Designer',
	},
	description: {
		type: 'string',
		default: 'Alex brings over 8 years of experience in creating intuitive user interfaces and seamless product experiences.',
	},
	icons: {
		type: 'array',
		default: [],
	},
	titleColor: {
		type: 'string',
	},
	titleBgColor: {
		type: 'string',
	},
	titleHoverColor: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	iconBgNormalColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	iconBgHoverColor: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	contentWrapperBg: {
		type: 'string',
	},
	itemBgHoverColor: {
		type: 'string',
	},
	itemNormalBg: {
		type: 'string',
	},
	itemGradientBg: {
		type: 'string',
	},
	itemGradientHoverBg: {
		type: 'string',
	},
	wrapperBgColor: {
		type: 'string',
	},
	wrapperGradientBg: {
		type: 'string',
	},
	hideOnDesktop: {
		type: 'boolean',
		default: false,
	},
	hideOnTablet: {
		type: 'boolean',
		default: false,
	},
	hideOnMobile: {
		type: 'boolean',
		default: false,
	},
	mainWrapperBgColor: {
		type: 'string',
	},
	bgPosition: {
		type: 'string',
		default: '',
	},
	bgAttachment: {
		type: 'string',
		default: '',
	},
	bgRepeat: {
		type: 'string',
		default: '',
	},
	bgSize: {
		type: 'string',
		default: '',
	},
	imageUrl: {
		type: 'string',
	},
	zIndex: {
		type: 'string',
	},
	additionalClass: {
		type: 'string',
	},
	id: {
		type: 'string',
	},
	wrapperId: {
		type: 'string',
	},
	customCSS: {
		type: 'string',
		default: '',
	},
	titleTypography: {
		type: 'object',
		default: {
			fontFamily: '',
			fontSize: '',
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			letterSpacing: '',
			wordSpacing: '',
			lineHeight: '',
		},
	},
	descTypography: {
		type: 'object',
		default: {
			fontFamily: '',
			fontSize: '',
			fontWeight: '',
			fontStyle: '',
			textTransform: '',
			letterSpacing: '',
			wordSpacing: '',
			lineHeight: '',
		},
	},
	borderSettings: {
		type: 'object',
		default: {
			style: 'none',
			color: '#000000',
			width: 1,
		},
	},
	wrapperBorder: {
		type: 'object',
		default: {
			style: 'none',
			color: '#000000',
			width: 1,
		},
	},
	borderIcon: {
		type: 'object',
		default: {
			style: 'none',
			color: '#000000',
			width: 1,
		},
	},
	boxShadow: {
		type: 'object',
		default: {
			color: '#000000',
			offsetX: 0,
			offsetY: 0,
			blurRadius: 10,
			spreadRadius: 0,
			shadowType: 'none',
		},
	},
	boxShadowIcon: {
		type: 'object',
		default: {
			color: '#000000',
			offsetX: 0,
			offsetY: 0,
			blurRadius: 10,
			spreadRadius: 0,
			shadowType: 'none',
		},
	},
	boxShadowWrapper: {
		type: 'object',
		default: {
			color: '#000000',
			offsetX: 0,
			offsetY: 0,
			blurRadius: 10,
			spreadRadius: 0,
			shadowType: 'none',
		},
	},
	isPopoverVisible: {
		type: 'boolean',
		default: false,
	},
	isBoxShadowActive: {
		type: 'boolean',
		default: false,
	},
	...generateResRangleControlAttributes({
		controlName: CUSTOM_CONTAINER_WIDTH,
		defaults: {
			[`${CUSTOM_CONTAINER_WIDTH}DeskRange`]: 1200,
			[`${CUSTOM_CONTAINER_WIDTH}TabRange`]: 700,
			[`${CUSTOM_CONTAINER_WIDTH}MobRange`]: 300,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: TITLE_FONT_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: DESG_FONT_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: SVG_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_ROUND_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_BORDER_RADIUS,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: IMAGE_SIZE,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: BORDER_WIDTH,
		defaults: {
			[`${BORDER_WIDTH}DeskRange`]: 1,
			[`${BORDER_WIDTH}TabRange`]: 1,
			[`${BORDER_WIDTH}MobRange`]: 1,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_BORDER_RADIUS_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_BORDER_RADIUS_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_BORDER_RADIUS_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_BORDER_RADIUS_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_PADDING_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: TITLE_MARGIN_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: TITLE_MARGIN_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_MARGIN_LEFT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_TOP,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_RIGHT,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_BOTTOM,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: WRAPPER_BORDER_RADIUS_LEFT,
		defaults: {},
	}),
};

export default attributes;
