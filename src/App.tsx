import styled from 'styled-components';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import Contacts from './layout/section/contacts/Contacts';
import Main from './layout/section/main/Main';
import Projects from './layout/section/projects/Projects';
import Skills from './layout/section/skills/Skills';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	return (
		<StyledContainer>
			<GlobalStyles />
			<Header />
			<Main />
			<Skills />
			<Projects />
			<Contacts />
			<Footer />
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	max-width: 1190px;
	margin: 0 auto;
	padding: 0 15px;
`;

export default App;
