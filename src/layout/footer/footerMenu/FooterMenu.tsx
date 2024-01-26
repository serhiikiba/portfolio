import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import Menu from '../../../components/menu/Menu';

const menuList = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

function FooterMenu() {
	return (
		<FlexContainer>
			<Navigation>
				<Menu />
			</Navigation>
			<StyledText>
				Crafted with <span style={{ color: '#8e19e2' }}>Passion</span> and{' '}
				<span style={{ color: '#aa21cc' }}>Code</span> by{' '}
				<span style={{ color: '#E70FAA' }}>Kiba Sergey</span> ☕
			</StyledText>
		</FlexContainer>
	);
}

const Navigation = styled.nav`
	@media screen and (max-width: 1070px) {
		display: none;
	}
`;

const StyledText = styled.p`
	@media screen and (max-width: 1070px) {
		width: 100%;
		text-align: center;
	}
`;

export default FooterMenu;
