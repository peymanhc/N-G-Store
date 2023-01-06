import * as Actions from './location.actions';

const initialState = {
	current	: null,
};

const locationReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.LOCATION_CHANGE:
        {
            return {
				...state,
				current : action.payload,
			}
        }
        default:
        {
            return state;
        }
    }
};

export default locationReducer;

