import React from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line
import { getAccessToken, isAuthTokenValid, setSession } from './AuthService';

const Auth = ({children}) => {
	
	const dispatch = useDispatch();

	React.useEffect(() => { 
	
		const access_token = getAccessToken();
		if(!access_token)
			return;
		
		const isValid = isAuthTokenValid(access_token);	

		if(isValid){ 
			setSession(access_token);
		}
		
	}, [dispatch]);	

	return (
		<>		
		{children}
		</>
	);
};


export default Auth;