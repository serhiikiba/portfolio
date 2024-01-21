import styled from 'styled-components';
import { font } from '../../styles/Common';

export function SectionTitle(props: { title: string }) {
	return <Title>{props.title}</Title>;
}

export function SectionSubTitle(props: { title: string }) {
	return <SubTitle>{props.title}</SubTitle>;
}

const Title = styled.h2`
	text-align: center;
	margin-bottom: 30px;
	${font({ Fmax: 48, Fmin: 36, weight: 700 })}
`;

const SubTitle = styled.h3`
	text-align: center;
	${font({ Fmax: 32, Fmin: 28, color: '#a7a7a7' })}
`;
