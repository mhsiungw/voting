import styled from "styled-components";
import { Text } from "@/component/element";
import { breakpointEnums } from "@/theme";

const { SM, LG } = breakpointEnums;

const RWDImg = styled.img`
	display: inline-block;

	${({ theme }) => theme.breakpoints.up(SM)} {
		width: 52px;
		height: 43px;
	}
	
	${({ theme }) => theme.breakpoints.down(SM)} {
		width: 34px;
		height: 28px;
	}
`;

const RWDText = styled(Text)`
	${({ theme }) => theme.breakpoints.up(SM)} {
		font-size: 24px;
	}

	${({ theme }) => theme.breakpoints.down(SM)} {
		font-size: 20px;
	}
`

const RWDIconLayout = styled.div`
	display: flex;
	gap: 16px;

	${({ theme }) => theme.breakpoints.down(SM)} {
		display: none;
	}
`;

const RWDLinkLayout = styled.div`
	display: flex;
	gap: 24px;

	${({ theme }) => theme.breakpoints.down(LG)} {
		display: none;
	}
`;

const Style = styled.div`
	padding: 16px 14px;


	${({ theme }) => theme.breakpoints.up(SM)} {
		padding: 16px 24px;
		position: sticky;
		top: 0;
		z-index: 1020;
	}

	.navbar {
		width: 100%;
		padding: 0%;
	}

	.container {
		padding: 0;
		margin: 0;
	}

	.navbar-brand {
		display: flex;
		align-items: center;
		margin-right: 0;
		gap: 8px;
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export {
	Style,
	Container,
	RWDImg,
	RWDText,
	RWDIconLayout,
	RWDLinkLayout,
};
