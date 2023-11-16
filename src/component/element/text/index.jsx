import { styled } from "styled-components";

export default styled.span`
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
	font-weight: ${({ weight }) => weight};

	${({ isGradient }) => isGradient && `
		background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		font-family: MantouSansRegular;
	`}
`;
