import styled from 'styled-components';
import Icon from '../icon/Icon';

function Social() {
	return (
		<StyledSocial>
			<a href='https://github.com/serhiikiba'>
				<Icon
					iconId='linkGithub'
					width='30px'
					height='30px'
					viewBox='0 0 30 30'
				/>
			</a>
			<a href='https://www.linkedin.com/in/sergey-kiba-517764278/'>
				<Icon
					iconId='linkedinLink'
					width='30px'
					height='30px'
					viewBox='0 0 30 30'
				/>
			</a>
		</StyledSocial>
	);
}

const StyledSocial = styled.div`
	display: flex;
	gap: 20px;
`;

export default Social;
