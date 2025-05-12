
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText} from '@wordpress/block-editor';
import icons from '../../options/icons';

export default function save({ attributes }) {
    const { uniqueId, items, titleTag, imageUrl, style, containerWidth, id, additionalClass } = attributes;
    const imageStyle = {
        backgroundImage: imageUrl ? `url(${imageUrl})` : '',
    };

    return (
        <div
            {...useBlockProps.save({
                className: `${uniqueId} ${style} ${containerWidth} ${additionalClass}`,
            })}
        >
            <div className="bwdssb-service-item-wrapper" style={imageStyle} {...(id ? { id } : {})}>
            {items && items.map((item, index) => (
                <div key={index} className="bwdssb-service-item bwdssb-bgColor">
                    {item.showLink ? (
                        <a href={item.boxLink} target={item.newTab ? '_blank' : ''} rel="noreferrer noopener">
                            <div className="content-wrap">
                                <div className="service-icon-media">
                                    {item.chooseMedia === 'icon' && (
                                        <div className="service-icon">{icons[item.icon]}</div>
                                    )}
                                    {item.chooseMedia === 'image' && item.imageUrl && (
                                        <img src={item.imageUrl.url} alt={item.text1} />
                                    )}
                                    {item.chooseMedia === 'svg' && (
                                        <div className="svg-content" dangerouslySetInnerHTML={{ __html: item.svgContent }} />
                                    )}
                                    {item.chooseMedia === 'lottie' && item.lottieUrl && (
                                        <iframe
                                            src={item.lottieUrl}
                                            title="Lottie Animation Preview"
                                            width="100%"
                                            height="200"
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    )}
                                </div>
                                <RichText.Content
                                    tagName={titleTag}
                                    className="service-title"
                                    value={item.title}
                                />
                                <RichText.Content
                                    tagName="p"
                                    className="service-description"
                                    value={item.description}
                                />
                            </div>
                        </a>
                    ) : (
                        <div className="content-wrap">
                            <div className="service-icon-media">
                                {item.chooseMedia === 'icon' && (
                                    <div className="service-icon">{icons[item.icon]}</div>
                                )}
                                {item.chooseMedia === 'image' && item.imageUrl && (
                                    <img src={item.imageUrl.url} alt={item.text1} />
                                )}
                                {item.chooseMedia === 'svg' && (
                                    <div className="svg-content" dangerouslySetInnerHTML={{ __html: item.svgContent }} />
                                )}
                                {item.chooseMedia === 'lottie' && item.lottieUrl && (
                                    <iframe
                                        src={item.lottieUrl}
                                        title="Lottie Animation Preview"
                                        width="100%"
                                        height="200"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <RichText.Content
                                tagName={titleTag}
                                className="service-title"
                                value={item.title}
                            />
                            <RichText.Content
                                tagName="p"
                                className="service-description"
                                value={item.description}
                            />
                        </div>
                    )}
                </div>
            ))}

            </div>
        </div>
    );
}

