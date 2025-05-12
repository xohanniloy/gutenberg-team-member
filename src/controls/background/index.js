
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, SelectControl, CardDivider } from '@wordpress/components';
import ColorControl from "../color-control"
import { MediaUpload } from '@wordpress/block-editor';
import placeholderImageUrl from '../../../includes/assets/img/bwd-placeholder.jpg';
import './index.scss';

const BackgroundControl = ({attributes, setAttributes}) => {
    const {mainWrapperBgColor, imageUrl, bgPosition, bgAttachment, bgRepeat, bgSize} = attributes;
	const onSelectMedia = (media) => {
		setAttributes({
			imageUrl: media.url, 
		});
	};
	const onRemoveMedia = () => {
		setAttributes({
			imageUrl: '', 
		});
	};
    return (
		<Fragment>
			<ColorControl
				label={__('Background Color', 'bwdtm-service-member')}
				color={mainWrapperBgColor}
				colorName="mainWrapperBgColor"
				onChange={setAttributes}
			/>
			<p className="bwdtm-bgImg-label">
				{__('Background Image', 'bwdtm-service-member')}
			</p>
			<MediaUpload
				onSelect={onSelectMedia}
				allowedTypes={['image']}
				value={imageUrl}
				render={({ open }) => (
					<div className="bwdtm-wrapperbg">
						{imageUrl ? (
							<>
								<Button
									onClick={open}
									className="bwdtm-wrapimg"
								>
									<img src={imageUrl} alt="Selected Media" />
								</Button>
								<Button
									className="remove-media"
									onClick={onRemoveMedia}
								>
									<span className="dashicons dashicons-trash"></span>
								</Button>
							</>
						) : (
							<Button
								onClick={open}
								className="bwdtm-bgwrap-placeholder"
							>
								<img
									src={placeholderImageUrl}
									alt="Placeholder"
									className="placeholder-image"
								/>
								<span>
									{__(
										'Upload Image',
										'bwdtm-service-member'
									)}
								</span>
							</Button>
						)}
					</div>
				)}
			/>
			<CardDivider />
			{imageUrl && (
				<Fragment>
					<SelectControl
						label={__('Position', 'bwdtm-service-member')}
						value={bgPosition}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'center center',
								label: 'Center Center',
							},
							{
								value: 'center left',
								label: 'Center Left',
							},
							{
								value: 'center right',
								label: 'Center Right',
							},
							{
								value: 'top center',
								label: 'Top Center',
							},
							{
								value: 'top left',
								label: 'Top Left',
							},
							{
								value: 'top right',
								label: 'Top Right',
							},
							{
								value: 'bottom center',
								label: 'Bottom Center',
							},
							{
								value: 'bottom left',
								label: 'Bottom Left',
							},
							{
								value: 'bottom right',
								label: 'Bottom Right',
							},
							{
								value: 'custom',
								label: 'Custom',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgPosition: value,
							})
						}
					/>
					<SelectControl
						label={__('Attachment', 'bwdtm-service-member')}
						value={bgAttachment}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'scroll',
								label: 'Scroll',
							},
							{
								value: 'fixed',
								label: 'Fixed',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgAttachment: value,
							})
						}
					/>
					<SelectControl
						label={__('Repeat', 'bwdtm-service-member')}
						value={bgRepeat}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'no-repeat',
								label: 'No-repeat',
							},
							{
								value: 'repeat',
								label: 'Repeat',
							},
							{
								value: 'repeat-x',
								label: 'Repeat-X',
							},
							{
								value: 'repeat-y',
								label: 'Repeat-Y',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgRepeat: value,
							})
						}
					/>
					<SelectControl
						label={__('Size', 'bwdtm-service-member')}
						value={bgSize}
						options={[
							{
								value: '',
								label: 'Default',
							},
							{
								value: 'auto',
								label: 'Auto',
							},
							{
								value: 'cover',
								label: 'Cover',
							},
							{
								value: 'contain',
								label: 'Contain',
							},
						]}
						onChange={(value) =>
							setAttributes({
								bgSize: value,
							})
						}
					/>
				</Fragment>
			)}
		</Fragment>
	);
}
export default BackgroundControl