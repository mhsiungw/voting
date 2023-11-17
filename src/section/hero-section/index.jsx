import styled, { useTheme } from 'styled-components';
import { Text, H2 } from '@/component/element';
import { HEROPng } from '@/asset';
import { breakpointEnums } from '@/theme';

const { MD, LG } = breakpointEnums;

const RWDH2 = styled(H2)`
	font-size: 52px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 96px;
	}
`;

const RWDImg = styled.img`
	width: 327;
	height: 255px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		width: 723px;
		height: 537px;
	}
`;

const RWDPosition = styled(Text)`
	font-size: 20px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 28px;
	}
`;

const RWDName = styled(Text)`
	font-size: 28px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 40px;
	}
`;

const RWDNumber = styled(Text)`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		width: 50px;
		height: 50px;
		line-height: 50px;
		font-size: 32px;
	}
`;

const Style = styled.div`
	margin: 32px 16px 16px 16px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

const RWDH2Wrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	margin-bottom: 16px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		flex-direction: row;
		justify-content: center;
	}
`;

const RWDIntroWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 16px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		flex-direction: row;
		justify-content: center;
	}
`;

const RWDImgWrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;

	${({ theme }) => theme.breakpoints.up(MD)} {
		flex-direction: row;
		justify-content: center;
	}
`;

const RWDNameWrapper = styled.div`
	display: flex;
	gap: 5px;
	padding: 16px;
	border: 1px solid #fff;
	border-radius: 16px;
	box-shadow: 0px 4px 12px 0px #A3B4CB33;
`;

const HeroSection = () => {
	const { primaryTheme, textPrimary } = useTheme();

	return (
		<Style>
			<RWDH2Wrapper>
				<RWDH2 $isGradient>台灣的明天</RWDH2>
				<RWDH2 $isGradient>喵先鋪路</RWDH2>
			</RWDH2Wrapper>

			<RWDIntroWrapper>
				<RWDPosition
					$color='#fff'
					$bg={textPrimary}
					$p='s'
					$borderRadius='16px'
				>
					2024 立委參選人
				</RWDPosition>

				<RWDNameWrapper>
					<RWDNumber $isRound $isGradientBg $color='#fff'>
						3
					</RWDNumber>
					<RWDName $color={primaryTheme} $weight='700'>
						喵立翰 Miao Li-Han
					</RWDName>
				</RWDNameWrapper>
			</RWDIntroWrapper>
			<RWDImgWrapper>
				<RWDImg src={HEROPng} />
			</RWDImgWrapper>
		</Style>
	);
};

export default HeroSection;
