import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const isAuthTokenValid = access_token => {
	if ( !access_token )
		return false;	
	const decoded = jwtDecode(access_token);
	const currentTime = Date.now() / 1000;
	if ( decoded.exp < currentTime )
		return false;
	else
		return true;
};

export const setSession = access_token => {
	if (access_token) {
		localStorage.setItem('jwt_access_token', access_token);
		axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
	} 
	else {
		localStorage.removeItem('jwt_access_token');
		delete axios.defaults.headers.common.Authorization;
	}
};

export const getAccessToken = () => { 			
	return localStorage.getItem('jwt_access_token');		
};
	
export const logout = () => {
	setSession(null);
};