import iconsSprite from '../../assets/images/icons-sprite.svg';

type IconPropsType = {
	iconId: string;
	width?: string;
	height?: string;
	viewBox?: string;
};

function Icon(props: IconPropsType) {
	return (
		<svg
			style={{ display: 'block' }}
			width={props.width || '120'}
			height={props.height || '120'}
			viewBox={props.viewBox || '0 0 120 120'}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg>
	);
}

export default Icon;
