import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		scrollBehavior: "smooth",
	}
}));

const Scrollbar = ({children}) => { 
	
	const ref = React.createRef();
	//const history = useHistory();
	useHistory();
	const classes = useStyles();
			
	React.useEffect( () => { 
		
		const timeId = setTimeout(function(){ 
			if(ref.current)
				ref.current.scrollTop = 0;
		});
		
		return () => {
			clearTimeout(timeId);
		};
		
	}, [ref]);
		
	return (
		<div ref={ref} className={classes.root} id="ScrollWrapper">
			{children}
		</div>
	);
};

export default Scrollbar;