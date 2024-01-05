import styled from 'styled-components';

import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';
import Social from '../../components/social/Social';

function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
			<Social />
		</StyledHeader>
	);
}

export default Header;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
