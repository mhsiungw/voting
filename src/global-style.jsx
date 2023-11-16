import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #FDFCFB;
	}

	@font-face {
		font-family: MantouSansRegular;
		src: url(../public/MantouSans-Regular.ttf);
	}
`

export default GlobalStyle;
