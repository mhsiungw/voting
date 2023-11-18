import styled, { useTheme } from 'styled-components';
import { Text, H2 } from '@/component/element';
import { breakpointEnums } from '@/theme';

const { LG } = breakpointEnums;

const RWDH2 = styled(H2)`
	font-size: 52px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 96px;
	}
`;
const RWDName = styled(Text)`
	font-size: 28px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 40px;
	}
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
const RWDNameWrapper = styled.div`
	display: flex;
	gap: 5px;
	padding: 16px;
	border: 1px solid #fff;
	border-radius: 16px;
	box-shadow: 0px 4px 12px 0px #a3b4cb33;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 104px;
`;

const BeforeFooterSection = () => {
	const { primaryTheme } = useTheme();

	return (
		<Style>
			<RWDH2Wrapper>
				<RWDH2 $isGradient>台灣的明天</RWDH2>
				<RWDH2 $isGradient>喵先鋪路</RWDH2>
			</RWDH2Wrapper>
			<RWDNameWrapper>
				<RWDNumber $isRound $isGradientBg $color='#fff'>
					3
				</RWDNumber>
				<RWDName $color={primaryTheme} $weight='700'>
					喵立翰 Miao Li-Han
				</RWDName>
			</RWDNameWrapper>
		</Style>
	);
};

export default BeforeFooterSection;
