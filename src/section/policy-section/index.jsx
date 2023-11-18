import BsCard from 'react-bootstrap/Card';
import styled, { useTheme } from 'styled-components';
import { Text } from '@/component/element';
import { breakpointEnums } from '@/theme';
import {
	Policy1Png,
	Policy2Png,
	Policy3Png,
} from '@/asset';

const { MD, LG } = breakpointEnums;

const Style = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1296px;
	margin: auto;
	padding: 104px 16px;

	.card-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0;
	}
`;

const RWDTitle = styled(Text)`
	font-size: 16px;
`;

const RWDSubTitle = styled(Text)`
	font-size: 52px;
`;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		justify-content: space-between;
	};

	${({ theme }) => theme.breakpoints.up(LG)} {
		justify-content: space-between;
	};
`;

const Card = styled(BsCard)`
	border: none;
	flex-basis: 98%;

	${({ theme }) => theme.breakpoints.up(MD)} {
		flex-basis: 48%;
	};

	${({ theme }) => theme.breakpoints.up(LG)} {
		flex-basis: 30%;
	};
`

const PolicySection = () => {
	const { textPrimary } = useTheme();

	return (
		<Style>
			<RWDTitle
				$color='#fff'
				$bg={textPrimary}
				$p='s'
				$borderRadius='16px'
			>
				POLICY ISSUES
			</RWDTitle>
			<RWDSubTitle $isGradient>政策議題</RWDSubTitle>
			<Flex>
				<Card>
					<Card.Body>
						<Card.Title>為毛孩子謀福利！推動寵物醫療保障方案</Card.Title>
						<Card.Img src={Policy1Png}/>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>打造休閒天堂！推廣寵物休閒與娛樂場所</Card.Title>
						<Card.Img src={Policy2Png}/>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>推廣寵物飼養教育，讓愛更加專業</Card.Title>
						<Card.Img src={Policy3Png}/>
					</Card.Body>
				</Card>
			</Flex>
		</Style>
	);
};

export default PolicySection;
