import * as Actions from './localeActions';

const languages	= [	
	{
		id			: '1', 
		locale		: 'en', 
		icon		: '/static/images/flags/en.png', 
		name		: 'English', 
		direction	: 'ltr', 
		default		: true,
	},
	{
		id			: '2', 
		locale		: 'ar', 
		icon		: '/static/images/flags/fa.png', 
		name		: 'Arabic', 
		direction	: 'rtl', 
		default		: false,
	},
	{
		id			: '3', 
		locale		: 'fr', 
		icon		: '/static/images/flags/ru.png', 
		name		: 'French', 
		direction	: 'ltr', 
		default		: false,
	},
];

const initialState = {
	languages,
	current		: {
		locale		:'en',
		direction	: 'ltr',
	},
};

const localeReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_LANGUAGES:
        {
            return getLanguage(action.payload, state);
        }
        case Actions.LOCALE_CHANGE:
        {
            return {
                ...state,
				current : action.payload,
            };
        }
        default:
        {
            return state;
        }
    }
};

export default localeReducer;

const getLanguage = (payload, state) => { 
	try{
		if(payload.msgFlag !== "0")
			return state;
		const data = payload.data;
		const languages = data.map(({lan_id:id, lan_name:locale, flagUrl:icon, lan_title:name, lan_dir:direction, lan_defult}) => ({id, locale, icon, name, direction, default:lan_defult}));
		const current = languages.find(item => item.default === "true");
		if(!current || current.locale === state.current.locale)
			return {...state, languages};
		return {...state, languages, current};
	}
	catch{}
	return state;
}