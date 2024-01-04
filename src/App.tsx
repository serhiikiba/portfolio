import styled from 'styled-components';
import Header from './layout/header/Header';
import Main from './layout/section/main/Main';

function App() {
	return (
		<StyledContainer>
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
