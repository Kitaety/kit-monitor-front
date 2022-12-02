/* eslint no-var: 0, no-console: 0 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './sass/index.scss';

const root = ReactDOM.createRoot(
	/* eslint no-undef: 0 */
	window.document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
