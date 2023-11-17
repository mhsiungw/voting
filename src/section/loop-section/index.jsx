import { LoopAnimation } from '@/component/block';
import { Text } from '@/component/element';
import styled from 'styled-components';

const RWDText = styled(Text)`
	bottom: 0;
	width: 100%;
	font-size: 40px;
	font-family: MantouSansRegular;
	color: #fff;
	white-space: nowrap;
`;

const Style = styled.div`
	background-color: ${({ theme }) => theme.primaryTheme};
	display: flex;
	align-items: center;
`;

const LoopSection = () => {
	return (
		<Style>
			<LoopAnimation>
				<RWDText>為喵星人，護台灣 從喵的眼中，看見台灣 喵的未來，人的希望</RWDText>
			</LoopAnimation>
		</Style>
	);
};

export default LoopSection;
