import { createStyledBreakpointsTheme } from "styled-breakpoints";

const breakpointEnums = {
	SM: 'sm',
	MD: 'md',
	LG: 'lg',
}

const {SM, MD, LG} = breakpointEnums;

const theme = {
	...createStyledBreakpointsTheme({
		breakpoints: {
			[SM]: '375px',
			[MD]: '768px',
			[LG]: '1440px',
		},
	}),
	primaryTheme: "#DA7D4A",
	textPrimary: "#334155",
	textSecondary: "#94A3B8",
	bgColorTheme1: "#FDFCFB",
	bgColorTheme2: "#FDFCFB",
	paddings: {
		s: '12px 16px'
	},
}

export {
	theme,
	breakpointEnums,
}
