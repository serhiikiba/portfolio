import styled from 'styled-components';

function Contacts() {
	return (
		<StyledContacts>
			<ContactsTitle>For any questions please mail me:</ContactsTitle>
			<ContactsLink href='mailto:serhiikiba@gmail.com'>
				serhiikiba@gmail.com
			</ContactsLink>
		</StyledContacts>
	);
}

const StyledContacts = styled.section`
	margin-top: 170px;
`;

const ContactsTitle = styled.h2`
	text-align: center;
	font-size: 58px;
	font-weight: 700;
	letter-spacing: -1px;
`;

const ContactsLink = styled.a`
	display: block;
	text-align: center;
	margin-top: 10px;
	font-size: 58px;
	font-weight: 700;
	letter-spacing: -1px;
	cursor: pointer;
	color: transparent;
	background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
	background-clip: text;

	&:hover {
		color: none;
	}
`;

export default Contacts;
