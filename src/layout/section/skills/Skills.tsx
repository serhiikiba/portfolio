import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import Icon from '../../../components/icon/Icon';
import {
	SectionSubTitle,
	SectionTitle,
} from '../../../components/sectionTitle/SectionTitle';

const mySkillsIcons = [
	'htmlIcon',
	'scc',
	'javascript',
	'react',
	'redux',
	'bootstrap',
	'sass',
	'git',
	'github',
	'typeScript',
	'styled',
];

function Skills() {
	return (
		<SkillsSection>
			<SectionTitle title='My Tech Stack' />
			<SectionSubTitle title='Technologies I’ve been working with recently' />
			<IconWrap>
				<FlexContainer gapRow='70px' gapColum='90px' wrap='wrap'>
					{mySkillsIcons.map((item, index) => {
						const viewBox = item === 'styled' ? '0 0 32 32' : '0 0 120 120';
						return (
							<Icon
								key={index}
								iconId={item}
								width='100px'
								height='100px'
								viewBox={viewBox}
							/>
						);
					})}
				</FlexContainer>
			</IconWrap>
		</SkillsSection>
	);
}

const SkillsSection = styled.section`
	margin-top: 250px;
`;

const IconWrap = styled.div`
	margin-top: 120px;
`;

export default Skills;
