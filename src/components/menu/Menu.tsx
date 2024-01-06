import styled from 'styled-components';

function Menu(props: { menuList: Array<string> }) {
	return (
		<StyledMenu>
			<ul>
				{props.menuList.map((item, index) => (
					<li key={index}>
						<a href='#/'>{item}</a>
					</li>
				))}
			</ul>
		</StyledMenu>
	);
}

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 50px;
	}

	a:hover {
		color: #e70faa;
	}
`;

export default Menu;
