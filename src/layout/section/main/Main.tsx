import styled from 'styled-components';

import photo from '../../../assets/images/photo.png';
import { FlexContainer } from '../../../components/FlexContainer';
import Icon from '../../../components/icon/Icon';

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
			<Icon iconId='abstraction' />
			<Photo src={photo} alt='My Photo' />
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
	width: 320px;
	height: 320px;
	border-radius: 50%;
	position: relative;
	border: 2px solid #e70faa;
`;

export default Main;
