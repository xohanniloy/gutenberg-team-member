import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// import attributes
import attributes from './attributes';
import { ServiceShowcaseIcon } from './icon';



/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: ServiceShowcaseIcon,
		foreground: '#2ecb13',
	},
	attributes,
	keywords: [
		__('service', 'bwdssb-service-showcase'),
		__('bwd', 'bwdssb-service-showcase'),
		__('box', 'bwdssb-service-showcase'),
		__('card', 'bwdssb-service-showcase'),
		__('showcase', 'bwdssb-service-showcase'),
	],
	edit: Edit,
	save: Save,
});

