import styled, { css } from 'styled-components';
import Menu from '../../../components/menu/Menu';
import { ButtonMobileProps } from '../buttonMobile/ButtonMobile';

function MobileMenu(props: ButtonMobileProps) {
	return (
		<MobilePopup isOpen={props.isOpen} onClick={props.handelModal}>
			<Navigation>
				<Menu />
			</Navigation>
		</MobilePopup>
	);
}

const MobilePopup = styled.div<{ isOpen: boolean }>`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 5;
	background-color: rgba(31, 31, 32, 0.95);
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.5s ease-in-out;

	${props =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			opacity: 1;
			pointer-events: auto;
		`}
`;

const Navigation = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default MobileMenu;
