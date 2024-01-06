import { FlexContainer } from '../FlexContainer';
import Icon from '../icon/Icon';

function Social() {
	return (
		<FlexContainer gapColum='20px'>
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
			<a href='https://www.linkedin.com/in/sergey-kiba-517764278/'>
				<Icon
					iconId='facebook'
					width='30px'
					height='30px'
					viewBox='0 0 47 47'
				/>
			</a>
		</FlexContainer>
	);
}

export default Social;
