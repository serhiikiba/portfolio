import styled from 'styled-components';

import { FlexContainer } from '../../../components/FlexContainer';
import {
	SectionSubTitle,
	SectionTitle,
} from '../../../components/sectionTitle/SectionTitle';
import Project from './project/Project';

import projImg1 from '../../../assets/images/proj-img1.png';
import projImg2 from '../../../assets/images/proj-img2.png';
import projImg3 from '../../../assets/images/proj-img3.png';
import projImg4 from '../../../assets/images/proj-img4.png';

function Projects() {
	return (
		<MyProjects>
			<SectionTitle title='Projects' />
			<SectionSubTitle title='Things I’ve built so far' />
			<FlexContainer wrap='wrap' gapColum='40px' gapRow='65px'>
				<Project
					src={projImg1}
					title='Project Tile goes here'
					description='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					techStack='Tech stack : HTML , JavaScript, SASS, React'
					gitLink='https://github.com/serhiikiba'
				/>
				<Project
					src={projImg2}
					title='Project Tile goes here'
					description='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					techStack='Tech stack : HTML , JavaScript, SASS, React'
					gitLink='https://github.com/serhiikiba'
				/>
				<Project
					src={projImg3}
					title='Project Tile goes here'
					description='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					techStack='Tech stack : HTML , JavaScript, SASS, React'
					gitLink='https://github.com/serhiikiba'
				/>
				<Project
					src={projImg4}
					title='Project Tile goes here'
					description='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					techStack='Tech stack : HTML , JavaScript, SASS, React'
					gitLink='https://github.com/serhiikiba'
				/>
			</FlexContainer>
		</MyProjects>
	);
}

const MyProjects = styled.section`
	margin-top: 200px;
`;

export default Projects;
