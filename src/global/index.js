// add resMode attributes to all blocks

// wp.hooks.addFilter(
// 	'blocks.registerBlockType',
// 	'bwdssb/attribute/resMode',
// 	'wizadd/attribute/resMode',
// 	function (settings, name) {
// 		if (name.includes('bwdssb/')) {
// 			settings.attributes = {
// 				...settings.attributes,
// 				resMode: {
// 					type: 'string',
// 					default: 'Desktop',
// 				},
// 			};
// 		}
// 		return settings;
// 	}
// );


wp.hooks.addFilter(
    'blocks.registerBlockType',
    'bwdssb/attribute/resMode',
    function addResModeAttribute(settings, name) {
        const targetBlocks = ['wiztm/team-member', 'bwdssb/service-showcase'];

        if (targetBlocks.includes(name)) {
            settings.attributes = {
                ...settings.attributes,
                resMode: {
                    type: 'string',
                    default: 'Desktop',
                },
            };
        }

        return settings;
    }
);
