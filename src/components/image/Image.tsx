import styled from 'styled-components';

export type ImageType = {
	src: string;
	alt?: string;
};

function Image(props: ImageType) {
	return <StyledImage src={props.src} alt={props.alt || 'My project'} />;
}

const StyledImage = styled.img`
	width: 100%;
	height: 260px;
	border-radius: 20px 20px 0px 0px;
`;

export default Image;
