import styled, { useTheme } from 'styled-components';
import { Text, Icon } from '@/component/element';
import { breakpointEnums } from '@/theme';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/asset';

const { LG } = breakpointEnums;

const Style = styled.div`
	background-color: ${({ theme }) => theme.bgColorTheme2};
	padding: 64px 16px;

	display: flex;
	flex-direction: column;
	gap: 24px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Location = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const RWDNameWrapper = styled.div`
	display: flex;
	gap: 5px;
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

const RWDIconLayout = styled.div`
	display: flex;
	gap: 16px;
`;

const RWDName = styled(Text)`
	font-size: 28px;

	${({ theme }) => theme.breakpoints.up(LG)} {
		font-size: 40px;
	}
`;

const BgWhite = styled.div`
	border-radius: 50%;
	padding: 10px;
	background-color: #fff;
`;

const FooterSection = () => {
	const { textPrimary, primaryTheme } = useTheme();

	return (
		<Style>
			<Intro>
				<RWDNameWrapper>
					<RWDNumber $isRound $isGradientBg $color='#fff'>
						3
					</RWDNumber>
					<RWDName $color={primaryTheme} $weight='700'>
						喵立翰 Miao Li-Han
					</RWDName>
				</RWDNameWrapper>
				<RWDIconLayout>
					<BgWhite>
						<Icon src={FacebookIcon} />
					</BgWhite>
					<BgWhite>
						<Icon src={InstagramIcon} />
					</BgWhite>
					<BgWhite>
						<Icon src={YoutubeIcon} />
					</BgWhite>
				</RWDIconLayout>
				<Text $color={textPrimary}>
					© 2023 喵立翰 Miao Li-Han 版權所有
				</Text>
			</Intro>
			<Location>
				<Text $color={textPrimary} $size='24px' $weight='700'>
					競選總部
				</Text>
				<Text $color={textPrimary} $size='16px' $weight='400'>
					辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓
				</Text>
				<Text $color={textPrimary} $size='16px' $weight='400'>
					電話：(02) 888-5678
				</Text>
				<Text $color={textPrimary} $size='16px' $weight='400'>
					電子郵件地址：meowoffice@linmeow.tw
				</Text>
			</Location>
		</Style>
	);
};

export default FooterSection;
