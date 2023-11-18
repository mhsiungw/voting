import styled, { useTheme } from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Event1Png, Event2Png, Event3Png } from '@/asset';
import { Text } from '@/component/element';
import { breakpointEnums } from '@/theme';

const { LG } = breakpointEnums;

const events = [
	{
		id: 1,
		img: Event1Png,
		date: '2023/12/26',
		title: '參與台北寵物論壇，爭取貓咪友善環境',
		content:
			'炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
	},

	{
		id: 2,
		img: Event2Png,
		date: '2023/12/24',
		title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
		content:
			'街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
	},
	{
		id: 3,
		img: Event3Png,
		date: '2023/12/20',
		title: '收容所模特兒大比拼！',
		content:
			'今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
	},
	{
		id: 4,
		img: Event1Png,
		date: '2023/12/26',
		title: '參與台北寵物論壇，爭取貓咪友善環境',
		content:
			'炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！',
	},
];

const RWDTitle = styled(Text)`
	font-size: 16px;
`;

const RWDSubTitle = styled(Text)`
	font-size: 52px;
`;

const Button = styled.button`
	justify-self: baseline;
	color: ${({ theme }) => theme.textPrimary};
	background-color: #f1f5f9;
	border: none;
	font-size: 16px;
	padding: 16px 24px;
	border-radius: 500px;
	font-weight: 600;
`;

const Style = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	padding-top: 64px;
	padding-bottom: 104px;
	margin: auto;
	width: 90vw;
	max-width: 1296px;

	.card {
		width: 100%;

		border: none;
		.card-body {
			margin-top: 16px;
			padding: 0;
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		&--1 {
			.card-title {
				font-size: 20px;
			}

			.card-text {
				font-size: 16px;
			}
		}

		&--2,
		&--3,
		&--4 {
			display: flex;
			flex-direction: row;
			gap: 16px;
			align-items: center;

			.img {
				width: 31%;

				.card-img-top {
					max-width: 100%;
					min-width: 100%;
					width: 100%;
				}
			}

			.card-body {
				flex: 1;
			}

			img {
				object-fit: cover;
			}

			.card-title {
				font-size: 16px;
			}

			.card-text {
				font-size: 14px;

				span {
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
		}
	}
`;

const Grid = styled.div`
	${({ theme }) => theme.breakpoints.up(LG)} {
		display: grid;
		gap: 24px;
		justify-items: baseline;
		height: 538px;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(10, 1fr);
		grid-template-areas: 
			"e1 e2"
			"e1 e2"
			"e1 e2"
			"e1 e3"
			"e1 e3"
			"e1 e3"
			"e1 e4"
			"e1 e4"
			"e1 e4"
			"e1 btn";
	}
`;

const GridItem = styled.div`
	grid-area: ${({ $area }) => $area};
`;

const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const EventSection = () => {
	const { textPrimary } = useTheme();

	return (
		<Style>
			<Flex>
				<RWDTitle
					$color='#fff'
					$bg={textPrimary}
					$p='s'
					$borderRadius='16px'
				>
					LATEST EVENTS
				</RWDTitle>
				<RWDSubTitle $isGradient>最新活動</RWDSubTitle>
			</Flex>
			<Grid>
				{events.map(({ id, img, date, title, content }) => (
					<GridItem key={id} $area={`e${id}`}>
						<Card className={`card--${id}`}>
							<div className='img'>
								<Card.Img variant='top' src={img} />
							</div>
							<Card.Body>
								<Card.Subtitle>
									<Text
										$color='#94A3B8'
										$size='14px'
										$weight='400'
									>
										{date}
									</Text>
								</Card.Subtitle>
								<Card.Title>
									<Text $color={textPrimary} $weight='700'>
										{title}
									</Text>
								</Card.Title>
								<Card.Text>
									<Text $color={textPrimary} $weight='400'>
										{content}
									</Text>
								</Card.Text>
							</Card.Body>
						</Card>
					</GridItem>
				))}
				<GridItem $area="btn">
					<Button>查看更多 &rarr;</Button>
				</GridItem>
			</Grid>
		</Style>
	);
};

export default EventSection;
