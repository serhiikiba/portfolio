import styled from 'styled-components';

import photo from '../../../assets/images/photo.png';
import { FlexContainer } from '../../../components/FlexContainer';

function Main() {
	return (
		<StyledFlexContainer wrap='wrap' gapRow='50px'>
			<StyledText>
				<span>
					Hi 👋, <br />
					My name is
				</span>
				<span>Kiba Sergey</span>
				<h1>A Web Developer.</h1>
			</StyledText>
			<StyledBlockPhoto>
				{/* <StyledAbstraction src={abstraction} alt='Abstraction' /> */}
				<Photo src={photo} alt='My Photo' />
			</StyledBlockPhoto>
		</StyledFlexContainer>
	);
}

const StyledFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 995px) {
		justify-content: center;
	}
`;

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

	@media screen and (max-width: 995px) {
		text-align: center;
	}
`;

const Photo = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

const StyledBlockPhoto = styled.div`
	width: 360px;
	height: 360px;
	padding: 7px;
	background: linear-gradient(to bottom, #13b0f5, #e70faa);
	position: relative;
	margin-right: 80px;
	border-radius: 50%;
`;

const StyledAbstraction = styled.img`
	position: absolute;
	top: -140px;
	left: -145px;
`;

export default Main;
