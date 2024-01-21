import styled from 'styled-components';
import Icon from '../../../../components/icon/Icon';
import Image, { ImageType } from '../../../../components/image/Image';

type ProjectType = ImageType & {
	title: string;
	description: string;
	techStack: string;
	gitLink: string;
};

function Project(props: ProjectType) {
	return (
		<StyledProject>
			<Image src={props.src} alt={props.alt} />
			<ProjectTitle>{props.title}</ProjectTitle>
			<ProjectDescr>{props.description}</ProjectDescr>
			<ProjectTechStack>{props.techStack}</ProjectTechStack>
			<ProjectLink href={props.gitLink}>
				<Icon
					iconId='linkGithub'
					width='18px'
					height='18px'
					viewBox='0 0 28 28'
				/>{' '}
				View Code
			</ProjectLink>
		</StyledProject>
	);
}

const StyledProject = styled.div`
	text-align: center;
	max-width: 373px;
	min-height: 567px;
	border-radius: 20px;
	background: #363636;
	box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);

	svg {
		margin-right: 10px;
	}
`;

const ProjectTitle = styled.h3`
	margin-top: 20px;
	font-size: 28px;
	font-weight: 500;
`;

const ProjectDescr = styled.p`
	width: 314px;
	margin: 15px auto 0 auto;
`;

const ProjectTechStack = styled.p`
	width: 314px;
	margin: 15px auto 0 auto;
	font-size: 16px;
	font-weight: 400;
`;

const ProjectLink = styled.a`
	display: inline-block;
	margin-top: 20px;
	margin-bottom: 25px;
	text-align: center;
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	text-decoration-line: underline;
`;

export default Project;
