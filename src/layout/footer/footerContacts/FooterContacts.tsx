import styled from 'styled-components';

import { Link, animateScroll as scroll } from 'react-scroll';
import { FlexContainer } from '../../../components/FlexContainer';
import Icon from '../../../components/icon/Icon';
import Social from '../../../components/social/Social';

function FooterContacts() {
	return (
		<StyledFlexContainer align='center'>
			<StyledIconContainer>
				<Link
					to='main'
					onClick={() => {
						scroll.scrollToTop();
					}}
				>
					<Icon iconId='logoFooter' viewBox='0 0 97 59' />
				</Link>
			</StyledIconContainer>
			<StyledContacts>
				<StyledMyContacts>
					<StyledContactLink href='tel:+38 664732827'>
						+38 06647 32827
					</StyledContactLink>
					<StyledContactLink href='mailto:serhiikiba@gmail.com'>
						serhiikiba@gmail.com
					</StyledContactLink>
				</StyledMyContacts>
				<Social />
			</StyledContacts>
		</StyledFlexContainer>
	);
}

const StyledFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 410px) {
		justify-content: center;
	}
`;

const StyledContacts = styled.div`
	display: flex;
	gap: 30px;

	@media screen and (max-width: 640px) {
		flex-direction: column;
		row-gap: 30px;
	}
`;

const StyledIconContainer = styled.div`
	a {
		cursor: pointer;
	}

	@media screen and (max-width: 410px) {
		display: none;
	}
`;

const StyledMyContacts = styled.div`
	display: flex;
	gap: 30px;

	@media screen and (max-width: 970px) {
		flex-direction: column;
		gap: 15px;
		align-items: center;
	}
`;

const StyledContactLink = styled.a`
	font-weight: 400;
	color: #a7a7a7;
`;

export default FooterContacts;
