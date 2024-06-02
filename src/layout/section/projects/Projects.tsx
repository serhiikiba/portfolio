import styled from 'styled-components';

import {FlexContainer} from '../../../components/FlexContainer';
import {SectionSubTitle, SectionTitle,} from '../../../components/sectionTitle/SectionTitle';
import Project from './project/Project';

import projImg1 from '../../../assets/images/web-slider.png';
import projImg2 from '../../../assets/images/web-nft.png';
import projImg3 from '../../../assets/images/web-game.png';
import projImg4 from '../../../assets/images/game-canvas.jpg';
import projImg5 from '../../../assets/images/todo-list.png';

function Projects() {
	return (
		<MyProjects id='projects'>
			<SectionTitle title='Projects' />
			<SectionSubTitle title='Things I’ve built so far' />
			<StyledFlexContainer
				justify='space-around'
				wrap='wrap'
				gapColum='40px'
				gapRow='55px'
				style={{ marginTop: '90px' }}
			>
				<Project
					src={projImg1}
					title='My website whith slider'
					description='This project is a compact and engaging website featuring a dynamic slider, built using HTML, SCSS, JavaScript, and the Swiper library. The site highlights my proficiency in creating interactive web components'
					techStack='Tech stack : HTML SCSS JavaScript Swiper'
					gitLink='https://github.com/Serhii-Ki/travelX'
				/>
				<Project
					src={projImg2}
					title='SPA in React with Styled Components'
					description='This project is a modern single-page application (SPA) built using React and styled-components. The application demonstrates my skills in front-end development, specifically in creating responsive and visually appealing user interfaces.'
					techStack='Tech stack : Styled components React'
					gitLink='https://github.com/Serhii-Ki/creative_art'
				/>
				<Project
					src={projImg3}
					title='Dice Game "Pig"'
					description='This project is a fun and interactive dice game called "Pig," developed using HTML, CSS, JavaScript, and MobX. The game showcases my ability to create engaging and dynamic web applications with a focus on state management and responsive design'
					techStack='Tech stack : HTML, CSS, JavaScript, Mobx'
					gitLink='https://github.com/Serhii-Ki/game-pig'
				/>
				<Project
					src={projImg4}
					title='Mini Games: Flappy Bird and Racing'
					description='This project features two exciting mini-games, Flappy Bird and Racing, developed using HTML, JavaScript, and the Canvas API. The games highlight my skills in creating interactive and visually engaging web applications using 2D graphics.'
					techStack='Tech stack : HTML, JavaScript, canvas'
					gitLink='https://github.com/Serhii-Ki/GamesOnCanvas'
				/>
				<Project
						src={projImg5}
						title='To-Do List Application'
						description='This project is a feature-rich to-do list application developed using React, Redux, MUI (Material-UI), and react-router-dom. The application showcases my ability to build complex, state-managed web applications with a modern UI framework and client-side routing.'
						techStack='Tech stack : React, Redux, MUI, react-router-dom'
						gitLink='https://github.com/Serhii-Ki/todolist'
				/>
			</StyledFlexContainer>
		</MyProjects>
	);
}

const StyledFlexContainer = styled(FlexContainer)`
	@media screen and (max-width: 820px) {
		justify-content: center;
	}
`;

const MyProjects = styled.section`
	margin-top: 200px;

	@media screen and (max-width: 768px) {
		margin-top: 100px;
	}
`;

export default Projects;
