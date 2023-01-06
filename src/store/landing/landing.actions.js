import axios from 'axios';


export const GET_LANDING_DATA = '[LANDING] GET_LANDING_DATA';



export function getLandingData(language){
    const request = axios.get(`/eda/generalSettings/landingpage?cityLocation=32.456456,56.6456456&SSIPD=5.63.13.165&lang=${language}`);

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_LANDING_DATA,
                payload: response.data
            })
        );
}

