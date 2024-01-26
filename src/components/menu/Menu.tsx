import { Link } from 'react-scroll';
import styled from 'styled-components';

const items = [
	{
		title: 'About',
		href: 'about',
	},
	{
		title: 'Tech Stack',
		href: 'skills',
	},
	{
		title: 'Projects',
		href: 'projects',
	},
	{
		title: 'Contact',
		href: 'contact',
	},
];

function Menu() {
	const onConsole = () => {
		console.log('Click');
	};
	return (
		<StyledMenu>
			{items.map((item, index) => (
				<li key={index}>
					<Link to={`${item.href}`} onClick={onConsole} smooth={true}>
						{item.title}
					</Link>
				</li>
			))}
		</StyledMenu>
	);
}

const StyledMenu = styled.ul`
	display: flex;
	gap: 50px;

	a {
		transition: all 0.5s;
		cursor: pointer;
	}

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
