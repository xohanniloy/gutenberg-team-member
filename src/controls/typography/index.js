/* eslint-disable @wordpress/no-unsafe-wp-apis */
import {
	SelectControl,
	RangeControl,
	BaseControl,
	Popover,
	Dashicon,
	Button,
	__experimentalElevation as Elevation,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import fontOptions from '../../options/font-family';
import './style.scss';

const MyTypographyControl = ({label, typography, onChange, }) => {
	const {fontFamily,
			fontWeight,
			fontStyle,
			textTransform,
			letterSpacing,
			wordSpacing,
			lineHeight,} = typography;
	

	const textTransformOptions = [
		{ label: 'None', value: 'none' },
		{ label: 'Uppercase', value: 'uppercase' },
		{ label: 'Lowercase', value: 'lowercase' },
		{ label: 'Capitalize', value: 'capitalize' },
	];

	const fontWeightOptions = [
		{ label: 'None', value: 'normal' },
		{ label: '100 – Thin', value: '100' },
		{ label: '200 – Extra Light', value: '200' },
		{ label: '300 – Light', value: '300' },
		{ label: '400 – Normal', value: '400' },
		{ label: '500 – Medium', value: '500' },
		{ label: '600 – Semi Bold', value: '600' },
		{ label: '700 – Bold', value: '700' },
		{ label: '800 – Extra Bold', value: '800' },
		{ label: '900 – Black', value: '900' },
	];

	const fontStyleOptions = [
		{ label: 'Initial', value: 'initial' },
		{ label: 'Normal', value: 'normal' },
		{ label: 'Italic', value: 'italic' },
	];


	const [showTypography, setShowTypography] = useState(false);
	return (
		<div className="bwdtm-typography-wrapper">
			<div id="typography-control">
				{label ? label : __('Typography', 'bwdtm-team-member')}
			</div>
			<Button
				className="bwdtm-typography-edit"
				onClick={() => setShowTypography(true)}
			>
				<Dashicon icon="edit" />
				<Elevation active={1} focus={3} hover={3} value={3} />
			</Button>
			{showTypography && (
				<Popover
					position="bottom right"
					onClose={() => setShowTypography(false)}
					onFocusOutside={() => setShowTypography(false)}
				>
					<BaseControl>
						<SelectControl
							label={__('Font Family', 'bwdtm-team-member')}
							value={fontFamily}
							options={fontOptions}
							onChange={(value) =>
								onChange({ ...typography, fontFamily: value })
							}
						/>
						<SelectControl
							label={__('Font Weight', 'bwdtm-team-member')}
							value={fontWeight}
							options={fontWeightOptions}
							onChange={(value) =>
								onChange({ ...typography, fontWeight: value })
							}
						/>
						<SelectControl
							label={__('Font Style', 'bwdtm-team-member')}
							value={fontStyle}
							options={fontStyleOptions}
							onChange={(value) =>
								onChange({ ...typography, fontStyle: value })
							}
						/>
						<SelectControl
							label={__('Text Transform', 'bwdtm-team-member')}
							value={textTransform}
							options={textTransformOptions}
							onChange={(value) =>
								onChange({
									...typography,
									textTransform: value,
								})
							}
						/>
						<RangeControl
							label={__('Line Height', 'bwdtm-team-member')}
							value={lineHeight}
							onChange={(value) =>
								onChange({ ...typography, lineHeight: value })
							}
							min={0}
							max={50}
							step={0.1}
						/>
						<RangeControl
							label={__(
								'Letter Spacing (px)',
								'bwdtm-team-member'
							)}
							value={letterSpacing}
							onChange={(value) =>
								onChange({
									...typography,
									letterSpacing: value,
								})
							}
							min={-1}
							max={50}
						/>
						<RangeControl
							label={__('Word Spacing (px)', 'bwdtm-team-member')}
							value={wordSpacing}
							onChange={(value) =>
								onChange({ ...typography, wordSpacing: value })
							}
							min={-1}
							max={50}
						/>
					</BaseControl>
				</Popover>
			)}
		</div>
	);
};

export default MyTypographyControl;
