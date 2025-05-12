// add resMode attributes to all blocks
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'bwdssb/attribute/resMode',
	function (settings, name) {
		if (name.includes('bwdssb/')) {
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
