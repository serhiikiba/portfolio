import styled from 'styled-components';

import abstraction from '../../../assets/images/Abstract.svg';
import photo from '../../../assets/images/photo.png';
import { FlexContainer } from '../../../components/FlexContainer';

function Main() {
	return (
		<FlexContainer>
			<StyledText>
				<span>
					Hi 👋, <br />
					My name is
				</span>
				<span>Kiba Sergey</span>
				<h1>A Web Developer.</h1>
			</StyledText>
			<StyledBlockPhoto>
				<StyledAbstraction src={abstraction} alt='Abstraction' />
				<Photo src={photo} alt='My Photo' />
			</StyledBlockPhoto>
		</FlexContainer>
	);
}

const StyledText = styled.div`
	span,
	h1 {
		font-size: 58px;
		font-weight: 700;
	}

	span + span {
		display: block;
		color: transparent;
		background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
		background-clip: text;
	}
`;

const Photo = styled.img`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	border: 4px solid transparent;
	background: conic-gradient(from 90deg, #13b0f5, #e70faa);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 4px solid transparent;
		border-radius: 50%;
		z-index: -1;
	}
`;

const StyledBlockPhoto = styled.div`
	position: relative;
	margin-right: 80px;
`;

const StyledAbstraction = styled.img`
	position: absolute;
	top: -140px;
	left: -152px;
`;

export default Main;
