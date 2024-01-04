import styled from 'styled-components';

type FlexContainerType = {
	direction?: string;
	justify?: string;
	align?: string;
	gap?: string;
	wrap?: string;
};

export const FlexContainer = styled.div<FlexContainerType>`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'space-between'};
	align-items: ${props => props.align || 'center'};
	gap: ${props => props.gap || '0'};
	flex-wrap: ${props => props.wrap || 'nowrap'};
`;
