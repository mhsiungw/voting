import styled from "styled-components";

const Icon = styled.img`
	width: ${({ width = '32px' }) => width};
	height: ${({ height = '32px' }) => height};
	max-width: ${({ width = '32px' }) => width};
	max-height: ${({ height = '32px' }) => height};
	min-width: ${({ width = '32px' }) => width};
	min-height: ${({ height = '32px' }) => height};
`
export default Icon;
