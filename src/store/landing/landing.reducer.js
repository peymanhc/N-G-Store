import * as Actions from './landing.actions';

export default (state = null, action) => {
    switch ( action.type )
    {
		case Actions.GET_LANDING_DATA: {
			return getData(state, action.payload);
		}		
        default:
        {
            return state;
        }
    }
};

const getData = (state, result) => { 
	if(result.msgFlag !== "0")
		return state;
	return result.data;
};
