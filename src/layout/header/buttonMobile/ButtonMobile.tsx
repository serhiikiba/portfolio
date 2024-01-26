import styled, { css } from 'styled-components';

export type ButtonMobileProps = {
	isOpen: boolean;
	handelModal: React.MouseEventHandler<HTMLDivElement>;
};

function ButtonMobile(props: ButtonMobileProps) {
	return (
		<ButtonWrap isOpen={props.isOpen} onClick={props.handelModal}>
			<span></span>
			<span></span>
			<span></span>
		</ButtonWrap>
	);
}

const ButtonWrap = styled.div<{ isOpen: boolean }>`
	display: none;
	@media screen and (max-width: 830px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
		width: 35px;
		height: 40px;
		cursor: pointer;
		position: relative;
		right: 0;
		top: 0;
		z-index: 10;

		span {
			width: 100%;
			height: 2px;
			background-color: #ccc;
			transition: transform 0.3s ease-in-out;

			&:nth-child(1) {
				${props =>
					props.isOpen &&
					css<{ isOpen: boolean }>`
						transform: rotate(45deg) translateY(14px);
					`}
			}

			&:nth-child(2) {
				${props =>
					props.isOpen &&
					css<{ isOpen: boolean }>`
						transform: scaleX(0);
					`}
			}

			&:nth-child(3) {
				${props =>
					props.isOpen &&
					css<{ isOpen: boolean }>`
						transform: rotate(-45deg) translateY(-14px);
					`}
			}
		}
	}
`;

export default ButtonMobile;
