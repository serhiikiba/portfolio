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
				<span>kiba sergey</span>
				<h1>A Web Developer.</h1>
			</StyledText>
			<Icon iconId='abstraction' />
			<Photo src={photo} alt='My Photo' />
		</FlexContainer>
	);
}

const StyledText = styled.div``;

const Photo = styled.img`
	width: 320px;
	height: 320px;
	border-radius: 50%;
	position: relative;
	border: 2px solid #e70faa;
`;

export default Main;
