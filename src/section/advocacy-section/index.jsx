import styled, { useTheme } from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Text } from '@/component/element';
import { AdvocacyPng } from '@/asset';
import { breakpointEnums } from '@/theme';

const { MD } = breakpointEnums;

const Styled = styled.div`
	background-color: ${({ theme }) => theme.bgColorTheme2};
	padding: 64px 16px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		padding: 64px 32px;
	}

	.card {
		border-radius: 16px;
		overflow: hidden;
		margin: auto;

		${({ theme }) => theme.breakpoints.up(MD)} {
			display: flex;
			flex-direction: row;
			max-width: 1200px;

			.card-body,
			.card-img-bottom {
				width: 50%;
			}
		}
	}

	.card-img-bottom {
		border-radius: 0;
	}


	.card-body {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.card-title {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const RWDTitle = styled(Text)`
	font-size: 16px;
`;

const RWDSubTitle = styled(Text)`
	font-size: 52px;
`;

const AdvocacySection = () => {
	const { primaryTheme, textPrimary } = useTheme();

	return (
		<Styled>
			<Card>
				<Card.Body>
					<Card.Title>
						<RWDTitle
							$color='#fff'
							$bg={textPrimary}
							$p='s'
							$borderRadius='16px'
						>
							ADVOCATE
						</RWDTitle>
						<RWDSubTitle $isGradient>候選人主張</RWDSubTitle>
					</Card.Title>
					<Card.Text>
						<Text $size='24px' $weight={700} $color={textPrimary}>
							我堅信 ! 藉由推動更完善的
							<Text $color={primaryTheme}>貓咪福利</Text>
							和相關政策，更是間接地投資於
							<Text $color={primaryTheme}>台灣的未來</Text>。
						</Text>
					</Card.Text>
					<Card.Text>
						<Text $size='16px' $color={textPrimary}>
							畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
							GDP 經濟帶來巨大效益。
							因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
						</Text>
					</Card.Text>
				</Card.Body>
				<Card.Img variant='bottom' src={AdvocacyPng} />
			</Card>
		</Styled>
	);
};

export default AdvocacySection;
