import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme.jsx';
import GlobalStyle from '@/global-style.jsx';
import App from '@/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<App />
		</ThemeProvider>
  </React.StrictMode>,
)
