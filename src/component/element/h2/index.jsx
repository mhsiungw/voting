import { styled } from "styled-components";

export default styled.h2.attrs(props => ({ $isGradient: props.$isGradient }))`
	display: inline-block;
	margin-bottom: 0;
	line-height: 100%;
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
	font-weight: ${({ weight }) => weight};

	${({ $isGradient }) => $isGradient && `
		background: linear-gradient(90deg, #E6793B 1.54%, #FF4185 97.86%);
		-webkit-background-clip: text;
		color: transparent;
		font-family: MantouSansRegular;
	`}
`;
