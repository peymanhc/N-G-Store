import * as Actions from './profile.actions';

const initialState = {
	detail	: null,
	loading:false,
	error:"",
	comments: [],
};

const profile = function (state = initialState, action) {
    switch ( action.type )
    {
		case Actions.GET_PROFILE_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case Actions.GET_PROFILE_DETAIL: {
			return {
				...state,
				detail: action.payload,
				loading: false,
			}
		}
		case Actions.GET_PROFILE_FAILED: {
			return {
				...state,
				error: action.payload,
				loading: false,
			}
		}
        case Actions.GET_PROFILE_DETAIL_COMMENTS:
        {
            return {
				...state,
				comments: action.payload.data,
				loading: false,
			};
        }		
        default:
        {
            return state;
        }
    }
};

const getProfile = (state, result) => {
	if(result.length === 0)
		return state;

	const { 
		id, masterName:name, masterDescription:description, masterImage:imagesAdress, PricePerHours:price, masterRate:rate,masterEmail:email, 
		masterMobile:mobile, masterAddress:address, aboutme, Availability:availability, photos, Qualifications : qualifications, vote, 
		SocialNetwork : socialNetwork, categoriesObject : categories, Lables : labels, Verification : verification, translate, 
		masterLocation : location, 
	} = result[0];

	const detail = {id, name, description, imagesAdress, price, rate, email, mobile, address, aboutme, availability, photos, 
		qualifications, vote, socialNetwork, categories, labels, verification, translate, location
	};
	
	return {...state, detail};
};

export default profile;
