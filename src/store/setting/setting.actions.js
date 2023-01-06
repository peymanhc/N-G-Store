import axios from 'axios';


export const GET_SETTING_DATA = '[SETTING] GET_SETTING_DATA';



export function getSetting(page){
    const request = axios.get(`/eda/generalSettings/WPAConfiguration?cityLocation=32.456456,56.6456456&SSIPD=5.63.13.165&lang=en&{page}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_SETTING_DATA,
                payload: response.data
            })
        );
}

