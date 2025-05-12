
import {
	RangeControl,
	Button,
} from '@wordpress/components';
import ResBtn from '../res-btn';
import { Fragment, useState } from '@wordpress/element';
import './style.scss';
import { __ } from '@wordpress/i18n';

const ResDimensionControl = ({
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
	const [isLinked, setIsLinked] = useState(true);

	const {
		[`${controlName[0]}DeskRange`]: deskTopRange,
		[`${controlName[1]}DeskRange`]: deskRightRange,
		[`${controlName[2]}DeskRange`]: deskBottomRange,
		[`${controlName[3]}DeskRange`]: deskLeftRange,
		[`${controlName[0]}TabRange`]: tabTopRange,
		[`${controlName[1]}TabRange`]: tabRightRange,
		[`${controlName[2]}TabRange`]: tabBottomRange,
		[`${controlName[3]}TabRange`]: tabLeftRange,
		[`${controlName[0]}MobRange`]: mobTopRange,
		[`${controlName[1]}MobRange`]: mobRightRange,
		[`${controlName[2]}MobRange`]: mobBottomRange,
		[`${controlName[3]}MobRange`]: mobLeftRange,
		[`${controlName[0]}Unit`]: topUnit,
	} = attributes;

	if (!units) units = units || ['px', 'em', 'rem', '%'];

	return (
		<div className="service-dimension-control-wrap">
			<p className="service-dimension-label">{label}</p>
			<div className="service-res-rangle-control">
				<ResBtn resMode={resMode} setAttributes={setAttributes} />
				<div className="service-unit">
					{!noUnits && (
						<div className="units-wrapper">
							{units &&
								units.map((u, index) => {
									return (
										<Button
											className="unit-btn"
											variant={
												topUnit === u
													? 'primary'
													: 'secondary'
											}
											key={index}
											onClick={() =>
												setAttributes({
													[`${controlName[0]}Unit`]:
														u,
													[`${controlName[1]}Unit`]:
														u,
													[`${controlName[2]}Unit`]:
														u,
													[`${controlName[3]}Unit`]:
														u,
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
			</div>
			<div className="service-dimension-control">
				<div className="bwd-res-controls">
					{resMode === 'Desktop' && (
						<div className="bwd-single-rangle">
							{isLinked ? (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={deskTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}DeskRange`]:
													value,
												[`${controlName[1]}DeskRange`]:
													value,
												[`${controlName[2]}DeskRange`]:
													value,
												[`${controlName[3]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={deskTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}DeskRange`]:
													value,
												[`${controlName[1]}DeskRange`]:
													value,
												[`${controlName[2]}DeskRange`]:
													value,
												[`${controlName[3]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__(
											'Bottom',
											'service-team-member'
										)}
										value={deskTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}DeskRange`]:
													value,
												[`${controlName[1]}DeskRange`]:
													value,
												[`${controlName[2]}DeskRange`]:
													value,
												[`${controlName[3]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={deskTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}DeskRange`]:
													value,
												[`${controlName[1]}DeskRange`]:
													value,
												[`${controlName[2]}DeskRange`]:
													value,
												[`${controlName[3]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							) : (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={deskTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={deskRightRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[1]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__(
											'Bottom',
											'service-team-member'
										)}
										value={deskBottomRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[2]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={deskLeftRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[3]}DeskRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							)}
						</div>
					)}
					{resMode === 'Tablet' && (
						<div className="bwd-single-rangle">
							{isLinked ? (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={tabTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}TabRange`]:
													value,
												[`${controlName[1]}TabRange`]:
													value,
												[`${controlName[2]}TabRange`]:
													value,
												[`${controlName[3]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={tabTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}TabRange`]:
													value,
												[`${controlName[1]}TabRange`]:
													value,
												[`${controlName[2]}TabRange`]:
													value,
												[`${controlName[3]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__(
											'Bottom',
											'service-team-member'
										)}
										value={tabTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}TabRange`]:
													value,
												[`${controlName[1]}TabRange`]:
													value,
												[`${controlName[2]}TabRange`]:
													value,
												[`${controlName[3]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={tabTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}TabRange`]:
													value,
												[`${controlName[1]}TabRange`]:
													value,
												[`${controlName[2]}TabRange`]:
													value,
												[`${controlName[3]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							) : (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={tabTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={tabRightRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[1]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__(
											'Bottom',
											'service-team-member'
										)}
										value={tabBottomRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[2]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={tabLeftRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[3]}TabRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							)}
						</div>
					)}
					{resMode === 'Mobile' && (
						<div className="bwd-single-rangle">
							{isLinked ? (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={mobTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}MobRange`]:
													value,
												[`${controlName[1]}MobRange`]:
													value,
												[`${controlName[2]}MobRange`]:
													value,
												[`${controlName[3]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={mobTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}MobRange`]:
													value,
												[`${controlName[1]}MobRange`]:
													value,
												[`${controlName[2]}MobRange`]:
													value,
												[`${controlName[3]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Bottom', 'service-team-member')}
										value={mobTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}MobRange`]:
													value,
												[`${controlName[1]}MobRange`]:
													value,
												[`${controlName[2]}MobRange`]:
													value,
												[`${controlName[3]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={mobTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}MobRange`]:
													value,
												[`${controlName[1]}MobRange`]:
													value,
												[`${controlName[2]}MobRange`]:
													value,
												[`${controlName[3]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							) : (
								<Fragment>
									<RangeControl
										label={__('Top', 'service-team-member')}
										value={mobTopRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[0]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Right', 'service-team-member')}
										value={mobRightRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[1]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Bottom', 'service-team-member')}
										value={mobBottomRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[2]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
									<RangeControl
										label={__('Left', 'service-team-member')}
										value={mobLeftRange}
										onChange={(value) =>
											setAttributes({
												[`${controlName[3]}MobRange`]:
													value,
											})
										}
										min={min}
										max={max}
									/>
								</Fragment>
							)}
						</div>
					)}
				</div>
				<div className="service-dimension-link">
					<Button
						className="unit-btn"
						variant={isLinked ? 'primary' : 'secondary'}
						onClick={() => setIsLinked(!isLinked)}
					>
						<span
							className={`dashicons ${
								isLinked
									? 'dashicons-admin-links'
									: 'dashicons-editor-unlink'
							}`}
						/>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ResDimensionControl;
