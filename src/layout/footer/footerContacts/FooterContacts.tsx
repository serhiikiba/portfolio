import styled from 'styled-components';

import { FlexContainer } from '../../../components/FlexContainer';
import Icon from '../../../components/icon/Icon';
import Social from '../../../components/social/Social';

function FooterContacts() {
	return (
		<FlexContainer align='center'>
			<Icon iconId='logoFooter' viewBox='0 0 97 59' />
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
		</FlexContainer>
	);
}

const StyledContacts = styled.div`
	display: flex;
`;

const StyledMyContacts = styled.div`
	display: flex;
	gap: 30px;
	margin-right: 60px;
`;

const StyledContactLink = styled.a`
	font-weight: 400;
	color: #a7a7a7;
`;

export default FooterContacts;
