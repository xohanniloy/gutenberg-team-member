
import {
	RangeControl,
	Button,
	Dashicon
} from '@wordpress/components';
import ResBtn from '../res-btn';

import './style.scss';

const ResRangleControl = ({
	label,
	controlName,
	objAttrs,
	noUnits,
	units,
	min,
	max,
}) => {
	const { attributes, setAttributes } = objAttrs;
	const { resMode } = attributes;

	const {
		[`${controlName}DeskRange`]: deskRange,
		[`${controlName}TabRange`]: tabRange,
		[`${controlName}MobRange`]: mobRange,
		[`${controlName}Unit`]: unit,
	} = attributes;

	const handleReset = (mode) => {
		const fallbackValue = ''; // Define your fallback value here
		if (mode === 'Desktop') {
			setAttributes({ [`${controlName}DeskRange`]: fallbackValue });
		} else if (mode === 'Tablet') {
			setAttributes({ [`${controlName}TabRange`]: fallbackValue });
		} else if (mode === 'Mobile') {
			setAttributes({ [`${controlName}MobRange`]: fallbackValue });
		}
	};
	return (
		<div className="service-res-rangle-control">
			<p className='service-label'>{label}</p>
			<div className="service-resicon-unit-wrap">
					<ResBtn
						resMode={resMode}
						setAttributes={setAttributes}
					/>
				{!noUnits && (
					<div className="units-wrapper">
						{units &&
							units.map((u, index) => {
								return (
									<Button
										className="unit-btn"
										variant={
											unit === u
												? 'primary'
												: 'secondary'
										}
										key={index}
										onClick={() =>
											setAttributes({
												[`${controlName}Unit`]: u,
											})
										}
									>
										{u}
									</Button>
								);
							})}
					</div>
				)}
			</div>
			<div className="bwd-res-controls">
				{resMode === 'Desktop' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={deskRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}DeskRange`]: value,
								})
							}
							min={min}
							max={max}
							allowReset={false}
							trackColor="#00ced1"
						/>
						<button className="reset-icon" onClick={() => handleReset('Desktop')}>
							<Dashicon icon="image-rotate" />
						</button>
					</div>
				)}
				{resMode === 'Tablet' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={tabRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}TabRange`]: value,
								})
							}
							min={min}
							max={max}
							trackColor="#00ced1"
						/>
						<button className="reset-icon" onClick={() => handleReset('Tablet')}>
							<Dashicon icon="image-rotate" />
						</button>
					</div>
				)}
				{resMode === 'Mobile' && (
					<div className="bwd-single-rangle">
						<RangeControl
							value={mobRange}
							onChange={(value) =>
								setAttributes({
									[`${controlName}MobRange`]: value,
								})
							}
							min={min}
							max={max}
							trackColor="#00ced1"
						/>
						<button className="reset-icon" onClick={() => handleReset('Mobile')}>
							<Dashicon icon="image-rotate" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResRangleControl;
