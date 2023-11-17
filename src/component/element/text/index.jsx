import { styled } from "styled-components";

export default styled.span`
	display: inline-block;
	color: ${({ $color }) => $color};
	background-color: ${({ $bg }) => $bg};
	font-size: ${({ size }) => size};
	font-weight: ${({ weight }) => weight};
	padding: ${({ $p, theme }) => theme.paddings[$p]};
	border-radius: ${({ $isRound, $borderRadius }) => {
		console.log('$isRound', $isRound);
		if ($isRound) {
			return '50%'
		}

		return $borderRadius;
	}};

	${({ $isGradient }) => $isGradient && `
		background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		font-family: MantouSansRegular;
	`}

${({ $isGradientBg }) => $isGradientBg && `
		background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
		font-family: MantouSansRegular;
	`}
`;
