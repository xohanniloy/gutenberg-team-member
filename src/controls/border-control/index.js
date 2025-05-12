import {
	ColorPicker,
	RangeControl,
	SelectControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './style.scss';

const CustomBorderControl = ({ label, values, onChange }) => {
	const { color, width, style } = values;

	const updateBorderProperty = (key, value) => {
		onChange({
			...values,
			[key]: value,
		});
	};
	const resetColor = () => {
		onChange({
			...values,
			color: '#000000',
		});
	};
	const borderStyleOptions = [
		{ label: 'None', value: 'none' },
		{ label: 'Solid', value: 'solid' },
		{ label: 'Dotted', value: 'dotted' },
		{ label: 'Dashed', value: 'dashed' },
		{ label: 'Double', value: 'double' },
		{ label: 'Groove', value: 'groove' },
		{ label: 'Ridge', value: 'ridge' },
		{ label: 'Inset', value: 'inset' },
		{ label: 'Outset', value: 'outset' },
	];
	return (
		<div className="service-border-control-wrapper">
			<p className="service-border-label">{label}</p>
			<SelectControl
				value={style}
				options={borderStyleOptions}
				onChange={(newValue) =>
					updateBorderProperty('style', newValue)
				}
			/>
			{style !== 'none' && (
				<>
					<div className="service-colorPiker-wrapper">
						<ColorPicker
							label={__('Color', 'service-team-member')}
							color={color}
							onChange={(newColor) =>
								updateBorderProperty('color', newColor)
							}
							enableAlpha
							copyFormat
						/>
						<Button className="service-reset-button" onClick={resetColor}>
							{__('Reset', 'service-team-member')}
						</Button>
					</div>
					<RangeControl
						label={__('Border Width', 'service-team-member')}
						value={width}
						onChange={(newValue) =>
							updateBorderProperty('width', newValue)
						}
						min={1}
						max={100}
					/>
				</>
			)}
		</div>
	);
};

export default CustomBorderControl;
