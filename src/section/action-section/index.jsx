import BsCard from 'react-bootstrap/Card';
import styled, { useTheme } from 'styled-components';
import { breakpointEnums } from '@/theme';
import { DonatePng, MailPng } from '@/asset';

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

		> div {
			height: 50%;
		}

		div:nth-child(2) {
			display: flex;
			align-items: center;

			> * {
				width: 50%;
			}
		}
	}
`;

const Button = styled.button`
	justify-self: baseline;
	color: ${({ theme }) => theme.textPrimary};
	background-color: #fff;
	border: none;
	font-size: 16px;
	padding: 16px 24px;
	border-radius: 500px;
	font-weight: 600;
`;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 24px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		justify-content: space-between;
	}

	${({ theme }) => theme.breakpoints.up(LG)} {
		justify-content: space-between;
	}
`;

const Card = styled(BsCard)`
	background-color: ${({ $bg }) => $bg};
	color: #fff;
	border: none;
	flex-basis: 98%;
	padding: 40px 24px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		flex-basis: 48%;
	}

	${({ theme }) => theme.breakpoints.up(LG)} {
		flex-basis: 30%;
	}
`;

const ActionSection = () => {
	const { primaryTheme, textPrimary } = useTheme();

	return (
		<Style>
			<Flex>
				<Card $bg={primaryTheme}>
					<Card.Body>
						<div>
							<Card.Title>小額支持喵喵</Card.Title>
							<Card.Subtitle>
								您的小筆捐款，是每隻毛孩未來的大大動力！
							</Card.Subtitle>
						</div>
						<div>
							<Button>小額捐款 &rarr;</Button>
							<img src={DonatePng} alt='' />
						</div>
					</Card.Body>
				</Card>
				<Card $bg={textPrimary}>
					<Card.Body>
						<div>
							<Card.Title>民眾服務信箱</Card.Title>
							<Card.Subtitle>
								親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
							</Card.Subtitle>
						</div>
						<div>
							<Button>填寫表單 &rarr;</Button>
							<img src={MailPng} alt='' />
						</div>
					</Card.Body>
				</Card>
			</Flex>
		</Style>
	);
};

export default ActionSection;
