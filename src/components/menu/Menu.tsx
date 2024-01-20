import styled from 'styled-components';

function Menu(props: { menuList: Array<string> }) {
	return (
		<StyledMenu>
			{props.menuList.map((item, index) => (
				<li key={index}>
					<a href='#/'>{item}</a>
				</li>
			))}
		</StyledMenu>
	);
}

const StyledMenu = styled.ul`
	display: flex;
	gap: 50px;

	a:hover {
		color: #e70faa;
	}

	@media screen and (max-width: 920px) {
		gap: 25px;
	}

	@media screen and (max-width: 830px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		a {
			font-size: 48px;
		}
	}
`;

export default Menu;
