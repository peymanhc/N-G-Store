import axios from 'axios';


export const GET_CONTACT_DATA = '[CONTACT] GET_CONTACT_DATA';



export function getContactData(language){
    const request = axios.get(`/eda/generalSettings/contactpage?cityLocation=32.456456,56.6456456&SSIPD=5.63.13.165&lang=${language}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_CONTACT_DATA,
                payload: response.data
            })
        );
}

