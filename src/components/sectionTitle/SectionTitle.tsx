import styled from 'styled-components';

export function SectionTitle(props: { title: string }) {
	return <Title>{props.title}</Title>;
}

export function SectionSubTitle(props: { title: string }) {
	return <SubTitle>{props.title}</SubTitle>;
}

const Title = styled.h2`
	text-align: center;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 30px;
`;

const SubTitle = styled.h3`
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	color: #a7a7a7;
`;
