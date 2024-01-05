import styled from 'styled-components';
import Header from './layout/header/Header';
import Main from './layout/section/main/Main';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<StyledContainer>
			<GlobalStyles />
			<Header />
			<Main />
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	max-width: 1190px;
	margin: 0 auto;
	padding: 0 10px;
`;

export default App;
