import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import './fonts/Ubuntu/Ubuntu-Light.ttf';
import './index.css';


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
);
