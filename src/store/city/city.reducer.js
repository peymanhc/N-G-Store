import * as Actions from './city.actions';



const initialState = {
	cities				: [],
	current				: {
		title		: 'all-city',
		cityLocation: null,
	},
};

const cityReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_CITIES:
        {
            return getCity(action.payload, state)
        }
        case Actions.CITY_CHANGE:
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

export default cityReducer;

const getCity = (payload, state) => {
	try{
		if(payload.msgFlag !== "0")
			return state;
		const data = payload.data;
		const cities = data.map(item => ({...item, name:item.title}));
		return {...state, cities};
	}
	catch{}
	return state;
}
