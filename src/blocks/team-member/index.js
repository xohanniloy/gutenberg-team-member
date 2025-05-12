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
import { TeamMemberIcon } from './icon';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: TeamMemberIcon,
		foreground: '#2ecb13',
	},
	attributes,
	keywords: [
		__('service', 'wiztm-team-member'),
		__('bwd', 'wiztm-team-member'),
		__('box', 'wiztm-team-member'),
		__('card', 'wiztm-team-member'),
		__('showcase', 'wiztm-team-member'),
		__('team', 'wiztm-team-member'),
		__('member', 'wiztm-team-member'),
		__('team-member', 'wiztm-team-member'),
		__('team-member-block', 'wiztm-team-member'),
		__('team-member-blocks', 'wiztm-team-member'),
	],
	edit: Edit,
	save: Save,
});
