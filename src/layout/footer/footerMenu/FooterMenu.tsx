import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import Menu from '../../../components/menu/Menu';

const menuList = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

function FooterMenu() {
	return (
		<FlexContainer>
			<Menu menuList={menuList} />
			<StyledText>Designed and built by Pavan MG with Love & Coffee</StyledText>
		</FlexContainer>
	);
}

const StyledText = styled.div``;

export default FooterMenu;
