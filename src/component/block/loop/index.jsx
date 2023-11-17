import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const loop1 = keyframes`
  from{transform: translateX(100%)};
  to{transform: translateX(-100%)};
`;
const loop2 = keyframes`
  from{transform: translateX(0%)};
  to{transform: translateX(-200%)};
`;

const loopAnimation = css`
	animation: ${props => props.$loopType} 20s linear infinite;
	animation-delay:  ${props => props.$loopType === loop1 ? '0s' : '-50s'};
`;


const Loop = styled.div`
	${() => loopAnimation}
`

export const LoopAnimation = ({ children }) => {
	return (
		<>
			<Loop $loopType={loop1}>{children}</Loop>
			<Loop $loopType={loop2}>{children}</Loop>
		</>
	);
};

LoopAnimation.propTypes = {
	children: PropTypes.node,
}