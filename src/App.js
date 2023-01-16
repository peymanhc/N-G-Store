import React from "react";
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import rtl from 'jss-rtl';

import Auth from "assert/Auth";
import Root from './Root';

const history = createBrowserHistory();

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const App = () => { 
		
	return (	
		<StylesProvider jss={jss} generateClassName={generateClassName}>			
			<Auth>	
				<Router basename="/" history={history}>	
					<Root />
				</Router>
			</Auth>
		</StylesProvider>	
	);
};

export default App;