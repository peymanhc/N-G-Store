import axios from 'axios';
// eslint-disable-next-line 
import languages from '../../data/language';

export const GET_LANGUAGES = '[LOCALE] GET_LANGUAGES';
export const LOCALE_CHANGE = '[LOCALE] LOCALE_CHANGE';


//export function getLanguages()
//{
//    return {
//        type	: GET_LANGUAGES,
//		payload	: languages,		
//    }
//}
export function getLanguages()
{
    const request = axios.get('/eda/generalSettings/getlanguage?SSIPD=5.63.13.176&lang=en');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_LANGUAGES,
                payload: response.data
            })
        );
}
export function localeChange(locale)
{
    return {
        type	: LOCALE_CHANGE,
		payload	: locale,		
    }
}
