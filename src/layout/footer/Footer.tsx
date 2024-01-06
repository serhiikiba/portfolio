import styled from 'styled-components';
import FooterContacts from './footerContacts/FooterContacts';
import FooterMenu from './footerMenu/FooterMenu';

function Footer() {
	return (
		<StyledFooter>
			<FooterContacts />
			<StyledLine />
			<FooterMenu />
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	margin-top: 200px;
	padding-bottom: 50px;
`;

const StyledLine = styled.div`
	margin: 30px auto 40px auto;
	height: 2px;
	width: 90%;
	background-color: #42446e;
`;

export default Footer;
