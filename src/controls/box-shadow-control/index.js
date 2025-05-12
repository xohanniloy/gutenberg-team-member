import {
	ColorPicker,
	RangeControl,
	SelectControl,
	Button
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

// BoxShadowControls component
const BoxShadowControl = ({ label, values, onChange }) => {
	const { color, offsetX, offsetY, blurRadius, spreadRadius, shadowType } =
		values;

	  const updateBoxShadowProperty = (key, value) => {
			onChange({
				...values,
				[key]: value !== undefined ? value : values[key],
			});
		};
		const resetColor = () => {
			onChange({
				...values,
				color: '#000000', 
			});
		};
		const shadowTypeOptions = [
			{ label: 'None', value: 'none' },
			{ label: 'Outset', value: '' },
			{ label: 'Inset', value: 'inset' },
		];
	return (
		<div className="service-box-shadow-wrapper">
			<p className="service-box-shadow">{label}</p>
			<SelectControl
				value={shadowType}
				options={shadowTypeOptions}
				onChange={(newValue) =>
					updateBoxShadowProperty('shadowType', newValue)
				}
			/>
			{shadowType !== 'none' && (
				<>
					<div className="service-colorPiker-wrapper">
						<ColorPicker
							label={__('Color', 'service-team-member')}
							color={color}
							onChange={(newColor) =>
								updateBoxShadowProperty('color', newColor)
							}
							enableAlpha
							copyFormat
						/>
						<Button className="reset-button" onClick={resetColor}>
							{__('Reset', 'service-team-member')}
						</Button>
					</div>
					<RangeControl
						label={__('Offset X', 'service-team-member')}
						value={offsetX}
						onChange={(newValue) =>
							updateBoxShadowProperty('offsetX', newValue)
						}
						min={-100}
						max={100}
					/>
					<RangeControl
						label={__('Offset Y', 'service-team-member')}
						value={offsetY}
						onChange={(newValue) =>
							updateBoxShadowProperty('offsetY', newValue)
						}
						min={-100}
						max={100}
					/>
					<RangeControl
						label={__('Blur', 'service-team-member')}
						value={blurRadius}
						onChange={(newValue) =>
							updateBoxShadowProperty('blurRadius', newValue)
						}
						min={0}
						max={50}
					/>
					<RangeControl
						label={__('Spread', 'service-team-member')}
						value={spreadRadius}
						onChange={(newValue) =>
							updateBoxShadowProperty('spreadRadius', newValue)
						}
						min={0}
						max={50}
					/>
				</>
			)}
		</div>
	);
};

export default BoxShadowControl;

