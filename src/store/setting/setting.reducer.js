import * as Actions from './setting.actions';

const initialState = {
	priceRange:{},
	logo:[],
	slider:[],
	seo:[],
	footerMenu:[],
	scripts:[],
	sociallink:[],
	footer:'',
};

const setting = function (state = initialState, action) {
    switch ( action.type )
    {
		case Actions.GET_SETTING_DATA: {
			return {
				...state,
				...action.payload.data,
			}
		}		
        default:
        {
            return state;
        }
    }
};

export default setting;
