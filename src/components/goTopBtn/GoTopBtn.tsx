import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

function GoTopBtn() {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});
	}, []);
	return (
		<>
			{showBtn && (
				<StyledGoTopBtn
					onClick={() => {
						scroll.scrollToTop();
					}}
				>
					&#x21ef;
				</StyledGoTopBtn>
			)}
		</>
	);
}

const StyledGoTopBtn = styled.button`
	position: fixed;
	bottom: 15px;
	right: 15px;
	border: none;
	outline: none;
	color: white;
	font-size: 27px;
	cursor: pointer;
	padding: 10px 15px;
	background-color: #000000cc;
	border-radius: 50%;
`;

export default GoTopBtn;
