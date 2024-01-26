import styled from 'styled-components';
import { font } from '../../../styles/Common';

function Contacts() {
	return (
		<StyledContacts id='contact'>
			<ContactsTitle>For any questions please mail me:</ContactsTitle>
			<ContactsLink href='mailto:serhiikiba@gmail.com'>
				serhiikiba@gmail.com
			</ContactsLink>
		</StyledContacts>
	);
}

const StyledContacts = styled.section`
	margin-top: 170px;
	@media screen and (max-width: 768px) {
		margin-top: 120px;
	}
`;

const ContactsTitle = styled.h2`
	text-align: center;
	letter-spacing: -1px;
	${font({ Fmax: 58, Fmin: 36, weight: 700 })}
`;

const ContactsLink = styled.a`
	display: block;
	text-align: center;
	margin-top: 10px;
	letter-spacing: -1px;
	cursor: pointer;
	background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
	background-clip: text;

	&:hover {
		color: none;
	}

	${font({ Fmax: 58, Fmin: 26, weight: 700, color: 'transparent' })}
`;

export default Contacts;
