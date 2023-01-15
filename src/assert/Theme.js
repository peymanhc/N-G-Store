import React, { useEffect, useLayoutEffect } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function Theme(props) {
	
	const direction = props.direction

	const theme = createMuiTheme({
		direction,
		typography: {
			fontFamily: 'IRANSans'
		},
		MuiButtonBase: {
			disableRipple: true,
		},	
		//transitions: {
		//	create: () => 'none',
		//},		
	});
	 
	useEnhancedEffect(() => {
		document.documentElement.dir = direction;
	}, [direction]);


	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default React.memo(Theme);
