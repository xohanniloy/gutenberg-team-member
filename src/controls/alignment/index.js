
import './style.scss';

const Alignment = ({
	label,
	attribute,
	attributeName,
	setAttributes,
	options,
}) => {
	return (
		<div className="service-Alignment">
			<p className="service-label">{label}</p>
			<div className="service-alignment-icon-wrapper">
				{options &&
					options.map((option, index) => {
						return (
							<button
								className={`service-single-icon ${
									attribute === option.value ? 'active' : ''
								}`}
								onClick={() =>
									setAttributes({
										[attributeName]: option.value,
									})
								}
								key={index}
							>
								<span
									className={`dashicons dashicons-editor-${option.icon}`}
								></span>
							</button>
						);
					})}
			</div>
		</div>
	);
};

export default Alignment;
