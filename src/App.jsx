import {
	NavBarSection,
	HeroSection,
	LoopSection,
	AdvocacySection,
	EventSection,
	PolicySection,
} from '@/section';
import styled from 'styled-components';

const Viewport100 = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
`;

const Flex1 = styled.div`
	flex: 1;
	margin-top: 48px;
`;

const App = () => {
	return (
		<>
			<Viewport100>
				<NavBarSection />
				<Flex1>
					<HeroSection />
				</Flex1>
				<LoopSection />
			</Viewport100>
			<AdvocacySection />
			<EventSection/>
			<PolicySection/>
		</>
	);
};

export default App;
