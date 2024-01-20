import styled from 'styled-components';

import { useState } from 'react';
import Logo from '../../components/logo/Logo';
import Menu from '../../components/menu/Menu';
import Social from '../../components/social/Social';
import ButtonMobile from './buttonMobile/ButtonMobile';
import MobileMenu from './mobileMenu/MobileMenu';

export const menuList = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

function Header() {
	const [isOpen, setOpen] = useState(false);

	const handelModal = () => {
		setOpen(!isOpen);
	};
	return (
		<StyledHeader>
			<Logo />
			<Navigation>
				<Menu menuList={menuList} />
				<Social />
			</Navigation>
			<ButtonMobile isOpen={isOpen} handelModal={handelModal} />
			<MobileMenu isOpen={isOpen} />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 220px;

	@media screen and (max-width: 995px) {
		margin-bottom: 120px;
	}
`;

const Navigation = styled.nav`
	display: flex;
	column-gap: 50px;

	@media screen and (max-width: 830px) {
		display: none;
	}
`;

export default Header;
