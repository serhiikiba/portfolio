import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import Menu from '../../../components/menu/Menu';

const menuList = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

function FooterMenu() {
	return (
		<FlexContainer>
			<Menu menuList={menuList} />
			<StyledText>
				Crafted with <span style={{ color: '#8e19e2' }}>Passion</span> and{' '}
				<span style={{ color: '#aa21cc' }}>Code</span> by{' '}
				<span style={{ color: '#E70FAA' }}>Kiba Sergey</span> ☕
			</StyledText>
		</FlexContainer>
	);
}

const StyledText = styled.p``;

export default FooterMenu;
